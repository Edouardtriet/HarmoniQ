import React from 'react';
import { motion } from 'motion/react';

export const ElectricalEnergyAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Electrical circuit grid background */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern 
              id="circuitGrid" 
              x="0" 
              y="0" 
              width="60" 
              height="60" 
              patternUnits="userSpaceOnUse"
            >
              <path 
                d="M 60 0 L 0 0 0 60 M 30 0 L 30 60 M 0 30 L 60 30" 
                fill="none" 
                stroke="rgba(34, 197, 94, 0.3)" 
                strokeWidth="1"
              />
              <circle cx="30" cy="30" r="2" fill="rgba(34, 197, 94, 0.4)" />
              <circle cx="0" cy="0" r="1.5" fill="rgba(34, 197, 94, 0.6)" />
              <circle cx="60" cy="60" r="1.5" fill="rgba(34, 197, 94, 0.6)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuitGrid)" />
        </svg>
      </div>

      {/* Flowing electrical current lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="currentFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0)" />
            <stop offset="30%" stopColor="rgba(74, 222, 128, 0.8)" />
            <stop offset="70%" stopColor="rgba(34, 197, 94, 0.9)" />
            <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
          </linearGradient>
          <linearGradient id="currentFlow2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0)" />
            <stop offset="40%" stopColor="rgba(34, 197, 94, 0.7)" />
            <stop offset="80%" stopColor="rgba(74, 222, 128, 0.8)" />
            <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
          </linearGradient>
        </defs>
        
        {/* Main power transmission lines */}
        <motion.path
          d="M0,150 L300,150 L600,150 L900,150 L1200,150"
          stroke="url(#currentFlow1)"
          strokeWidth="4"
          fill="none"
          strokeDasharray="20,10"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -30 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <motion.path
          d="M0,250 L250,250 L500,250 L750,250 L1000,250 L1200,250"
          stroke="url(#currentFlow2)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="15,8"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -23 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5,
          }}
        />
        
        <motion.path
          d="M0,350 L400,350 L800,350 L1200,350"
          stroke="url(#currentFlow1)"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray="12,6"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -18 }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
        />
      </svg>

      {/* Electrical nodes and connection points */}
      <div className="absolute inset-0">
        {[
          { left: '15%', top: '25%', size: 'large' },
          { left: '50%', top: '20%', size: 'medium' },
          { left: '85%', top: '30%', size: 'large' },
          { left: '25%', top: '70%', size: 'medium' },
          { left: '75%', top: '75%', size: 'large' },
        ].map((node, i) => (
          <motion.div
            key={`node-${i}`}
            className={`absolute ${
              node.size === 'large' ? 'w-16 h-16' : 'w-12 h-12'
            }`}
            style={{
              left: node.left,
              top: node.top,
              transform: 'translate(-50%, -50%)'
            }}
          >
            {/* Outer electrical ring */}
            <motion.div
              className={`absolute inset-0 rounded-full border-2 border-primary ${
                node.size === 'large' ? 'border-4' : 'border-2'
              }`}
              style={{
                boxShadow: '0 0 30px rgba(34, 197, 94, 0.6), inset 0 0 20px rgba(34, 197, 94, 0.3)'
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.6,
              }}
            />
            
            {/* Inner electrical core */}
            <motion.div
              className={`absolute ${
                node.size === 'large' ? 'inset-3' : 'inset-2'
              } rounded-full bg-primary`}
              style={{
                boxShadow: '0 0 40px rgba(34, 197, 94, 0.8)'
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            />
            
            {/* Electrical spark effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, transparent 70%)',
              }}
              animate={{
                scale: [0.8, 1.5, 0.8],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeOut",
                delay: i * 0.5,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Lightning bolt effects */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`lightning-${i}`}
            className="absolute"
            style={{
              left: `${20 + (i * 20)}%`,
              top: `${15 + (i % 2) * 50}%`,
            }}
          >
            <svg width="60" height="80" viewBox="0 0 60 80">
              <motion.path
                d="M30,5 L25,25 L35,25 L20,45 L30,45 L15,75 L25,35 L20,35 L30,15 L35,35 L25,35 L40,15 L30,5 Z"
                fill="none"
                stroke="rgba(34, 197, 94, 0.8)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.8,
                }}
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.6))'
                }}
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Power frequency waves (50 / 60 Hz visualization) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="frequencyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0)" />
            <stop offset="50%" stopColor="rgba(34, 197, 94, 0.7)" />
            <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
          </linearGradient>
        </defs>
        
        <motion.path
          d="M0,150 Q60,100 120,150 T240,150 T360,150 T480,150 T600,150 T720,150 T840,150 T960,150 T1080,150 T1200,150"
          stroke="url(#frequencyGradient)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            strokeDashoffset: [0, -50, -100]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          strokeDasharray="25,15"
        />
      </svg>

      {/* Electrical circuit components */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`component-${i}`}
            className="absolute w-8 h-2 bg-primary/70 rounded-sm"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${40 + (i % 3) * 15}%`,
              boxShadow: '0 0 15px rgba(34, 197, 94, 0.5)'
            }}
            animate={{
              opacity: [0.4, 1, 0.4],
              scaleX: [1, 1.3, 1],
              rotateZ: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2.5 + (i * 0.3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Electrical energy particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-primary rounded-full"
            style={{
              left: `${5 + (i * 6)}%`,
              top: `${20 + (i % 4) * 20}%`,
              boxShadow: '0 0 10px rgba(34, 197, 94, 0.8)'
            }}
            animate={{
              x: [0, 40, 80, 120, 160, 200],
              y: [0, -10, 5, -15, 10, 0],
              scale: [0.8, 1.2, 0.9, 1.3, 0.8],
              opacity: [0.6, 1, 0.7, 1, 0.6],
            }}
            transition={{
              duration: 8 + (i * 0.3),
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Power optimization indicator */}
      <div className="absolute right-10 top-10">
        <motion.div
          className="flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/40"
          style={{
            boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)'
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-3 h-3 bg-primary rounded-full"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span className="text-xs font-semibold text-primary">50 / 60 Hz</span>
        </motion.div>
      </div>

      {/* Energy efficiency arrows */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`arrow-${i}`}
            className="absolute"
            style={{
              left: `${15 + (i * 15)}%`,
              top: `${60 + (i % 2) * 15}%`,
            }}
          >
            <svg width="30" height="15" viewBox="0 0 30 15">
              <motion.path
                d="M2,7.5 L25,7.5 M20,3 L25,7.5 L20,12"
                stroke="rgba(34, 197, 94, 0.7)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1],
                  opacity: [0, 0.8, 0],
                  x: [0, 20, 40]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Central power optimization vortex */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-32 h-32 relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`power-ring-${i}`}
              className="absolute inset-0 rounded-full border-2 border-primary/40"
              style={{
                scale: 1 - (i * 0.2),
                borderStyle: i % 2 === 0 ? 'solid' : 'dashed',
                boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)'
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1 - (i * 0.2), 1.2 - (i * 0.2), 1 - (i * 0.2)],
                borderColor: [
                  'rgba(34, 197, 94, 0.4)', 
                  'rgba(74, 222, 128, 0.6)', 
                  'rgba(34, 197, 94, 0.4)'
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
          
          {/* Central optimization core */}
          <motion.div
            className="absolute inset-8 rounded-full bg-primary/60"
            style={{
              boxShadow: '0 0 40px rgba(34, 197, 94, 0.6), inset 0 0 20px rgba(34, 197, 94, 0.4)'
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};