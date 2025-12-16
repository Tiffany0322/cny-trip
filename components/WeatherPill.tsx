"use client";

import { resolveWeatherForDate, useWeatherForecast, WeatherDisplay } from "@/hooks/useWeatherForecast";

type WeatherPillProps = {
  date: string;
  fallback: WeatherDisplay;
  variant?: "detailed" | "compact";
  className?: string;
};

export function WeatherPill({
  date,
  fallback,
  variant = "detailed",
  className = "",
}: WeatherPillProps) {
  const { weather, loading } = useWeatherForecast();
  const data = resolveWeatherForDate(date, fallback, weather || undefined);
  const text =
    variant === "compact"
      ? `${data.summary} ${data.low}°C - ${data.high}°C`
      : `${data.summary}・${data.low}°C ~ ${data.high}°C`;

  const baseClasses =
    variant === "compact"
      ? "inline-flex items-center gap-1 rounded-2xl bg-pink-50 px-3 py-1 text-[11px] font-medium text-pink-700"
      : "inline-flex items-center gap-2 rounded-2xl bg-white/80 px-3 py-1 text-xs font-semibold text-pink-700";

  return (
    <div className={`${baseClasses} ${className}`.trim()}>
      <span className="text-lg">{data.icon}</span>
      <span>{loading && !weather?.[date] ? "更新中…" : text}</span>
    </div>
  );
}
