import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building2, MapPin, TrendingUp, Quote, ChevronRight, Factory, Snowflake, Server, Droplets, Fuel, Building, Stethoscope, Zap } from "lucide-react";

export function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Get appropriate icon for each industry category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Commercial Real Estate":
        return Building;
      case "Telecommunications":
        return Server;
      case "Sports & Entertainment":
        return Zap;
      case "Electronics Manufacturing":
        return Factory;
      case "Oil & Gas":
        return Fuel;
      case "Cold Storage":
        return Snowflake;
      case "Healthcare":
        return Stethoscope;
      case "Manufacturing":
        return Factory;
      default:
        return Building2;
    }
  };

  const testimonials = [
    {
      title: "Senior Manager Engineering Operations",
      deployment: "2014-2019: 20 Buildings - 227 Units",
      buildings: "20",
      devices: "227",
      geography: "Milpitas, CA / Morgan Hill, CA / West Columbia, SC",
      savings: "10.12% Ave. Annual Savings per Building",
      financialImpact: "$7,726,049 Accumulated Savings",
      quote: "I was initially skeptical of the company's technology platform and their promise to deliver a measurable and sustainable reduction in the consumption and cost of electricity in our facilities, but after reviewing the performance results from multiple installations in the U.S., Mexico, and China over a period of more than five years I become an advocate for HarmoniQ's technology both then and now.",
      category: "Commercial Real Estate"
    },
    {
      title: "Director, Network Services",
      deployment: "Central Office Chiller Plant Pilot",
      buildings: "1",
      devices: "Pilot",
      geography: "Dallas, TX",
      savings: "13% reduction in amps",
      financialImpact: "$10,000/year/chiller",
      quote: "We were shocked by how much the amperage reduced and power factor improved in our pilot testing as most new technologies don't have an impact close to what they claim will exist. This represents a unique and successful outcome, and we will be working with HarmoniQ on a scaled deployment for our roughly 1,000 central offices.",
      category: "Telecommunications"
    },
    {
      title: "Director of Business Development",
      deployment: "2021: Distribution Center - 1 Building - 8 Units",
      buildings: "1",
      devices: "8",
      geography: "Kernersville, NC",
      savings: "9.59% Ave. Annual Savings per Building",
      financialImpact: "$35,091 Accumulated Savings",
      quote: "As an executive representative of a company whose goal is to provide clients with a fully turnkey innovative energy solution, I have been directly involved in the assessment of the electricity management solution from HarmoniQ. We authorized HarmoniQ's installation proposal for one of our facilities and retained a third-party engineering firm to verify the post installation results. Bottom line, HarmoniQ's technology delivered.",
      category: "Sports & Entertainment"
    },
    {
      title: "Former Group President",
      deployment: "78 Buildings - 652 Devices (2014-2020)",
      buildings: "78",
      devices: "652",
      geography: "Global deployment across multiple sites",
      savings: "10.10% Ave. Annual Savings per Building",
      financialImpact: "$18,738,767 Accumulated Savings",
      quote: "Following extensive testing at one site in Silicon Valley where we were able to validate the efficacy of the technology, we subsequently installed HarmoniQ's solution across multiple sites globally with similar results. Each installation was cost justified based on verified annual recurring electricity cost reductions of 6% to 17%.",
      category: "Electronics Manufacturing"
    },
    {
      title: "Director, Energy Management & Simulations",
      deployment: "2 Pilot Deployments on 9 Motors Total",
      buildings: "2",
      devices: "9",
      geography: "Cushing, OK",
      savings: "18-25% reduction in amps",
      financialImpact: "30% power factor increase",
      quote: "This technology works at a level we could not have anticipated. The application of the HarmoniQ line conditioner directly into our motor has not only optimized the efficiency of the motors but also lowered the running heat loads which will reduce maintenance events and extend useful life. The economic benefits of this technology to our operation at scale will be tremendous.",
      category: "Oil & Gas"
    },
    {
      title: "Regional Energy & Sustainability Manager",
      deployment: "2 Pilot Deployments at Cold Storage Facilities",
      buildings: "2",
      devices: "Multiple",
      geography: "Windsor, CO and Elizabeth, NJ",
      savings: "16-20% reduction in amps",
      financialImpact: "Significant facility impact",
      quote: "The results have been impressive. So much so that our facility manager thought a portion of our on-site equipment had been turned off when the HarmoniQ equipment was initially installed. This was clearly not the case; we have been pleasantly surprised that optimizing power quality could have such an impact on our facilities. Working with the HarmoniQ team has been a positive experience and we are thrilled with the outcome.",
      category: "Cold Storage"
    },
    {
      title: "Healthcare Facilities Manager",
      deployment: "2022: Distribution and Test Center - 1 Building - 14 Units",
      buildings: "1",
      devices: "14",
      geography: "Lakeland, FL",
      savings: "7.87% Ave. Annual Savings per Building",
      financialImpact: "$28,679 Accumulated Savings",
      quote: "We have experienced consistent energy savings and improved power quality with the HarmoniQ technology implementation at our distribution facility.",
      category: "Healthcare"
    },
    {
      title: "Chief Financial Officer",
      deployment: "2024 - 6 Different Plants",
      buildings: "6",
      devices: "Multiple",
      geography: "Chippewa Falls (WI), Salt Lake City (UT), Union City (CA), Warren (MI), New Hope (MN)",
      savings: "12-20% Annual Savings",
      financialImpact: "$396,000/year",
      quote: "This was an incredible outcome that has surpassed all expectations. We didn't realize how much of an opportunity there was to yield savings from improved power quality in our plants. Working with HarmoniQ Technologies and the team has been a true pleasure and we couldn't be happier with the outcome.",
      category: "Manufacturing"
    }
  ];

  // Create multiple duplicates to ensure seamless infinite scroll
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Handle mouse drag scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setIsUserScrolling(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (isUserScrolling) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsPaused(false);
        setIsUserScrolling(false);
      }, 3000);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (isUserScrolling) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsPaused(false);
        setIsUserScrolling(false);
      }, 3000);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle touch scrolling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsPaused(true);
    setIsUserScrolling(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    if (isUserScrolling) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsPaused(false);
        setIsUserScrolling(false);
      }, 3000);
    }
  };

  // Handle wheel scrolling (trackpad and mouse wheel)
  const handleWheel = (e: React.WheelEvent) => {
    if (!scrollContainerRef.current) return;
    e.preventDefault();
    setIsPaused(true);
    setIsUserScrolling(true);
    
    // Handle horizontal scrolling
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      scrollContainerRef.current.scrollLeft += e.deltaX;
    } else {
      // Convert vertical scroll to horizontal
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }

    // Resume auto-scroll after user stops
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsPaused(false);
      setIsUserScrolling(false);
    }, 3000);
  };

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate responsive card width
  const getCardWidth = () => {
    if (windowWidth < 640) return 304; // 280px + 24px gap
    if (windowWidth < 768) return 404; // 380px + 24px gap
    return 524; // 500px + 24px gap
  };

  // Calculate total width for one complete set of testimonials
  const totalWidth = testimonials.length * getCardWidth();

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section className="pt-8 pb-24 bg-gradient-to-br from-white/90 to-green-50/40 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block glass px-4 py-2 rounded-full mb-4">
            <span className="text-sm text-primary font-medium">Customer Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium mb-8 tracking-tight pb-4 leading-relaxed">
            Industry Leaders Share
            <span className="gradient-text block">HarmoniQ's Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how industry leaders across diverse sectors have achieved remarkable energy savings 
            with HarmoniQ's patented magnetic wave technology, delivering proven results in real-world applications.
          </p>
        </div>

        {/* Interactive Scrolling Testimonials */}
        <div className="relative">
          {/* User Instructions */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
              <span className="text-sm text-muted-foreground">
                <span className="hidden sm:inline">Scroll to see more</span>
                <span className="sm:hidden">Scroll to see more</span>
              </span>
              <ChevronRight className="w-4 h-4 text-primary animate-pulse" />
            </div>
          </div>

          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitScrollbar: { display: 'none' }
              }}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onWheel={handleWheel}
              onMouseEnter={() => !isUserScrolling && setIsPaused(true)}
              onMouseLeave={() => !isUserScrolling && setIsPaused(false)}
            >
              <div 
                ref={containerRef}
                className={`flex gap-6 testimonials-container ${!isPaused && !isUserScrolling ? 'animate-infinite-scroll' : ''}`}
                style={{ 
                  '--scroll-width': `${totalWidth}px`,
                  '--animation-key': animationKey,
                  minWidth: 'max-content'
                } as React.CSSProperties}
              >
              {infiniteTestimonials.map((testimonial, index) => {
                const CategoryIcon = getCategoryIcon(testimonial.category);
                return (
                <div key={`${index}-${testimonial.category}-${testimonial.title}`} className="flex-shrink-0 w-[280px] sm:w-[380px] md:w-[500px]">
                  <Card className="glass border-none hover-3d h-full group overflow-hidden">
                    <CardContent className="p-0">
                      {/* Industry Category Header */}
                      <div className="relative h-32 overflow-hidden bg-gradient-to-br from-primary/10 via-primary/20 to-primary/30">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
                        <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
                          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500">
                            <CategoryIcon className="w-8 h-8 text-primary" />
                          </div>
                          <h4 className="font-medium text-lg text-center text-primary">{testimonial.category}</h4>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 space-y-4">

                        {/* Professional Title Header */}
                        <div className="space-y-2">
                          <h3 className="font-medium text-lg text-center leading-tight">{testimonial.title}</h3>
                        </div>

                        {/* Deployment Details */}
                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <Building2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <div className="space-y-1">
                              <p className="text-sm font-medium">Deployment:</p>
                              <p className="text-sm text-muted-foreground">{testimonial.deployment}</p>
                            </div>
                          </div>
                          
                          {/* Buildings and Devices Count */}
                          <div className="flex gap-4">
                            <div className="flex items-center gap-1">
                              <Building2 className="w-3 h-3 text-primary" />
                              <span className="text-xs font-medium text-primary">{testimonial.buildings}</span>
                              <span className="text-xs text-muted-foreground">Buildings</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-3 rounded-sm bg-primary/20 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-sm bg-primary"></div>
                              </div>
                              <span className="text-xs font-medium text-primary">{testimonial.devices}</span>
                              <span className="text-xs text-muted-foreground">Units</span>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <div className="space-y-1">
                              <p className="text-sm font-medium">Geography:</p>
                              <p className="text-sm text-muted-foreground">{testimonial.geography}</p>
                            </div>
                          </div>
                        </div>

                        {/* Results */}
                        <div className="bg-primary/5 rounded-lg p-4 space-y-3">
                          <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">Results Achieved</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">Energy Savings:</span>
                              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 text-sm px-3 py-1">
                                {testimonial.savings}
                              </Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">Financial Impact:</span>
                              <span className="text-sm font-medium text-primary">{testimonial.financialImpact}</span>
                            </div>
                          </div>
                        </div>

                        {/* Quote */}
                        <div className="relative">
                          <Quote className="w-5 h-5 text-primary/30 absolute -top-1 -left-1" />
                          <blockquote className="text-sm text-muted-foreground italic leading-relaxed pl-6">
                            "{testimonial.quote}"
                          </blockquote>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
              })}
              </div>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="glass border-none max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h4 className="font-medium text-lg mb-6">Collective Impact Across All Deployments</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-medium text-primary">120+</div>
                  <p className="text-sm text-muted-foreground">Buildings Deployed</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-medium text-primary">1240+</div>
                  <p className="text-sm text-muted-foreground">Units Installed</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-medium text-primary">45M+</div>
                  <p className="text-sm text-muted-foreground">Operating Hours</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-medium text-primary">7-25%</div>
                  <p className="text-sm text-muted-foreground">Energy Savings Range</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}