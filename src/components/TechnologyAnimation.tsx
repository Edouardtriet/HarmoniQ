import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import harmoniqLogo from 'figma:asset/6ed12e07942b84cb1a32ed4d4b0c8d7e09b92cf8.png';

// Animated value component that smoothly transitions between numbers
function AnimatedValue({
  value,
  startValue,
  endValue,
  isActive,
  duration = 2500,
  decimals = 1,
  suffix = "",
}: {
  value: number;
  startValue: number;
  endValue: number;
  isActive: boolean;
  duration?: number;
  decimals?: number;
  suffix?: string;
}) {
  const [displayValue, setDisplayValue] = useState(startValue);

  useEffect(() => {
    if (!isActive) {
      setDisplayValue(startValue);
      return;
    }

    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth transition
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currentValue =
        startValue + (endValue - startValue) * easeOut;
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isActive, startValue, endValue, duration]);

  return (
    <span className="text-white">
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function TechnologyAnimation() {
  const [isOn, setIsOn] = useState(false);
  const [time, setTime] = useState(0);

  // Shared time state for all waves to ensure synchronization
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => t + 0.15);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass p-8 rounded-3xl border border-primary/20 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="gradient-text mb-4">HarmoniQ Technology Demonstration</h3>
        <p className="text-muted-foreground">
          Watch as magnetic waves transform chaotic electrical noise into pure 50 / 60 Hz current
        </p>
      </div>

      {/* First Animation Row - Interactive */}
      <div className="flex items-center justify-between gap-8 w-full mb-8">
        {/* Input Waves */}
        <div className="flex-1">
          <InputWaves isOn={isOn} time={time} />
        </div>

        {/* Central Device */}
        <div className="flex flex-col items-center mt-12">
          <DeviceControl
            isOn={isOn}
            onToggle={() => setIsOn(!isOn)}
          />
        </div>

        {/* Output Wave */}
        <div className="flex-1">
          <OutputWave isOn={isOn} time={time} />
        </div>
      </div>


    </div>
  );
}

function InputWaves({ isOn, time }: { isOn: boolean; time: number }) {
  return (
    <div className="h-32 relative">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 128"
        className="overflow-visible"
      >
        {/* Continuous wave transition - no switching */}
        <TransitioningWave
          color="#2563EB"
          strokeWidth={6}
          isOn={isOn}
          waveType="primary"
          time={time}
        />
        <TransitioningWave
          color="#3B82F6"
          strokeWidth={4}
          isOn={isOn}
          waveType="secondary"
          time={time}
        />
        <TransitioningWave
          color="#10B981"
          strokeWidth={3}
          isOn={isOn}
          waveType="harmonic"
          time={time}
        />
        <TransitioningWave
          color="#6B7280"
          strokeWidth={2}
          isOn={isOn}
          waveType="noise"
          time={time}
        />
      </svg>
    </div>
  );
}

