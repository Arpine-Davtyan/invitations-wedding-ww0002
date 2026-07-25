"use client";

import { weddingInfo } from "@/lib/contstants";
import { useEffect, useState } from "react";
import Countdown, { zeroPad } from "react-countdown";

const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    return <span className="font-bold">Time's up!</span>;
  }

  return (
    <div className="flex-center gap-2 sm:gap-10 mt-12">
      <div className="countdown-item">
        <span className="countdown-item-number">{zeroPad(days)}</span>
        <span className="countdown-item-text">Days</span>
      </div>
      <div className="mb-4 sm:mb-0">:</div>
      <div className="countdown-item">
        <span className="countdown-item-number">{zeroPad(hours)}</span>
        <span className="countdown-item-text">Hours</span>
      </div>
      <div className="mb-4 sm:mb-0">:</div>
      <div className="countdown-item">
        <span className="countdown-item-number">{zeroPad(minutes)}</span>
        <span className="countdown-item-text">Mins</span>
      </div>
      <div className="mb-4 sm:mb-0">:</div>
      <div className="countdown-item">
        <span className="countdown-item-number">{zeroPad(seconds)}</span>
        <span className="countdown-item-text">Secs</span>
      </div>
    </div>
  );
};

export default function CountdownTimer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Countdown
      date={new Date(weddingInfo.countdownDate)}
      renderer={renderer}
    />
  );
}