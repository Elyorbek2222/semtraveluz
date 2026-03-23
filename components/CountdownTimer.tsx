"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(endsAt: Date): TimeLeft {
  const diff = endsAt.getTime() - Date.now();
  if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0 };
  return {
    hours: Math.floor(diff / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function CountdownTimer({ endsAt }: { endsAt: Date }) {
  const [time, setTime] = useState<TimeLeft>(calcTimeLeft(endsAt));

  useEffect(() => {
    const id = setInterval(() => setTime(calcTimeLeft(endsAt)), 1_000);
    return () => clearInterval(id);
  }, [endsAt]);

  if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) return null;

  return (
    <div className="flex items-center gap-1 text-xs font-bold text-red-600">
      <span className="animate-pulse">⏱</span>
      <span className="bg-red-100 px-1.5 py-0.5 rounded">{pad(time.hours)}</span>
      <span>:</span>
      <span className="bg-red-100 px-1.5 py-0.5 rounded">{pad(time.minutes)}</span>
      <span>:</span>
      <span className="bg-red-100 px-1.5 py-0.5 rounded">{pad(time.seconds)}</span>
    </div>
  );
}
