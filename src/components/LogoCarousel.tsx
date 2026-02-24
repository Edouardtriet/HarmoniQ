// Import company logos from testimonials
import plainsAllAmericanLogo from "figma:asset/beb07d339ce1c6ad28b0dca8fc483db217505b1c.png";
import lineageLogo from "figma:asset/5f01d4f7c59b25bf618f95210f085fa1cdcedb14.png";
import attLogo from "figma:asset/063568038c6dd38f076c4c63c8a9385f36b6ffc3.png";
import flexLogo from "figma:asset/0220da21cbfc8544ecb12aa90c04350de737905a.png";
import cbreLogo from "figma:asset/a4561c167c034510ae4960801b5444aac0371a6f.png";
import cowboysLogo from "figma:asset/9fe3b1a1c51f1171e87219c7050f4d7703823913.png";
import pioneerMetalLogo from "figma:asset/4114b08f7d42deca80d468040c6e7187fb9afb17.png";
import hcaHealthcareLogo from "figma:asset/7ae39855c4937af4acb15f452eede9f7dfd09208.png";

// Import additional client logos
import dellLogo from "figma:asset/4b4b248c1f6d6666b1ef55e032ed8daa860d65e6.png";
import amazonLogisticsLogo from "figma:asset/facba888ff4375f15356a6ff594429b8c3038114.png";
import standardAeroLogo from "figma:asset/9d51cecaf5b44525a624fdce98ede3fa5d903a71.png";
import suezEnvironmentLogo from "figma:asset/5c1709c8f76ef1ed65a1dcdf3bb0a9333f25b10b.png";
import serverfarmLogo from "figma:asset/4fe826940af0eb6f5dddd266b8457d605a958715.png";
import energyAssetsLogo from "figma:asset/b68f209583c7bf9da34095ce8c2520814b89cd99.png";
import databankLogo from "figma:asset/c5ad900d7ee7131d7223287d36bd044111e5436b.png";
import fischerFarmsLogo from "figma:asset/110717aaddfc28e00f454e78e3b5607e587b4d14.png";
import rioTintoLogo from "figma:asset/640b7d79b95127e7cd7ee8d231e55c3c424fe04b.png";
import nortegasLogo from "figma:asset/616e0f33ff31152b5476bd9716c8beec9869b137.png";
import pcmcLogo from "figma:asset/550fe20a867f920c1ede5ecf3b4d0c7abe0513b2.png";
import atlantaAirportLogo from "figma:asset/1400ed41236a5cfe96ef510d169217fb6dc87c21.png";

