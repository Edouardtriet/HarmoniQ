import React from 'react';
import { motion } from 'motion/react';

export const WaveAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 opacity-60" />
      
      {/* Animated wave layers */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0.1)" />
            <stop offset="50%" stopColor="rgba(22, 163, 74, 0.15)" />
            <stop offset="100%" stopColor="rgba(34, 197, 94, 0.1)" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(22, 163, 74, 0.08)" />
            <stop offset="50%" stopColor="rgba(34, 197, 94, 0.12)" />
            <stop offset="100%" stopColor="rgba(22, 163, 74, 0.08)" />
          </linearGradient>
          <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(74, 222, 128, 0.06)" />
            <stop offset="50%" stopColor="rgba(34, 197, 94, 0.1)" />
            <stop offset="100%" stopColor="rgba(74, 222, 128, 0.06)" />
          </linearGradient>
        </defs>
        
        {/* Wave 1 - Bottom flowing wave */}
        <motion.path
          d="M0,300 C300,280 600,320 900,300 C1050,290 1150,310 1200,300 L1200,400 L0,400 Z"
          fill="url(#waveGradient1)"
          initial={{ d: "M0,300 C300,280 600,320 900,300 C1050,290 1150,310 1200,300 L1200,400 L0,400 Z" }}
          animate={{
            d: [
              "M0,300 C300,280 600,320 900,300 C1050,290 1150,310 1200,300 L1200,400 L0,400 Z",
              "M0,310 C300,290 600,330 900,310 C1050,300 1150,320 1200,310 L1200,400 L0,400 Z",
              "M0,300 C300,280 600,320 900,300 C1050,290 1150,310 1200,300 L1200,400 L0,400 Z"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Wave 2 - Middle flowing wave */}
        <motion.path
          d="M0,250 C300,230 600,270 900,250 C1050,240 1150,260 1200,250 L1200,400 L0,400 Z"
          fill="url(#waveGradient2)"
          initial={{ d: "M0,250 C300,230 600,270 900,250 C1050,240 1150,260 1200,250 L1200,400 L0,400 Z" }}
          animate={{
            d: [
              "M0,250 C300,230 600,270 900,250 C1050,240 1150,260 1200,250 L1200,400 L0,400 Z",
              "M0,260 C300,240 600,280 900,260 C1050,250 1150,270 1200,260 L1200,400 L0,400 Z",
              "M0,245 C300,225 600,265 900,245 C1050,235 1150,255 1200,245 L1200,400 L0,400 Z",
              "M0,250 C300,230 600,270 900,250 C1050,240 1150,260 1200,250 L1200,400 L0,400 Z"
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Wave 3 - Top subtle wave */}
        <motion.path
          d="M0,200 C300,180 600,220 900,200 C1050,190 1150,210 1200,200 L1200,400 L0,400 Z"
          fill="url(#waveGradient3)"
          initial={{ d: "M0,200 C300,180 600,220 900,200 C1050,190 1150,210 1200,200 L1200,400 L0,400 Z" }}
          animate={{
            d: [
              "M0,200 C300,180 600,220 900,200 C1050,190 1150,210 1200,200 L1200,400 L0,400 Z",
              "M0,195 C300,175 600,215 900,195 C1050,185 1150,205 1200,195 L1200,400 L0,400 Z",
              "M0,205 C300,185 600,225 900,205 C1050,195 1150,215 1200,205 L1200,400 L0,400 Z",
              "M0,200 C300,180 600,220 900,200 C1050,190 1150,210 1200,200 L1200,400 L0,400 Z"
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </svg>
      
      {/* Floating energy particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${15 + (i * 12)}%`,
              top: `${60 + (i % 3) * 15}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + (i * 0.5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
      
      {/* Subtle energy flow lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,150 Q300,120 600,150 T1200,150"
          stroke="url(#waveGradient1)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,10"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 3, delay: 1 }}
        />
        <motion.path
          d="M0,180 Q300,210 600,180 T1200,180"
          stroke="url(#waveGradient2)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="3,8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 4, delay: 2 }}
        />
      </svg>
    </div>
  );
};