function TransitioningWave({
  color,
  strokeWidth,
  isOn,
  waveType,
  time,
}: {
  color: string;
  strokeWidth: number;
  isOn: boolean;
  waveType: "primary" | "secondary" | "harmonic" | "noise";
  time: number;
}) {
  const [convergenceTime, setConvergenceTime] = useState(0);

  React.useEffect(() => {
    if (isOn) {
      // Start convergence timer when device is activated
      const startTime = Date.now();
      const convergenceInterval = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        setConvergenceTime(elapsed);
      }, 40);

      return () => clearInterval(convergenceInterval);
    } else {
      // Reset convergence when device is turned off
      setConvergenceTime(0);
    }
  }, [isOn]);

  const points = [];
  for (let x = 0; x <= 400; x += 1) {
    let y = 64; // Center line

    // Convergence progress over 4 seconds total with dramatic stages
    const convergence = isOn
      ? Math.min(convergenceTime / 4.0, 1)
      : 0;
    const targetFreq = 0.015; // Target 50 / 60 Hz frequency - same as output waves

    // Define target amplitudes to match output waves exactly
    const targetAmplitudes = {
      primary: 25,
      secondary: 18,
      harmonic: 12,
      noise: 8,
    };

    if (convergence >= 1) {
      // When fully converged, use exactly the same clean signal as output waves
      const cleanSignal =
        Math.sin(x * targetFreq + time) *
        targetAmplitudes[waveType];
      y += cleanSignal;
    } else {
      // During convergence, gradually transition from chaotic to clean

      // Clean target signal (same as output)
      const cleanSignal =
        Math.sin(x * targetFreq + time) *
        targetAmplitudes[waveType];

      // DRAMATICALLY MORE CHAOTIC starting signals with extreme distortion
      let chaoticSignal = 0;

      if (waveType === "primary") {
        // Extremely distorted main signal with multiple competing frequencies
        const main = Math.sin(x * 0.008 + time) * 45; // Much larger amplitude
        const distortion1 =
          Math.sin(x * 0.025 + time * 1.3) * 35; // Heavy distortion
        const distortion2 =
          Math.sin(x * 0.042 + time * 0.7) * 28; // Competing frequency
        const irregularity =
          Math.sin(x * 0.018 + time * 4.2) * 22; // High irregularity
        const spikes = Math.sin(x * 0.095 + time * 6.5) * 15; // Random spikes
        const drift = Math.sin(x * 0.003 + time * 0.4) * 12; // Slow drift
        chaoticSignal =
          main +
          distortion1 +
          distortion2 +
          irregularity +
          spikes +
          drift;
      } else if (waveType === "secondary") {
        // Heavily harmonically distorted signal
        const main = Math.sin(x * 0.019 + time * 0.8) * 38;
        const harmonic2 = Math.sin(x * 0.038 + time * 1.2) * 32; // Strong 2nd harmonic
        const harmonic3 = Math.sin(x * 0.057 + time * 1.6) * 25; // Strong 3rd harmonic
        const harmonic5 = Math.sin(x * 0.095 + time * 2.1) * 18; // 5th harmonic
        const subharmonic =
          Math.sin(x * 0.0095 + time * 0.6) * 20; // Sub-harmonic
        const chaos = Math.sin(x * 0.067 + time * 5.3) * 16; // Chaotic component
        chaoticSignal =
          main +
          harmonic2 +
          harmonic3 +
          harmonic5 +
          subharmonic +
          chaos;
      } else if (waveType === "harmonic") {
        // Extremely erratic harmonic interference
        const harmonic1 = Math.sin(x * 0.045 + time * 1.8) * 32;
        const harmonic2 = Math.sin(x * 0.023 + time * 2.4) * 28;
        const subharmonic =
          Math.sin(x * 0.006 + time * 0.9) * 25;
        const intermod1 = Math.sin(x * 0.068 + time * 3.7) * 22; // Intermodulation
        const intermod2 = Math.sin(x * 0.091 + time * 4.9) * 18;
        const chaos = Math.sin(x * 0.134 + time * 7.2) * 15; // High frequency chaos
        const beating = Math.sin(x * 0.0148 + time * 1.1) * 20; // Beat frequency near target
        chaoticSignal =
          harmonic1 +
          harmonic2 +
          subharmonic +
          intermod1 +
          intermod2 +
          chaos +
          beating;
      } else if (waveType === "noise") {
        // Extreme high-frequency noise and interference
        const noise1 = Math.sin(x * 0.089 + time * 3.4) * 18;
        const noise2 = Math.sin(x * 0.156 + time * 4.7) * 15;
        const noise3 = Math.sin(x * 0.234 + time * 6.1) * 12;
        const staticNoise =
          Math.sin(x * 0.312 + time * 8.9) * 10;
        const interference =
          Math.sin(x * 0.076 + time * 2.8) * 14;
        const spikes = Math.sin(x * 0.445 + time * 12.3) * 8; // Very high freq spikes
        const randomWalk =
          Math.sin(x * 0.017 + time * 0.3) * 16; // Slow random drift
        chaoticSignal =
          noise1 +
          noise2 +
          noise3 +
          staticNoise +
          interference +
          spikes +
          randomWalk;
      }

      // Enhanced easing function for more dramatic transition stages
      let easedConvergence = convergence;
      if (convergence < 0.3) {
        // First stage: Rapid initial filtering (removes highest frequencies first)
        easedConvergence =
          Math.pow(convergence / 0.3, 0.5) * 0.3;
      } else if (convergence < 0.7) {
        // Second stage: Harmonic correction (removes harmonics)
        const stageProgress = (convergence - 0.3) / 0.4;
        easedConvergence =
          0.3 + Math.pow(stageProgress, 1.5) * 0.4;
      } else {
        // Final stage: Fine-tuning to perfect sine wave
        const stageProgress = (convergence - 0.7) / 0.3;
        easedConvergence =
          0.7 + Math.pow(stageProgress, 2) * 0.3;
      }

      // Smooth transition between chaotic and clean with enhanced easing
      y +=
        chaoticSignal * (1 - easedConvergence) +
        cleanSignal * easedConvergence;
    }

    points.push(`${x},${y}`);
  }

  return (
    <motion.path
      d={`M ${points.join(" L ")}`}
      stroke={color}
      strokeWidth={strokeWidth}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    />
  );
}

