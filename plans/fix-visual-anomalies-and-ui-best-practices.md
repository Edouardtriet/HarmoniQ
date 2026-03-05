# fix: Visual Anomalies, UI Best Practices & Responsiveness

## Overview

UI audit and fix plan for the HarmoniQ Technologies website. Based on visual analysis (desktop, tablet, mobile screenshots), UI/UX best practices research, and three parallel code reviews (DHH, Kieran, Simplicity). Revised to cut scope creep and focus on real bugs.

**Tech stack:** React + TypeScript + Tailwind CSS v4 SPA with Radix UI components.

## Problem Statement

The HarmoniQ website has a professional desktop experience but suffers from **mobile responsiveness bugs** and a few **missing accessibility basics**. The fixes are small and focused — one PR, one afternoon.

---

## Fixes (Single Phase, Single PR)

### 1. Fix `scrollToSection` Race Condition in Mobile Nav
- **File:** `src/components/Navbar.tsx`
- **Problem:** `scrollToSection` calls `scrollIntoView` before `setIsOpen(false)` finishes, but Radix Sheet locks body scroll while open. The scroll may silently fail because the body is still locked when `scrollIntoView` fires.
- **Fix:** Close the sheet first, then scroll after a `requestAnimationFrame` to let Radix unlock body scroll:
  ```typescript
  const scrollToSection = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      requestAnimationFrame(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  };
  ```
- **Note:** The Sheet overlay already has `bg-black/50` and closes on backdrop click (Radix default). No additional overlay/backdrop work needed.

### 2. Fix Card Horizontal Overflow on Mobile
- **File:** `src/components/TestimonialsSection.tsx`
- **Problem:** The testimonial scroll container uses `min-width: max-content` (line ~306) which extends beyond the mobile viewport. Cards are clipped on the right.
- **Fix:** Add `overflow-x: hidden` to the section's outer wrapper `<div className="relative">` (line ~280). Verify card widths at 320px.
- **Do NOT** add `overflow-x: hidden` to `<body>` — that's a blunt instrument that can break sticky positioning.

### 3. Add `scroll-padding-top` for Sticky Header
- **File:** `src/index.css`
- **Problem:** The fixed navbar (~80px) overlaps section content when anchor links scroll into view.
- **Fix:** One line of CSS on the existing `html` rule:
  ```css
  html {
    scroll-padding-top: 80px;
  }
  ```
- **Note:** `scroll-behavior: smooth` already exists at line 493 of `index.css`. Do not re-add it.

### 4. Hide Hero Floating Labels on Mobile
- **File:** `src/components/HeroSection.tsx`
- **Problem:** Floating UI labels ("Magnetic Wave Technology", "Free Pilot Available", "Up to 25% Savings", "Zero Downtime Install") around the circular animation overlap each other at mobile widths.
- **Fix:** Add `hidden md:block` to all absolutely-positioned floating cards (lines ~208-248) and pill labels (lines ~251-261). The information is already duplicated in the stat cards in the left column (lines ~93-113), so nothing is lost on mobile.

### 5. Stack Footer Trust Badges on Mobile
- **File:** `src/components/Footer.tsx`
- **Problem:** Three trust badges are squeezed into one horizontal row, wrapping badly on mobile.
- **Fix:** Change container to `flex-col sm:flex-row`. Add `hidden sm:block` to the dot separator divs between badges so they don't appear as orphaned dots when stacked vertically.

### 6. Reduce Excessive Whitespace on Mobile
- **File:** `src/components/TestimonialsSection.tsx`
- **Problem:** ~200-300px of empty space between the testimonial quotes and "Collective Impact" section on mobile.
- **Fix:** Reduce bottom padding and top margin on mobile:
  - Section: `pb-12 md:pb-24` (currently `pb-24`)
  - Summary stats `motion.div`: `mt-8 md:mt-16` (currently `mt-16`)

### 7. Dynamic Copyright Year
- **File:** `src/components/Footer.tsx`
- **Problem:** Footer hardcodes "2025".
- **Fix:** Replace with `{new Date().getFullYear()}`.

