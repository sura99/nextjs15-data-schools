'use client';
import { ReactNode } from 'react';

interface SummaryCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  gradient: string; // e.g. "from-emerald-400 to-emerald-600"
  textColor: string; // e.g. "text-emerald-100"
}

export default function SummaryCard({
  title,
  value,
  icon,
  gradient,
  textColor,
}: SummaryCardProps) {
  return (
    <div
      className={`bg-gradient-to-br ${gradient} rounded-2xl p-4 text-white shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-xl font-medium ${textColor}`}>{title}</p>
          <p className="text-3xl font-bold mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-full bg-white/20 ${textColor}`}>{icon}</div>
      </div>
    </div>
  );
}