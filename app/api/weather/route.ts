import { NextResponse } from "next/server";

const TOKYO_LAT = 35.6762;
const TOKYO_LON = 139.6503;
const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${TOKYO_LAT}&longitude=${TOKYO_LON}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&forecast_days=14`;

export async function GET() {
  try {
    const resp = await fetch(API_URL, {
      next: { revalidate: 60 * 30 },
    });

    if (!resp.ok) {
      return NextResponse.json(
        { error: "Failed to fetch weather" },
        { status: 502 }
      );
    }

    const data = await resp.json();
    return NextResponse.json({
      daily: data.daily,
    });
  } catch {
    return NextResponse.json(
      { error: "Weather service unavailable" },
      { status: 500 }
    );
  }
}
