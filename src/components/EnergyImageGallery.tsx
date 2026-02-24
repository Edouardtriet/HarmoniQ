import { useState, useEffect, useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface EnergyImage {
  src: string;
  alt: string;
  caption: string;
}

interface EnergyImageGalleryProps {
  images: EnergyImage[];
  autoPlayInterval?: number;
  className?: string;
}

export function EnergyImageGallery({ 
  images, 
  autoPlayInterval = 5000,
  className = ""
}: EnergyImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<boolean[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize loaded images state
  useEffect(() => {
    setLoadedImages(Array(images.length).fill(false));
  }, [images.length]);

  // Handle image loading
  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  // Auto-play functionality
  useEffect(() => {
    if (isPaused || images.length <= 1) return;
    
    // Clear existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    // Set new timer
    timerRef.current = setTimeout(() => {
      if (!isTransitioning) {
        goToNext();
      }
    }, autoPlayInterval);
    
    // Cleanup
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex, isPaused, isTransitioning, images.length, autoPlayInterval]);

  // Handle navigation
  const goToIndex = (index: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    setIsPaused(true);
    
    // Resume auto-play after user interaction timeout
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    timerRef.current = setTimeout(() => {
      setIsPaused(false);
      setIsTransitioning(false);
    }, 8000);
  };

  const goToNext = () => {
    goToIndex((currentIndex + 1) % images.length);
  };

  const goToPrev = () => {
    goToIndex((currentIndex - 1 + images.length) % images.length);
  };

  // Handle transition end
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  // 3D effect on mouse move
  useEffect(() => {
    if (!containerRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      // Apply subtle transform for 3D effect
      containerRef.current.style.transform = `
        perspective(1000px)
        rotateY(${x * 3}deg)
        rotateX(${-y * 3}deg)
      `;
    };
    
    const handleMouseLeave = () => {
      if (!containerRef.current) return;
      containerRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
    };
    
    const element = containerRef.current;
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden rounded-full ${className}`}
      style={{ transformStyle: 'preserve-3d', transition: 'transform 0.3s ease-out' }}
    >
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          onTransitionEnd={handleTransitionEnd}
        >
          <div className="w-full h-full">
            <ImageWithFallback
              src={image.src}
              alt={image.alt}
              width={600}
              height={600}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              onLoad={() => handleImageLoad(index)}
            />
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none"></div>
          
          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white">
            <p className="font-medium">{image.caption}</p>
          </div>
        </div>
      ))}
      
      {/* Loading indicator */}
      {!loadedImages[currentIndex] && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-20">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/25 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/40 transition-colors z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/25 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/40 transition-colors z-20"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          
          {/* Indicators */}
          <div className="absolute bottom-14 left-0 right-0 flex justify-center gap-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to image ${index + 1}`}
                aria-current={index === currentIndex ? "true" : "false"}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}