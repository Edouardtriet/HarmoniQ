import React from 'react';
import { motion } from 'motion/react';

export const SideElectricalAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Vertical electrical current lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 300 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="verticalCurrent1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0)" />
            <stop offset="30%" stopColor="rgba(74, 222, 128, 0.8)" />
            <stop offset="70%" stopColor="rgba(34, 197, 94, 0.9)" />
            <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
          </linearGradient>
          <linearGradient id="verticalCurrent2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0)" />
            <stop offset="40%" stopColor="rgba(34, 197, 94, 0.7)" />
            <stop offset="80%" stopColor="rgba(74, 222, 128, 0.8)" />
            <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
          </linearGradient>
        </defs>
        
        {/* Vertical power lines */}
        <motion.path
          d="M50,0 L50,200 L50,400 L50,600 L50,800"
          stroke="url(#verticalCurrent1)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="15,8"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -23 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <motion.path
          d="M150,0 L150,200 L150,400 L150,600 L150,800"
          stroke="url(#verticalCurrent2)"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray="12,6"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -18 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
        />
        
        <motion.path
          d="M250,0 L250,200 L250,400 L250,600 L250,800"
          stroke="url(#verticalCurrent1)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="10,5"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -15 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5,
          }}
        />
      </svg>

      {/* Floating energy particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`side-particle-${i}`}
            className="absolute w-2 h-2 bg-primary rounded-full"
            style={{
              left: `${20 + (i % 3) * 30}%`,
              top: `${10 + (i * 12)}%`,
              boxShadow: '0 0 8px rgba(34, 197, 94, 0.8)'
            }}
            animate={{
              y: [0, -30, -60, -90, -120, -150],
              scale: [0.8, 1.2, 0.9, 1.3, 0.8],
              opacity: [0.6, 1, 0.7, 1, 0.6],
            }}
            transition={{
              duration: 6 + (i * 0.5),
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Electrical nodes */}
      <div className="absolute inset-0">
        {[
          { top: '20%', left: '50%' },
          { top: '50%', left: '30%' },
          { top: '80%', left: '70%' },
        ].map((node, i) => (
          <motion.div
            key={`side-node-${i}`}
            className="absolute w-12 h-12"
            style={{
              left: node.left,
              top: node.top,
              transform: 'translate(-50%, -50%)'
            }}
          >
            {/* Outer electrical ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/60"
              style={{
                boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)'
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8,
              }}
            />
            
            {/* Inner electrical core */}
            <motion.div
              className="absolute inset-2 rounded-full bg-primary/70"
              style={{
                boxShadow: '0 0 25px rgba(34, 197, 94, 0.6)'
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8],
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

      {/* Electrical circuit patterns */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`side-circuit-${i}`}
            className="absolute w-6 h-1 bg-primary/60 rounded-sm"
            style={{
              left: `${15 + (i % 2) * 50}%`,
              top: `${25 + (i * 12)}%`,
              boxShadow: '0 0 10px rgba(34, 197, 94, 0.4)'
            }}
            animate={{
              opacity: [0.4, 1, 0.4],
              scaleX: [1, 1.2, 1],
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

      {/* Small lightning bolts */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`side-lightning-${i}`}
            className="absolute"
            style={{
              left: `${30 + (i * 20)}%`,
              top: `${30 + (i * 25)}%`,
            }}
          >
            <svg width="20" height="30" viewBox="0 0 20 30">
              <motion.path
                d="M10,2 L8,12 L12,12 L6,28 L10,18 L8,18 L12,8 L10,2 Z"
                fill="none"
                stroke="rgba(34, 197, 94, 0.7)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 1.2,
                }}
                style={{
                  filter: 'drop-shadow(0 0 5px rgba(34, 197, 94, 0.4))'
                }}
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* 50 / 60 Hz frequency indicator */}
      <div className="absolute top-4 right-4">
        <motion.div
          className="flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full border border-primary/40"
          style={{
            boxShadow: '0 0 15px rgba(34, 197, 94, 0.3)'
          }}
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-2 h-2 bg-primary rounded-full"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span className="text-xs font-semibold text-primary">50 / 60 Hz</span>
        </motion.div>
      </div>
    </div>
  );
};