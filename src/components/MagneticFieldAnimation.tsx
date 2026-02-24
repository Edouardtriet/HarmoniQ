import React from 'react';
import { motion } from 'motion/react';

export const MagneticFieldAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background energy grid */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full opacity-40"
          viewBox="0 0 800 600"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern 
              id="energyGrid" 
              x="0" 
              y="0" 
              width="80" 
              height="80" 
              patternUnits="userSpaceOnUse"
            >
              <path 
                d="M 80 0 L 0 0 0 80" 
                fill="none" 
                stroke="rgba(34, 197, 94, 0.4)" 
                strokeWidth="1.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#energyGrid)" />
        </svg>
      </div>

      {/* Floating energy orbs */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-4 h-4 rounded-full bg-primary shadow-lg"
            style={{
              left: `${10 + (i * 7)}%`,
              top: `${20 + (i % 4) * 20}%`,
              boxShadow: '0 0 30px rgba(34, 197, 94, 0.9), 0 0 60px rgba(34, 197, 94, 0.6), 0 0 90px rgba(34, 197, 94, 0.3)'
            }}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -20, 30, 0],
              scale: [1, 1.5, 0.8, 1],
              opacity: [0.8, 1, 0.6, 0.8],
            }}
            transition={{
              duration: 8 + (i * 0.5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Magnetic field lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="fieldGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0)" />
            <stop offset="50%" stopColor="rgba(34, 197, 94, 0.8)" />
            <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
          </linearGradient>
          <linearGradient id="fieldGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(74, 222, 128, 0)" />
            <stop offset="50%" stopColor="rgba(74, 222, 128, 0.7)" />
            <stop offset="100%" stopColor="rgba(74, 222, 128, 0)" />
          </linearGradient>
        </defs>
        
        {/* Curved magnetic field lines */}
        <motion.path
          d="M0,200 Q300,150 600,200 T1200,200"
          stroke="url(#fieldGradient1)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="8,12"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.path
          d="M0,300 Q400,250 800,300 T1200,300"
          stroke="url(#fieldGradient2)"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray="6,10"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.9, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        <motion.path
          d="M0,400 Q200,350 400,400 Q600,450 800,400 Q1000,350 1200,400"
          stroke="url(#fieldGradient1)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4,8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.7, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </svg>

      {/* Pulsing energy centers */}
      <div className="absolute inset-0">
        {[
          { left: '15%', top: '25%' },
          { left: '85%', top: '25%' },
          { left: '50%', top: '75%' },
        ].map((position, i) => (
          <motion.div
            key={`center-${i}`}
            className="absolute w-20 h-20"
            style={{
              left: position.left,
              top: position.top,
              transform: 'translate(-50%, -50%)'
            }}
          >
            {/* Outer ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-3 border-primary/60"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.8, 0.4, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8,
              }}
            />
            
            {/* Inner core */}
            <motion.div
              className="absolute inset-4 rounded-full bg-primary/80"
              style={{
                boxShadow: '0 0 50px rgba(34, 197, 94, 0.8), 0 0 100px rgba(34, 197, 94, 0.4)'
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute w-6 h-6 border-2 border-primary rotate-45"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + (i % 3) * 25}%`,
              boxShadow: '0 0 25px rgba(34, 197, 94, 0.7), 0 0 50px rgba(34, 197, 94, 0.3)'
            }}
            animate={{
              rotate: [45, 405, 45],
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 6 + (i * 0.3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7,
            }}
          />
        ))}
      </div>

      {/* Energy flow indicators */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`flow-${i}`}
            className="absolute w-2 h-12 bg-gradient-to-t from-primary to-transparent"
            style={{
              left: `${15 + (i * 10)}%`,
              top: `${40 + (i % 2) * 20}%`,
              boxShadow: '0 0 15px rgba(34, 197, 94, 0.6)'
            }}
            animate={{
              scaleY: [1, 2.5, 1],
              opacity: [0.7, 1, 0.7],
              rotateZ: [0, 20, -20, 0],
            }}
            transition={{
              duration: 2 + (i * 0.2),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Central energy vortex */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-40 h-40 relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`vortex-${i}`}
              className="absolute inset-0 rounded-full border-2 border-primary/60"
              style={{
                scale: 1 - (i * 0.2),
                boxShadow: '0 0 30px rgba(34, 197, 94, 0.4)'
              }}
              animate={{
                opacity: [0.4, 0.9, 0.4],
                scale: [1 - (i * 0.2), 1.3 - (i * 0.2), 1 - (i * 0.2)],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};