import { useState, useRef, useEffect, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';

export function LogoCarousel() {
  // Get current theme
  const { theme } = useTheme();
  
  // State for drag functionality
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Define anchor logos that must be in specific positions
  const anchorLogos = [
    { name: "Dell", imageUrl: dellLogo },          // Position 2 (index 1)
    { name: "Amazon Logistics", imageUrl: amazonLogisticsLogo }, // Position 5 (index 4)
    { name: "AT&T", imageUrl: attLogo }            // Position 8 (index 7)
  ];

  // Define all other logos to be randomized
  const otherLogos = [
    { name: "CBRE", imageUrl: cbreLogo },
    { name: "Dallas Cowboys", imageUrl: cowboysLogo },
    { name: "FLEX", imageUrl: flexLogo },
    { name: "Plains All American", imageUrl: plainsAllAmericanLogo },
    { name: "Lineage", imageUrl: lineageLogo },
    { name: "HCA Healthcare", imageUrl: hcaHealthcareLogo },
    { name: "Pioneer Metals", imageUrl: pioneerMetalLogo },
    { name: "StandardAero", imageUrl: standardAeroLogo },
    { name: "Suez Environment", imageUrl: suezEnvironmentLogo },
    { name: "Serverfarm", imageUrl: serverfarmLogo },
    { name: "Energy Assets", imageUrl: energyAssetsLogo },
    { name: "DataBank", imageUrl: databankLogo },
    { name: "Fischer Farms", imageUrl: fischerFarmsLogo },
    { name: "Rio Tinto", imageUrl: rioTintoLogo },
    { name: "Nortegas", imageUrl: nortegasLogo },
    { name: "PCMC", imageUrl: pcmcLogo },
    { name: "Hartsfield-Jackson Atlanta International Airport", imageUrl: atlantaAirportLogo }
  ];

  // Create randomized order for other logos
  const shuffledOtherLogos = [...otherLogos].sort(() => Math.random() - 0.5);

  // Build final array with anchor logos in specific positions
  const companyLogos = [];
  let otherIndex = 0;

  for (let i = 0; i < 20; i++) {
    if (i === 1) {
      // Position 2: Dell
      companyLogos.push(anchorLogos[0]);
    } else if (i === 4) {
      // Position 5: Amazon Logistics
      companyLogos.push(anchorLogos[1]);
    } else if (i === 7) {
      // Position 8: AT&T
      companyLogos.push(anchorLogos[2]);
    } else {
      // Fill with randomized other logos
      companyLogos.push(shuffledOtherLogos[otherIndex]);
      otherIndex++;
    }
  }

  // Create multiple sets for infinite loop
  const infiniteLogos = [...companyLogos, ...companyLogos, ...companyLogos];

  // Mouse drag handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setIsAutoScrollPaused(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    containerRef.current.style.cursor = 'grabbing';
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
    containerRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleMouseUp = useCallback(() => {
    if (!containerRef.current) return;
    setIsDragging(false);
    containerRef.current.style.cursor = 'grab';
    // Resume auto-scroll after a short delay
    setTimeout(() => {
      setIsAutoScrollPaused(false);
    }, 3000);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!containerRef.current) return;
    setIsDragging(false);
    containerRef.current.style.cursor = 'grab';
    // Resume auto-scroll after leaving
    setTimeout(() => {
      setIsAutoScrollPaused(false);
    }, 2000);
  }, []);

  // Touch handlers for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setIsAutoScrollPaused(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    // Resume auto-scroll after a short delay
    setTimeout(() => {
      setIsAutoScrollPaused(false);
    }, 3000);
  }, []);

  // Pause auto-scroll on hover
  const handleMouseEnter = useCallback(() => {
    setIsAutoScrollPaused(true);
  }, []);

  const handleMouseLeaveContainer = useCallback(() => {
    if (!isDragging) {
      setTimeout(() => {
        setIsAutoScrollPaused(false);
      }, 1000);
    }
  }, [isDragging]);

  return (
    <div className="py-12 bg-gradient-to-br from-white/90 to-green-50/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-xl md:text-2xl font-medium mb-4 tracking-tight">
            <span className="gradient-text">HarmoniQ Technology Delivering Solutions to Diverse Industries</span>
          </h3>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Active Engagement with Existing and Prospective Customers
          </p>
        </div>

        {/* Logo Carousel */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth edge effect - theme-based inline styles */}
          <div 
            className="absolute left-0 top-0 w-20 h-full z-10 pointer-events-none"
            style={{
              background: theme === 'light' 
                ? 'linear-gradient(to right, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.75), transparent)'
                : 'linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8), transparent)'
            }}
          ></div>
          <div 
            className="absolute right-0 top-0 w-20 h-full z-10 pointer-events-none"
            style={{
              background: theme === 'light' 
                ? 'linear-gradient(to left, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.75), transparent)'
                : 'linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8), transparent)'
            }}
          ></div>
          
          <div 
            ref={containerRef}
            className={`logo-carousel-container overflow-x-auto scrollbar-hide select-none ${isDragging ? 'dragging' : 'cursor-grab'}`}
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              ref={trackRef}
              className={`flex gap-8 ${isAutoScrollPaused ? '' : 'logo-carousel-track'}`}
              style={{
                animationPlayState: isAutoScrollPaused ? 'paused' : 'running'
              }}
            >
              {infiniteLogos.map((logo, index) => (
                <div 
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 w-32 h-20 flex items-center justify-center group"
                >
                  <div className="relative w-full h-full glass hover:bg-white/95 hover:shadow-lg transition-all duration-300 rounded-lg p-3 group-hover:scale-105 group-hover:border-primary/20 dark:bg-white/95 dark:hover:bg-white">
                    <img
                      src={logo.imageUrl}
                      alt={`${logo.name} logo`}
                      className="w-full h-full object-contain transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-sm pointer-events-none"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}