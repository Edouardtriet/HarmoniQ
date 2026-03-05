import React, { useMemo } from "react";
import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { X, Check } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

function generateNoisyData() {
  const points = 200;
  const data = [];
  for (let i = 0; i < points; i++) {
    const t = (i / points) * 4 * Math.PI;
    const ideal = Math.sin(t);
    const third = 0.35 * Math.sin(3 * t);
    const fifth = 0.2 * Math.sin(5 * t);
    const actual = ideal + third + fifth + 0.08 * Math.sin(7 * t);
    data.push({ t: i, ideal, third, fifth, actual });
  }
  return data;
}

function generateCleanData() {
  const points = 200;
  const data = [];
  for (let i = 0; i < points; i++) {
    const t = (i / points) * 4 * Math.PI;
    const ideal = Math.sin(t);
    const actual = ideal + 0.03 * Math.sin(3 * t);
    data.push({ t: i, ideal, actual });
  }
  return data;
}

const renderLegend = (props: { payload?: Array<{ color: string; value: string }> }) => {
  const { payload } = props;
  if (!payload) return null;
  return (
    <div className="flex flex-wrap justify-center mt-2" style={{ columnGap: '3rem', rowGap: '0.5rem' }}>
      {payload.map((entry, index) => (
        <div key={index} className="flex items-center gap-1.5 text-xs text-slate-600">
          <span
            className="inline-block w-6 h-1 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          {entry.value}
        </div>
      ))}
    </div>
  );
};

function NoisyChart() {
  const data = useMemo(generateNoisyData, []);
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
        <CartesianGrid stroke="#e7e0d8" strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="t" hide />
        <YAxis domain={[-1.8, 1.8]} hide />
        <Legend content={renderLegend} verticalAlign="bottom" />
        <Line type="monotone" dataKey="ideal" stroke="#4ade80" strokeWidth={2} dot={false} name="Ideal Frequency" />
        <Line type="monotone" dataKey="third" stroke="#b0b0b0" strokeWidth={1.5} dot={false} name="3rd Order Harmonic" />
        <Line type="monotone" dataKey="fifth" stroke="#d0d0d0" strokeWidth={1.5} dot={false} name="5th Order Harmonic" />
        <Line type="monotone" dataKey="actual" stroke="#1e3a5f" strokeWidth={2.5} dot={false} name="Actual Frequency" />
      </LineChart>
    </ResponsiveContainer>
  );
}

function CleanChart() {
  const data = useMemo(generateCleanData, []);
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
        <CartesianGrid stroke="#00A98020" strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="t" hide />
        <YAxis domain={[-1.3, 1.3]} hide />
        <Legend content={renderLegend} verticalAlign="bottom" />
        <Line type="monotone" dataKey="ideal" stroke="#00A980" strokeWidth={2} dot={false} name="Ideal Frequency" />
        <Line type="monotone" dataKey="actual" stroke="#1e3a5f" strokeWidth={2.5} dot={false} name="Actual Frequency" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function TechnologyComparison() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Without HarmoniQ */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-stone-100/80 rounded-2xl border border-stone-300/60 p-6"
      >
        <div className="flex items-center justify-center gap-3 mb-6 p-3 rounded-xl bg-stone-200/50 border border-stone-300/50">
          <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DD2D4A' }}>
            <X className="w-3 h-3 text-white" strokeWidth={3} />
          </div>
          <span className="font-medium text-stone-500">Without HarmoniQ</span>
        </div>

        <div className="text-center mb-4">
          <h4 className="font-medium text-stone-500">Electricity Current</h4>
        </div>

        <div className="bg-white/50 rounded-xl p-3 border border-stone-200/40 mb-6">
          <NoisyChart />
        </div>

        <div className="flex gap-4 justify-center">
          <Badge className="px-4 py-2 text-sm" style={{ backgroundColor: '#DD2D4A', color: 'white', borderColor: '#c82842' }}>
            Noisy Current
          </Badge>
          <Badge className="px-4 py-2 text-sm" style={{ backgroundColor: '#DD2D4A', color: 'white', borderColor: '#c82842' }}>
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
        className="bg-[#00A980]/8 rounded-2xl border border-[#00A980]/25 p-6 shadow-sm shadow-[#00A980]/10"
      >
        <div className="flex items-center justify-center gap-3 mb-6 p-3 rounded-xl bg-[#00A980]/12 border border-[#00A980]/25">
          <div className="w-5 h-5 rounded-full bg-[#00A980] flex items-center justify-center">
            <Check className="w-3 h-3 text-white" strokeWidth={3} />
          </div>
          <span className="font-medium text-[#00A980]">With HarmoniQ</span>
        </div>

        <div className="text-center mb-4">
          <h4 className="font-medium text-slate-700">Electricity Current</h4>
        </div>

        <div className="bg-white/60 rounded-xl p-3 border border-[#00A980]/15 mb-6">
          <CleanChart />
        </div>

        <div className="flex gap-4 justify-center">
          <Badge className="px-4 py-2 text-sm" style={{ backgroundColor: '#00A980', color: 'white', borderColor: '#00A980' }}>
            Pure 50 / 60 Hz
          </Badge>
          <Badge className="px-4 py-2 text-sm" style={{ backgroundColor: '#00A980', color: 'white', borderColor: '#00A980' }}>
            Optimal Temperature
          </Badge>
        </div>
      </motion.div>
    </div>
  );
}
