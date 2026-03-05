import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { LogoCarousel } from "./components/LogoCarousel";
import { FeaturesSection } from "./components/FeaturesSection";
import { CaseStudiesSection } from "./components/CaseStudiesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  // State to track initial load animation
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after a brief delay for animation purposes
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div 
        id="main-app"
        className={`min-h-screen flex flex-col transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar />
        <main className="flex-1 pt-0">
          <div id="home">
            <HeroSection />
          </div>
          <LogoCarousel />
          <FeaturesSection />
          <CaseStudiesSection />
          <div id="testimonials">
            <TestimonialsSection />
          </div>
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}