function DeviceControl({
  isOn,
  onToggle,
}: {
  isOn: boolean;
  onToggle: () => void;
}) {
  const [activeLights, setActiveLights] = useState({
    power: false,
    filter: false,
    sync: false,
  });

  useEffect(() => {
    if (isOn) {
      // Sequential light activation during startup
      const timer1 = setTimeout(
        () =>
          setActiveLights((prev) => ({ ...prev, power: true })),
        300,
      );
      const timer2 = setTimeout(
        () =>
          setActiveLights((prev) => ({
            ...prev,
            filter: true,
          })),
        1200,
      );
      const timer3 = setTimeout(
        () =>
          setActiveLights((prev) => ({ ...prev, sync: true })),
        2400,
      );

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    } else {
      // Turn off all lights immediately when stopped
      setActiveLights({
        power: false,
        filter: false,
        sync: false,
      });
    }
  }, [isOn]);
  
  return (
    <div className="flex flex-col items-center">
      {/* Industrial Hardware Unit */}
      <div className="relative">
        {/* Ambient Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-lg blur-xl opacity-30"
          animate={{
            background: isOn
              ? "radial-gradient(ellipse at center, rgba(16, 185, 129, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)"
              : "radial-gradient(ellipse at center, rgba(107, 114, 128, 0.2) 0%, transparent 70%)",
          }}
          transition={{ duration: 1 }}
        />

        {/* Wall Mounting Screw Boxes */}
        {/* Left side mounting boxes - attached to main box */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 z-30">
          {/* Top left mounting box - moved higher */}
          <div className="mb-16" style={{ transform: 'translateY(-40px)' }}>
            <div 
              className="w-6 h-8 rounded border border-slate-400 relative"
              style={{
                background: "linear-gradient(135deg, #9ca3af 0%, #6b7280 50%, #4b5563 100%)",
                boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)"
              }}
            >
              {/* Two screws in the mounting box - positioned at outward corners (left side) */}
              {[
                { top: '2px', left: '2px' },
                { bottom: '2px', left: '2px' }
              ].map((position, index) => (
                <div
                  key={index}
                  className="absolute w-3 h-3 rounded-full border-2 border-slate-800"
                  style={{
                    ...position,
                    background: "linear-gradient(135deg, #52525b 0%, #3f3f46 50%, #27272a 100%)",
                    boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.3), 0 3px 6px rgba(0, 0, 0, 0.7)"
                  }}
                >
                  {/* Phillips head screw cross pattern */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Horizontal line */}
                    <div 
                      className="absolute w-2.5 h-0.5"
                      style={{
                        background: "rgba(0, 0, 0, 0.9)",
                        borderRadius: "1px"
                      }}
                    />
                    {/* Vertical line */}
                    <div 
                      className="absolute h-2.5 w-0.5"
                      style={{
                        background: "rgba(0, 0, 0, 0.9)",
                        borderRadius: "1px"
                      }}
                    />
                  </div>
                  {/* Metallic threading effect */}
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "conic-gradient(from 45deg, rgba(255, 255, 255, 0.1) 0deg, rgba(0, 0, 0, 0.1) 90deg, rgba(255, 255, 255, 0.1) 180deg, rgba(0, 0, 0, 0.1) 270deg)",
                      opacity: 0.6
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom left mounting box - moved lower */}
          <div style={{ transform: 'translateY(40px)' }}>
            <div 
              className="w-6 h-8 rounded border border-slate-400 relative"
              style={{
                background: "linear-gradient(135deg, #9ca3af 0%, #6b7280 50%, #4b5563 100%)",
                boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)"
              }}
            >
              {/* Two screws in the mounting box - positioned at outward corners (left side) */}
              {[
                { top: '2px', left: '2px' },
                { bottom: '2px', left: '2px' }
              ].map((position, index) => (
                <div
                  key={index}
                  className="absolute w-3 h-3 rounded-full border-2 border-slate-800"
                  style={{
                    ...position,
                    background: "linear-gradient(135deg, #52525b 0%, #3f3f46 50%, #27272a 100%)",
                    boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.3), 0 3px 6px rgba(0, 0, 0, 0.7)"
                  }}
                >
                  {/* Phillips head screw cross pattern */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Horizontal line */}
                    <div 
                      className="absolute w-2.5 h-0.5"
                      style={{
                        background: "rgba(0, 0, 0, 0.9)",
                        borderRadius: "1px"
                      }}
                    />
                    {/* Vertical line */}
                    <div 
                      className="absolute h-2.5 w-0.5"
                      style={{
                        background: "rgba(0, 0, 0, 0.9)",
                        borderRadius: "1px"
                      }}
                    />
                  </div>
                  {/* Metallic threading effect */}
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "conic-gradient(from 45deg, rgba(255, 255, 255, 0.1) 0deg, rgba(0, 0, 0, 0.1) 90deg, rgba(255, 255, 255, 0.1) 180deg, rgba(0, 0, 0, 0.1) 270deg)",
                      opacity: 0.6
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side mounting boxes - attached to main box */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 z-30">
          {/* Top right mounting box - moved higher */}
          <div className="mb-16" style={{ transform: 'translateY(-40px)' }}>
            <div 
              className="w-6 h-8 rounded border border-slate-400 relative"
              style={{
                background: "linear-gradient(135deg, #9ca3af 0%, #6b7280 50%, #4b5563 100%)",
                boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)"
              }}
            >
              {/* Two screws in the mounting box - positioned at outward corners (right side) */}
              {[
                { top: '2px', right: '2px' },
                { bottom: '2px', right: '2px' }
              ].map((position, index) => (
                <div
                  key={index}
                  className="absolute w-3 h-3 rounded-full border-2 border-slate-800"
                  style={{
                    ...position,
                    background: "linear-gradient(135deg, #52525b 0%, #3f3f46 50%, #27272a 100%)",
                    boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.3), 0 3px 6px rgba(0, 0, 0, 0.7)"
                  }}
                >
                  {/* Phillips head screw cross pattern */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Horizontal line */}
                    <div 
                      className="absolute w-2.5 h-0.5"
                      style={{
                        background: "rgba(0, 0, 0, 0.9)",
                        borderRadius: "1px"
                      }}
                    />
                    {/* Vertical line */}
                    <div 
                      className="absolute h-2.5 w-0.5"
                      style={{
                        background: "rgba(0, 0, 0, 0.9)",
                        borderRadius: "1px"
                      }}
                    />
                  </div>
                  {/* Metallic threading effect */}
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "conic-gradient(from 45deg, rgba(255, 255, 255, 0.1) 0deg, rgba(0, 0, 0, 0.1) 90deg, rgba(255, 255, 255, 0.1) 180deg, rgba(0, 0, 0, 0.1) 270deg)",
                      opacity: 0.6
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom right mounting box - moved lower */}
          <div style={{ transform: 'translateY(40px)' }}>
            <div 
              className="w-6 h-8 rounded border border-slate-400 relative"
              style={{
                background: "linear-gradient(135deg, #9ca3af 0%, #6b7280 50%, #4b5563 100%)",
                boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)"
              }}
            >
              {/* Two screws in the mounting box - positioned at outward corners (right side) */}
              {[
                { top: '2px', right: '2px' },
                { bottom: '2px', right: '2px' }
              ].map((position, index) => (
                <div
                  key={index}
                  className="absolute w-3 h-3 rounded-full border-2 border-slate-800"
                  style={{
                    ...position,
                    background: "linear-gradient(135deg, #52525b 0%, #3f3f46 50%, #27272a 100%)",
                    boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.3), 0 3px 6px rgba(0, 0, 0, 0.7)"
                  }}
                >
                  {/* Phillips head screw cross pattern */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Horizontal line */}
                    <div 
                      className="absolute w-2.5 h-0.5"
                      style={{
                        background: "rgba(0, 0, 0, 0.9)",
                        borderRadius: "1px"
                      }}
                    />
                    {/* Vertical line */}
                    <div 
                      className="absolute h-2.5 w-0.5"
                      style={{
                        background: "rgba(0, 0, 0, 0.9)",
                        borderRadius: "1px"
                      }}
                    />
                  </div>
                  {/* Metallic threading effect */}
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "conic-gradient(from 45deg, rgba(255, 255, 255, 0.1) 0deg, rgba(0, 0, 0, 0.1) 90deg, rgba(255, 255, 255, 0.1) 180deg, rgba(0, 0, 0, 0.1) 270deg)",
                      opacity: 0.6
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Chassis */}
        <motion.div
          className="relative shadow-2xl"
          style={{
            width: "380px",
            height: "240px",
            borderRadius: "8px",
            background:
              "linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #020617 100%)",
          }}
          animate={{
            boxShadow: isOn
              ? [
                  "0 25px 50px -12px rgba(16, 185, 129, 0.3)",
                  "0 0 80px rgba(16, 185, 129, 0.1)",
                  "inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                  "0 1px 3px rgba(0, 0, 0, 0.4)",
                ].join(", ")
              : [
                  "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  "inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                  "0 1px 3px rgba(0, 0, 0, 0.3)",
                ].join(", "),
          }}
          transition={{ duration: 0.8 }}
        >


          {/* Front Panel */}
          <div
            className="absolute inset-3 border border-slate-500/50 flex flex-col rounded-lg overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(148, 163, 184, 0.95) 0%, rgba(100, 116, 139, 0.95) 50%, rgba(71, 85, 105, 0.95) 100%)",
              backdropFilter: "blur(20px)",
              boxShadow:
                "inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)",
            }}
          >
            
            {/* Industrial Details Layer */}

            {/* Corner fasteners - simplified and non-overlapping */}
            {[
              { top: '8px', left: '8px' },
              { top: '8px', right: '8px' },
              { bottom: '8px', left: '8px' },
              { bottom: '8px', right: '8px' }
            ].map((position, index) => (
              <div
                key={index}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  ...position,
                  background: "linear-gradient(135deg, #52525b 0%, #3f3f46 50%, #27272a 100%)",
                  border: "1px solid rgba(0, 0, 0, 0.5)",
                  boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 1px rgba(0, 0, 0, 0.3)"
                }}
              >
                {/* Mini Phillips head slot */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="absolute w-1 h-0.5"
                    style={{ background: "rgba(0, 0, 0, 0.8)" }}
                  />
                  <div 
                    className="absolute h-1 w-0.5"
                    style={{ background: "rgba(0, 0, 0, 0.8)" }}
                  />
                </div>
              </div>
            ))}

            {/* Main Display Area with balanced padding */}
            <div className="flex-1 py-8 px-6 relative">
              {/* Central Processing Display */}
              <motion.div
                className="rounded-lg border p-4 mb-6 h-20 flex items-center justify-center relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(2, 6, 23, 0.98) 100%)",
                  borderColor: isOn
                    ? "rgba(16, 185, 129, 0.4)"
                    : "rgba(71, 85, 105, 0.4)",
                }}
              >
                <div className="flex items-center justify-center gap-12 relative z-10">
                  {/* Power, Filter, Sync Status Lights */}
                  {[
                    {
                      label: "POWER",
                      color: activeLights.power
                        ? "#10b981"
                        : "#475569",
                      active: activeLights.power,
                      glowColor: "rgba(16, 185, 129, 0.6)",
                    },
                    {
                      label: "FILTER",
                      color: activeLights.filter
                        ? "#3b82f6"
                        : "#475569",
                      active: activeLights.filter,
                      glowColor: "rgba(59, 130, 246, 0.6)",
                    },
                    {
                      label: "SYNC",
                      color: activeLights.sync
                        ? "#f59e0b"
                        : "#475569",
                      active: activeLights.sync,
                      glowColor: "rgba(245, 158, 11, 0.6)",
                    },
                  ].map((indicator, i) => (
                    <div key={i} className="text-center">
                      <motion.div
                        className="w-6 h-6 rounded-full border-2 mb-2 flex items-center justify-center relative overflow-hidden mx-auto"
                        style={{
                          backgroundColor: indicator.color,
                          borderColor: indicator.active
                            ? indicator.color
                            : "#64748b",
                        }}
                        animate={
                          indicator.active
                            ? {
                                boxShadow: [
                                  `0 0 12px ${indicator.glowColor}`,
                                  `0 0 25px ${indicator.glowColor}`,
                                  `0 0 12px ${indicator.glowColor}`,
                                ],
                              }
                            : {}
                        }
                        transition={{
                          duration: 1.8,
                          repeat: indicator.active
                            ? Infinity
                            : 0,
                          repeatType: "reverse",
                        }}
                      />
                      <span className="text-xs text-emerald-300 font-medium tracking-wide">
                        {indicator.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Logo and Display Screen with balanced bottom spacing */}
              <div className="flex justify-between items-center relative mb-6">
                {/* HarmoniQ Technologies Logo */}
                <div className="flex-1 flex justify-start pl-4">
                  <img
                    src={harmoniqLogo}
                    alt="HarmoniQ Technologies"
                    className="h-12"
                    style={{ 
                      objectFit: 'contain',
                      maxWidth: '100%'
                    }}
                  />
                </div>

                {/* Digital Display Screen */}
                <motion.div
                  className="rounded-lg border p-3 min-w-[140px] relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(2, 6, 23, 0.98) 100%)",
                    borderColor: isOn
                      ? "rgba(16, 185, 129, 0.3)"
                      : "rgba(71, 85, 105, 0.3)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="text-xs space-y-2 relative z-10">
                    <div className="text-emerald-300 font-medium">
                      Input:{" "}
                      <span className="text-slate-100 font-mono">
                        &lt;600V
                      </span>
                    </div>
                    <div className="text-emerald-300 font-medium flex items-center gap-1">
                      THD:{" "}
                      <span className="text-slate-100 font-mono">
                        <AnimatedValue
                          value={isOn ? 0.1 : 5.0}
                          startValue={5.0}
                          endValue={0.1}
                          isActive={isOn}
                          duration={4000}
                          decimals={1}
                          suffix="%"
                        />
                      </span>
                      <motion.span
                        className="text-red-400"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={
                          isOn
                            ? {
                                opacity: [0, 1, 1],
                                scale: [0.5, 1.2, 1],
                                y: [2, -1, 0],
                              }
                            : { opacity: 0, scale: 0.5 }
                        }
                        transition={{
                          duration: 1.5,
                          delay: 0,
                          ease: "easeOut",
                        }}
                      >
                        ↓
                      </motion.span>
                    </div>
                    <div className="text-emerald-300 font-medium flex items-center gap-1">
                      PF:{" "}
                      <span className="text-slate-100 font-mono">
                        <AnimatedValue
                          value={isOn ? 0.99 : 0.65}
                          startValue={0.65}
                          endValue={0.99}
                          isActive={isOn}
                          duration={4500}
                          decimals={2}
                          suffix=""
                        />
                      </span>
                      <motion.span
                        className="text-green-400"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={
                          isOn
                            ? {
                                opacity: [0, 1, 1],
                                scale: [0.5, 1.2, 1],
                                y: [-2, 1, 0],
                              }
                            : { opacity: 0, scale: 0.5 }
                        }
                        transition={{
                          duration: 1.5,
                          delay: 0,
                          ease: "easeOut",
                        }}
                      >
                        ↑
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Control Strip */}
            <div
              className="h-8 border-t border-slate-400/30 flex items-center justify-center px-4 relative"
              style={{
                background:
                  "linear-gradient(135deg, rgba(51, 65, 85, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%)",
              }}
            >
              <div className="text-xs text-slate-400 font-mono tracking-wider">
                HF-3000 Series
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Control Button */}
      <motion.button
        onClick={onToggle}
        className="mt-8 px-10 py-4 rounded-xl border-2 font-medium tracking-wide relative overflow-hidden group"
        style={{
          background: isOn
            ? "linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)"
            : "linear-gradient(135deg, #059669 0%, #047857 50%, #065f46 100%)",
          borderColor: isOn ? "#dc2626" : "#059669",
          color: "white",
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.span
          className="flex items-center gap-3 relative z-10"
        >
          <motion.span
            animate={isOn ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOn ? "⏹" : "▶"}
          </motion.span>
          {isOn ? "STOP" : "START"}
        </motion.span>
      </motion.button>
    </div>
  );
}

function OutputWave({ isOn, time }: { isOn: boolean; time: number }) {
  return (
    <div className="h-32 relative">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 128"
        className="overflow-visible"
      >
        <TransitioningWave
          color="#2563EB"
          strokeWidth={6}
          isOn={isOn}
          waveType="primary"
          time={time}
        />
        <TransitioningWave
          color="#3B82F6"
          strokeWidth={4}
          isOn={isOn}
          waveType="secondary"
          time={time}
        />
        <TransitioningWave
          color="#10B981"
          strokeWidth={3}
          isOn={isOn}
          waveType="harmonic"
          time={time}
        />
        <TransitioningWave
          color="#6B7280"
          strokeWidth={2}
          isOn={isOn}
          waveType="noise"
          time={time}
        />
      </svg>
    </div>
  );
}