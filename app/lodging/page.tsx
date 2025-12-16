import Link from "next/link";
import { lodgingInfo, transitResources } from "@/lib/itinerary";

export default function LodgingPage() {
  return (
    <main className="min-h-dvh bg-transparent">
      <div className="mx-auto flex max-w-md flex-col gap-6 px-5 pb-20 pt-8">
        <Link
          href="/"
          className="text-sm font-medium text-pink-600 underline underline-offset-4"
        >
          ← 回行程總覽
        </Link>

        <header className="rounded-3xl border border-pink-100 bg-[#FFF9FB] p-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-pink-600">
            住宿
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-900">
            {lodgingInfo.name}
          </h1>
          <p className="text-sm text-gray-600">{lodgingInfo.nights}</p>
          <p className="mt-2 text-sm text-gray-700">{lodgingInfo.address}</p>
          <div className="mt-2 text-sm text-gray-700">
            電話：
            <a className="underline" href={`tel:${lodgingInfo.phone}`}>
              {lodgingInfo.phone}
            </a>
          </div>
          <p className="mt-3 text-sm text-gray-600">{lodgingInfo.note}</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link
              href={lodgingInfo.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center rounded-2xl border border-pink-200 bg-white px-4 py-3 text-sm font-semibold text-pink-700 shadow-sm transition hover:-translate-y-0.5"
            >
              開啟地圖
            </Link>
            <Link
              href={lodgingInfo.shuttleTimetableUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center rounded-2xl border border-pink-400 bg-pink-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
            >
              迪士尼接駁車時刻表
            </Link>
          </div>
        </header>

        <section className="rounded-3xl border border-pink-100 bg-white/90 p-5 shadow-sm">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            大眾運輸查詢
          </div>
          <p className="mt-2 text-sm text-gray-600">
            想確認末班車、轉乘資訊或臨時安排小旅行，可使用以下工具：
          </p>
          <div className="mt-4 space-y-3">
            {transitResources.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-pink-50 bg-white px-4 py-3 transition hover:-translate-y-0.5 hover:shadow"
              >
                <div className="text-base font-semibold text-gray-900">
                  {resource.title}
                </div>
                <p className="text-sm text-gray-600">{resource.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