### 8. Targeted `prefers-reduced-motion` Support
- **File:** `src/index.css`
- **Problem:** No reduced-motion support for decorative animations.
- **Fix:** Target only decorative animation classes — do NOT use the nuclear `* { animation-duration: 0.01ms !important }` approach, as it breaks Radix Sheet open/close transitions:
  ```css
  @media (prefers-reduced-motion: reduce) {
    .animate-infinite-scroll,
    .float-animation,
    .magnetic-wave-enhanced,
    .rotate-gentle,
    .pulse-glow-enhanced {
      animation: none;
    }
  }
  ```

### 9. Add `aria-label` to Footer Social Icons
- **File:** `src/components/Footer.tsx`
- **Problem:** Social media buttons (LinkedIn, X/Twitter) have no accessible labels.
- **Fix:** Add `aria-label="LinkedIn"` and `aria-label="X (Twitter)"` to the respective button elements. Icons are already `w-5 h-5` in `w-10 h-10` containers (40px touch target) — no resizing needed.

---

## Bonus: Bugs Found During Review (Not in Original Audit)

These were discovered by the Kieran reviewer reading the actual source code:

### 10. Duplicate `id` Attributes (Invalid HTML)
- **Files:** `src/App.tsx`, section components
- **Problem:** `id="features"` and `id="contact"` exist on both wrapper `<div>`s in `App.tsx` AND on `<section>` elements inside `FeaturesSection.tsx` and `ContactSection.tsx`. Duplicate IDs cause unpredictable behavior with `querySelector` and `scrollIntoView`.
- **Fix:** Remove the duplicate IDs from `App.tsx` wrapper divs, keeping them only on the section elements.

### 11. `handleWheel` Blocks Native Page Scroll
- **File:** `src/components/TestimonialsSection.tsx`
- **Problem:** `handleWheel` calls `e.preventDefault()` (line ~205), which prevents users from scrolling past the testimonials section with a trackpad/mouse wheel. Serious usability issue.
- **Fix:** Remove the `e.preventDefault()` call, or make it conditional on the carousel being actively interacted with.

### 12. Double `onMouseLeave` Handlers
- **File:** `src/components/TestimonialsSection.tsx`
- **Problem:** Two `onMouseLeave` handlers on the scroll container (lines ~293 and ~298). The second overrides the first.
- **Fix:** Merge into a single handler.

---

## Items Deliberately Cut (Per Reviewer Consensus)

| Cut Item | Reason |
|----------|--------|
| Back-to-top button | YAGNI — sticky navbar with "Home" link already serves this purpose |
| Typography redesign (clamp, 65ch, letter-spacing) | Gold-plating — Tailwind responsive classes work fine |
| Touch target audit | Buttons already meet/near 44px targets |
| Focus state audit | `.focus-enhanced` class already exists site-wide |
| Newsletter CTA in footer | Feature request, not a bug fix |
| Card height equalization | Cards already have `h-full` + `flex-grow` |
| Contact phone mockup repositioning | Subjective design preference |
| Case study metric naming | Content/copywriting issue, not code |
| Nav active state styling | "Contact" is a CTA button, intentionally different |
| Mobile menu backdrop fix | Sheet overlay already has `bg-black/50` (Radix default) |

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/Navbar.tsx` | Fix scrollToSection race condition (#1) |
| `src/components/TestimonialsSection.tsx` | Fix overflow (#2), reduce whitespace (#6), fix handleWheel (#11), fix double onMouseLeave (#12) |
| `src/index.css` | scroll-padding-top (#3), prefers-reduced-motion (#8) |
| `src/components/HeroSection.tsx` | Hide floating labels on mobile (#4) |
| `src/components/Footer.tsx` | Stack trust badges (#5), dynamic year (#7), aria-labels (#9) |
| `src/App.tsx` | Remove duplicate IDs (#10) |

**Total: 6 files, 0 new files, ~40-50 lines changed.**

## Acceptance Criteria

- [x] Mobile nav links scroll to correct section after closing the menu
- [x] No horizontal overflow on any viewport width down to 320px
- [x] Anchor links land with content visible below the sticky header
- [x] Hero section is clean on mobile without overlapping labels
- [x] Footer trust badges stack vertically on mobile and are readable
- [x] No excessive white space gaps between sections on mobile
- [x] Copyright year is dynamic
- [x] Decorative animations disabled when `prefers-reduced-motion: reduce` is set
- [x] Social icons have accessible labels
- [x] No duplicate `id` attributes in the DOM
- [x] Trackpad users can scroll past the testimonials section
