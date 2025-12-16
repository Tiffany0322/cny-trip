"use client";

import { useEffect, useState } from "react";
import { describeWeatherCode } from "@/lib/weatherCodes";

type ApiWeatherResponse = {
  daily?: {
    time: string[];
    weathercode: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
};

export type WeatherDisplay = {
  icon: string;
  summary: string;
  high: number;
  low: number;
};

type WeatherMap = Record<string, WeatherDisplay>;

const CACHE_TTL = 30 * 60 * 1000; // 30 mins
let cachedWeather: WeatherMap | null = null;
let cachedAt = 0;

function buildWeatherMap(daily?: ApiWeatherResponse["daily"]): WeatherMap {
  if (!daily?.time) return {};
  const map: WeatherMap = {};

  daily.time.forEach((date, idx) => {
    const code = daily.weathercode?.[idx] ?? 0;
    const desc = describeWeatherCode(code);
    const high = Math.round(daily.temperature_2m_max?.[idx] ?? 0);
    const low = Math.round(daily.temperature_2m_min?.[idx] ?? 0);

    map[date] = {
      icon: desc.icon,
      summary: desc.summary,
      high,
      low,
    };
  });

  return map;
}

export function useWeatherForecast() {
  const [weather, setWeather] = useState<WeatherMap | null>(() => {
    if (cachedWeather && Date.now() - cachedAt < CACHE_TTL) {
      return cachedWeather;
    }
    return null;
  });
  const [loading, setLoading] = useState(!weather);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (weather) return;

    let cancelled = false;

    fetch("/api/weather")
      .then((res) => {
        if (!res.ok) throw new Error("Weather API failed");
        return res.json() as Promise<ApiWeatherResponse>;
      })
      .then((json) => {
        if (cancelled) return;
        const map = buildWeatherMap(json.daily);
        cachedWeather = map;
        cachedAt = Date.now();
        setWeather(map);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [weather]);

  return { weather, loading, error };
}

export function resolveWeatherForDate(
  date: string,
  fallback: WeatherDisplay,
  weather?: WeatherMap | null
): WeatherDisplay {
  if (!weather) return fallback;
  return weather[date] ?? fallback;
}
