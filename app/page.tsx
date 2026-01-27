"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { itinerary } from "@/lib/itinerary";
import { WeatherPill } from "@/components/WeatherPill";
import { CopyableText } from "@/components/CopyableText";
import { pickItineraryDay } from "@/lib/day-selector";
import { Checklist } from "@/components/Checklist";

const quickNav = [
  { label: "行程", href: "#section-itinerary", icon: "🗺️" },
  { label: "住宿", href: "/lodging", icon: "🏨" },
  { label: "預算", href: "/budget", icon: "💰" },
  { label: "票券", href: "/tickets", icon: "🎟️" },
];

const transitShortcuts = [
  {
    label: "成田機場 → 飯店",
    detail: "利木津巴士 4 號乘車口，提供 Google Maps 路線。",
    icon: "🚌",
    href: "https://www.google.com/maps/dir/?api=1&origin=Narita+International+Airport&destination=Tokyo+Bay+Oriental+Hotel",
  },
  {
    label: "飯店 → 東京迪士尼",
    detail: "官方接駁 / JR 新浦安線路，快速導航。",
    icon: "🎢",
    href: "https://www.google.com/maps/dir/?api=1&origin=Tokyo+Bay+Oriental+Hotel&destination=Tokyo+Disneyland",
  },
  {
    label: "飯店 → 羽田機場",
    detail: "回程利木津巴士集合點與終點站。",
    icon: "🛫",
    href: "https://www.google.com/maps/dir/?api=1&origin=Tokyo+Bay+Oriental+Hotel&destination=Haneda+Airport+Terminal+3",
  },
];

export default function HomePage() {
  const router = useRouter();
  const { day: todayCard, index: todayIndex } = pickItineraryDay(itinerary);

  const daysUntilDeparture = useMemo(() => {
    if (!itinerary.length) return null;
    const firstDay = new Date(itinerary[0].id);
    const now = new Date();
    const diff = firstDay.getTime() - now.getTime();
    if (diff <= 0) return 0;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }, []);

  async function logout() {
    await fetch("/api/logout", { method: "POST" });
    router.replace("/login");
  }

  return (
    <main className="min-h-dvh bg-transparent">
      <div className="mx-auto flex max-w-md flex-col gap-6 px-5 pb-36 pt-8">
        <header className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
              CNY Family Trip
            </p>
            <h1 className="text-2xl font-semibold text-gray-900">
              東京 6 日行程
            </h1>
            <p className="text-sm text-gray-600">2026/2/12 - 2/17</p>
          </div>

          <button
            onClick={logout}
            className="rounded-2xl border border-pink-200 bg-white/80 px-4 py-2 text-sm font-medium text-pink-700 shadow-sm"
          >
            登出
          </button>
        </header>

        <nav className="grid grid-cols-4 gap-2 rounded-3xl border border-white/60 bg-white/30 p-3 shadow-sm backdrop-blur">
          {quickNav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center gap-1 rounded-2xl bg-white/70 px-2 py-3 text-xs font-semibold text-pink-700 shadow-sm transition hover:-translate-y-0.5"
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <section className="rounded-3xl bg-gradient-to-br from-[#FFDDEA] via-[#FFEFF5] to-[#FFF8FB] p-5 shadow-[0_25px_60px_rgba(255,143,196,0.2)]">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">
            <span className="text-lg">{todayCard.icon}</span>
            今日提醒
          </div>
          <h2 className="mt-2 text-xl font-semibold text-gray-900">
            {todayCard.title}
          </h2>
          <p className="text-sm text-gray-600">{todayCard.highlight}</p>
          {daysUntilDeparture !== null ? (
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">
              {daysUntilDeparture === 0
                ? "行程進行中！"
                : `距離出發還有 ${daysUntilDeparture} 天`}
            </p>
          ) : null}
          <WeatherPill
            date={todayCard.id}
            fallback={todayCard.weather}
            className="mt-3"
          />

          <ul className="mt-4 space-y-2 text-sm text-gray-800">
            {todayCard.blocks[0]?.entries.slice(0, 3).map((entry, index) => (
              <li
                key={`${entry.content}-${index}`}
                className="flex flex-col gap-1 rounded-2xl bg-white/80 px-3 py-2"
              >
                <div className="flex items-center gap-3">
                  {entry.icon ? (
                    <span className="text-xl">{entry.icon}</span>
                  ) : null}
                  <span className="text-xs font-semibold text-gray-500">
                    {entry.time || "提醒"}
                  </span>
                  <span className="text-base">{entry.content}</span>
                </div>
                {entry.address ? (
                  <div className="ml-[calc(1.25rem+0.75rem+2rem)]">
                    <CopyableText
                      text={entry.address}
                      className="text-xs"
                    />
                  </div>
                ) : null}
              </li>
            ))}
          </ul>

          <Link
            href={`/day/${todayCard.id}`}
            className="mt-4 inline-flex items-center justify-center rounded-2xl bg-pink-500/90 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-500"
          >
            查看 Day {todayIndex + 1} 詳細行程 →
          </Link>

          <Checklist />
        </section>

        <section id="section-itinerary" className="space-y-3 scroll-mt-10">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            快速入口
          </div>
          <div className="grid grid-cols-1 gap-3">
            {itinerary.map((day, idx) => (
              <Link
                key={day.id}
                href={`/day/${day.id}`}
                className="rounded-3xl border border-pink-100 bg-white/90 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>
                    {day.dateLabel}（{day.weekday}）
                  </span>
                  <span>Day {idx + 1}</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-base font-semibold text-gray-900">
                  <span className="text-xl">{day.icon}</span>
                  {day.title}
                </div>
                <p className="text-sm text-gray-600">{day.highlight}</p>
                <WeatherPill
                  date={day.id}
                  fallback={day.weather}
                  variant="compact"
                  className="mt-2"
                />
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            交通捷徑
          </div>
          <div className="space-y-3">
            {transitShortcuts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 rounded-3xl border border-pink-100 bg-white/90 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="text-base font-semibold text-gray-900">
                    {item.label}
                  </div>
                  <p className="text-sm text-gray-600">{item.detail}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
