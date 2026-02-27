import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, X, Zap, Sun, Moon } from "lucide-react";
import harmoniqFullLogo from 'figma:asset/6ed12e07942b84cb1a32ed4d4b0c8d7e09b92cf8.png';
import { useTheme } from "../context/ThemeContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Technology", href: "#features" },
    { label: "Applications", href: "#applications" },
    { label: "Case Studies", href: "#case-studies-section" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ];

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

  const scrollToContact = () => {
    setIsOpen(false);
    requestAnimationFrame(() => {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  };

  return (
    <header 
      className={`py-3 fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('#home')}>
          <div className="logo-container h-14 w-auto">
            <img 
              src={harmoniqFullLogo} 
              alt="HarmoniQ Technologies Logo" 
              className="h-full w-auto object-contain harmoniq-logo"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="relative py-3 px-4 text-base font-medium transition-all duration-300 hover:text-primary group focus-enhanced rounded-xl hover:bg-secondary/20 whitespace-nowrap"
            >
              {item.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-green-400 transition-all duration-300 group-hover:w-3/4 rounded-full"></span>
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-foreground/70 whitespace-nowrap">
              {theme === 'light' ? 'Light' : 'Dark'} Mode
            </span>
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              className="relative w-10 h-10 rounded-full glass border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 focus-enhanced"
            >
              <div className="theme-toggle-container w-5 h-5">
                <Sun className={`theme-toggle-icon w-5 h-5 text-primary transition-all duration-500 ${
                  theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-75'
                }`} />
                <Moon className={`theme-toggle-icon w-5 h-5 text-primary transition-all duration-500 ${
                  theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'
                }`} />
              </div>
              <span className="sr-only">Toggle {theme === 'light' ? 'dark' : 'light'} mode</span>
            </Button>
          </div>
          
          <Button 
            onClick={scrollToContact}
            className="btn-primary rounded-full px-6 py-3 h-11 glass backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus-enhanced text-base whitespace-nowrap"
          >
            <Zap className="w-4 h-4 mr-2" />
            Free Pilot
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile Theme Toggle */}
          <Button
            onClick={toggleTheme}
            variant="ghost"
            size="icon"
            className="relative w-10 h-10 rounded-full glass border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 focus-enhanced"
          >
            <div className="theme-toggle-container w-5 h-5">
              <Sun className={`theme-toggle-icon w-5 h-5 text-primary transition-all duration-500 ${
                theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-75'
              }`} />
              <Moon className={`theme-toggle-icon w-5 h-5 text-primary transition-all duration-500 ${
                theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'
              }`} />
            </div>
            <span className="sr-only">Toggle {theme === 'light' ? 'dark' : 'light'} mode</span>
          </Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full hover:bg-secondary/50 focus-enhanced">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="glass w-[80vw] sm:w-[350px] border-none backdrop-blur-xl">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="logo-container h-14 w-auto">
                      <img 
                        src={harmoniqFullLogo} 
                        alt="HarmoniQ Technologies Logo" 
                        className="h-full w-auto object-contain harmoniq-logo"
                      />
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-full hover:bg-secondary/50 focus-enhanced">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className="py-3 px-4 text-left hover:bg-secondary/50 rounded-xl transition-all duration-300 font-medium focus-enhanced text-base whitespace-nowrap"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
                <div className="mt-auto pt-6 space-y-4">
                  {/* Mobile Theme Toggle with Label */}
                  <div className="flex items-center justify-between p-4 rounded-xl glass border border-border">
                    <span className="text-sm font-medium text-foreground">
                      {theme === 'light' ? 'Light' : 'Dark'} Mode
                    </span>
                    <Button
                      onClick={toggleTheme}
                      variant="ghost"
                      size="icon"
                      className="relative w-10 h-10 rounded-full hover:bg-secondary/50 transition-all duration-300 focus-enhanced"
                    >
                      <div className="theme-toggle-container w-5 h-5">
                        <Sun className={`theme-toggle-icon w-5 h-5 text-primary transition-all duration-500 ${
                          theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-75'
                        }`} />
                        <Moon className={`theme-toggle-icon w-5 h-5 text-primary transition-all duration-500 ${
                          theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'
                        }`} />
                      </div>
                    </Button>
                  </div>
                  
                  <Button 
                    onClick={scrollToContact}
                    className="w-full btn-primary rounded-full glass backdrop-blur-md focus-enhanced h-12 text-base whitespace-nowrap"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Free Pilot
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}