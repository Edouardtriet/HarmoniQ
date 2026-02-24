import React from "react";
import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { X, Check } from "lucide-react";
import chaoticWaveImage from 'figma:asset/ccaecad5c22658540261b9c88abbbc258302a47c.png';
import cleanWaveImage from 'figma:asset/db43805fe10409dbbba56b1d3e3175e3b87f249e.png';

export function TechnologyComparison() {
  return (
    <div className="glass p-8 rounded-3xl border border-primary/20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Without HarmoniQ */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-red-50/80 rounded-2xl border border-red-200/50 p-6 relative overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-6 p-3 rounded-xl bg-red-100/60 border border-red-200">
            <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
              <X className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
            <span className="font-medium text-red-800">Without HarmoniQ</span>
          </div>

          {/* Electricity Current Label */}
          <div className="text-center mb-4">
            <h4 className="font-medium text-slate-700">Electricity Current</h4>
          </div>

          {/* Wave Visualization */}
          <div className="bg-red-50 rounded-xl p-6 border border-red-200/50 mb-6 relative overflow-hidden">
            <div className="relative h-56 flex items-center justify-center">
              <img 
                src={chaoticWaveImage} 
                alt="Chaotic electrical waves showing distorted frequency patterns"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Status Badges */}
          <div className="flex gap-4 justify-center">
            <Badge className="bg-red-500 text-white border-red-600 px-4 py-2 text-sm">
              Noisy Current
            </Badge>
            <Badge className="bg-red-500 text-white border-red-600 px-4 py-2 text-sm">
              High Heat Waste
            </Badge>
          </div>
        </motion.div>

        {/* With HarmoniQ */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-green-50/80 rounded-2xl border border-green-200/50 p-6 relative overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-6 p-3 rounded-xl bg-green-100/60 border border-green-200">
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
              <Check className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
            <span className="font-medium text-green-800">With HarmoniQ</span>
          </div>

          {/* Electricity Current Label */}
          <div className="text-center mb-4">
            <h4 className="font-medium text-slate-700">Electricity Current</h4>
          </div>

          {/* Wave Visualization */}
          <div className="bg-green-50 rounded-xl p-6 border border-green-200/50 mb-6 relative overflow-hidden">
            <div className="relative h-56 flex items-center justify-center">
              <img 
                src={cleanWaveImage} 
                alt="Clean electrical waves showing perfectly aligned frequency patterns"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Status Badges */}
          <div className="flex gap-4 justify-center">
            <Badge className="bg-green-500 text-white border-green-600 px-4 py-2 text-sm">
              Pure 50 / 60 Hz
            </Badge>
            <Badge className="bg-green-500 text-white border-green-600 px-4 py-2 text-sm">
              Optimal Temperature
            </Badge>
          </div>
        </motion.div>
      </div>
    </div>
  );
}