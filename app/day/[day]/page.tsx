import Link from "next/link";
import { notFound } from "next/navigation";
import { getDayPlan, itinerary } from "@/lib/itinerary";
import { WeatherPill } from "@/components/WeatherPill";
import { CopyableText } from "@/components/CopyableText";

type DayPageProps = {
  params: Promise<{ day: string }>;
};

export function generateStaticParams() {
  const dateParams = itinerary.map((day) => ({ day: day.id }));
  const numericParams = itinerary.map((_, idx) => ({ day: String(idx + 1) }));
  return [...dateParams, ...numericParams];
}

export default async function DayPage({ params }: DayPageProps) {
  const { day } = await params;
  let plan = getDayPlan(day);

  if (!plan) {
    const numeric = Number(day);
    if (
      Number.isInteger(numeric) &&
      numeric >= 1 &&
      numeric <= itinerary.length
    ) {
      plan = itinerary[numeric - 1];
    }
  }

  if (!plan) {
    notFound();
  }

  const dayIndex = itinerary.findIndex((day) => day.id === plan.id);
  const prevDay = itinerary[dayIndex - 1];
  const nextDay = itinerary[dayIndex + 1];

  return (
    <main className="min-h-dvh bg-transparent">
      <div className="mx-auto flex max-w-md flex-col gap-6 px-5 pb-20 pt-8">
        <Link
          href="/"
          className="text-sm font-medium text-pink-600 underline underline-offset-4"
        >
          ← 回到行程總覽
        </Link>

        <header className="rounded-3xl bg-[#FFF9FB] p-5 shadow-[0_25px_60px_rgba(255,143,196,0.15)] border border-pink-100">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-pink-600">
            <span className="text-lg">{plan.icon}</span>
            Day {dayIndex + 1}
          </div>
          <h1 className="mt-2 text-2xl font-semibold text-gray-900">
            {plan.title}
          </h1>
          <p className="text-sm text-gray-600">
            {plan.dateLabel}（{plan.weekday}）
          </p>
          <p className="mt-3 text-base text-gray-700">{plan.highlight}</p>
          <WeatherPill
            date={plan.id}
            fallback={plan.weather}
            className="mt-4"
          />
        </header>

        <section className="space-y-4">
          {plan.blocks.map((block) => (
            <div
              key={`${plan.id}-${block.label}`}
              className="rounded-3xl border border-pink-50 bg-white/90 p-4 shadow-sm"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-gray-500">
                {block.label}
              </div>
              <ul className="mt-3 space-y-2 text-sm text-gray-800">
                {block.entries.map((entry, idx) => (
                  <li key={`${entry.content}-${idx}`} className="flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                      {entry.icon ? (
                        <span className="text-xl">{entry.icon}</span>
                      ) : (
                        <span className="text-xl text-gray-300">•</span>
                      )}
                      <span className="w-20 text-xs font-semibold text-gray-500">
                        {entry.time || "提醒"}
                      </span>
                      <span className="flex-1 text-base text-gray-900">
                        {entry.href ? (
                          <Link
                            href={entry.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-pink-600 underline underline-offset-2"
                          >
                            {entry.content}
                          </Link>
                        ) : (
                          entry.content
                        )}
                      </span>

                    </div>
                    {
                      entry.priceLink ? (
                        <div className="ml-[calc(1.25rem+0.75rem+2rem)]">
                          <Link
                            href={entry.priceLink}
                            className="inline-flex items-center rounded-lg border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600 transition hover:bg-pink-100"
                          >
                            {entry.priceLabel || "查看詳細價錢"} →
                          </Link>
                        </div>
                      ) : null
                    }
                    {
                      entry.address ? (
                        <div className="ml-[calc(1.25rem+0.75rem+5rem)]">
                          <CopyableText
                            text={entry.address}
                            className="text-xs"
                          />
                        </div>
                      ) : null
                    }
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {
          plan.transit ? (
            <section className="rounded-3xl border border-pink-100 bg-white/90 p-5 shadow-sm space-y-3">
              <div className="text-xs uppercase tracking-[0.3em] text-pink-600">
                交通建議
              </div>
              <p className="mt-2 text-lg font-semibold text-gray-900">
                {plan.transit.title}
              </p>
              <ul className="mt-3 space-y-3 text-sm text-gray-800">
                {plan.transit.segments.map((segment, idx) => (
                  <li
                    key={`${segment.line}-${idx}`}
                    className="rounded-2xl border border-pink-50 bg-white px-4 py-3"
                  >
                    <div className="text-sm font-semibold text-gray-900">
                      {segment.line}
                    </div>
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-400">
                      {segment.from} → {segment.to}
                    </div>
                    {segment.note ? (
                      <p className="mt-1 text-sm text-gray-600">{segment.note}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
              {plan.transit.links?.length ? (
                <div className="space-y-2 text-sm">
                  {plan.transit.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-2xl border border-pink-200 bg-pink-50 px-4 py-2 font-semibold text-pink-700 underline-offset-4"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </section>
          ) : null
        }

        {
          plan.lodging ? (
            <section className="rounded-3xl border border-pink-100 bg-[#FFF9FB] p-5 shadow-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-pink-600">
                住宿
              </div>
              <div className="mt-2 text-lg font-semibold text-gray-900">
                {plan.lodging}
              </div>
              {plan.lodgingAddress ? (
                <div className="mt-1">
                  {plan.lodgingHref ? (
                    <div className="flex flex-col gap-1">
                      <Link
                        href={plan.lodgingHref}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-pink-600 underline underline-offset-2"
                      >
                        {plan.lodgingAddress}
                      </Link>
                      <CopyableText text={plan.lodgingAddress} label="複製地址" className="text-xs" />
                    </div>
                  ) : (
                    <CopyableText text={plan.lodgingAddress} className="text-sm" />
                  )}
                </div>
              ) : null}
            </section>
          ) : null
        }

        {
          plan.notes?.length ? (
            <section className="rounded-3xl border border-dashed border-pink-200 bg-white/80 p-5 shadow-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-pink-600">
                備註
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-gray-700">
                {plan.notes.map((note, idx) => (
                  <li key={`${note}-${idx}`}>{note}</li>
                ))}
              </ul>
              {plan.noteLinks?.length ? (
                <div className="mt-3 flex flex-wrap gap-2 text-sm">
                  {plan.noteLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-2xl border border-pink-200 bg-pink-50 px-4 py-2 font-semibold text-pink-700 underline-offset-4"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </section>
          ) : null
        }

        <nav className="flex items-center justify-between rounded-3xl border border-pink-100 bg-white p-4 shadow-sm">
          {prevDay ? (
            <Link
              href={`/day/${prevDay.id}`}
              className="text-sm font-semibold text-pink-600 underline"
            >
              ← Day {dayIndex}
            </Link>
          ) : (
            <span className="text-sm text-gray-400">已是第一天</span>
          )}

          {nextDay ? (
            <Link
              href={`/day/${nextDay.id}`}
              className="text-sm font-semibold text-pink-600 underline"
            >
              Day {dayIndex + 2} →
            </Link>
          ) : (
            <span className="text-sm text-gray-400">行程結束</span>
          )}
        </nav>
      </div >
    </main >
  );
}
