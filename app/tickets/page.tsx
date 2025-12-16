import Link from "next/link";
import { transitResources } from "@/lib/itinerary";

const ticketInfo = [
  {
    title: "迪士尼門票與快速通關",
    details: "全員已購買 2/13 Tokyo Disneyland / DisneySea 票券，QR code 已寄至家族信箱。",
    note: "如需 Genie+ 或餐廳預約，請用官方 App 登入個人帳號。",
  },
  {
    title: "交通卡 / IC 卡",
    details: "每人自行準備 Suica 或 PASMO，抵達成田後可於售票機或便利商店加值。",
    note: "手機支援 Apple Pay / Android Pay 的可直接建立虛擬卡。",
  },
  {
    title: "利木津巴士票券",
    details: "Day1 成田 → 新浦安站、Day6 飯店 → 羽田已預約，請保存 QR code 或列印郵件。",
    note: "需要更改班次請至少提前一天至官網操作。",
  },
  {
    title: "外交部出國登錄",
    details: "請於出發前完成「旅外國人動態登錄」；緊急狀況時政府可協助聯繫。",
    note: "一家只要一份紀錄，可用同一帳號更新同行名單與聯絡方式。",
    linkLabel: "前往外交部登錄頁面",
    linkHref: "https://www.boca.gov.tw/sp-travel-notify-0001-1.html",
  },
  {
    title: "Visit Japan Web",
    details: "入境前先在 Visit Japan Web 填寫「入境審查」與「海關申報」，現場出示 QR code。",
    note: "同一帳號可幫全家新增成員，確認完成藍色畫面後截圖備用。",
    linkLabel: "Visit Japan Web 登入",
    linkHref: "https://vjw-lp.digital.go.jp/en/",
  },
];

export default function TicketsPage() {
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
            票券 / Passes
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-900">
            重要票券與憑證
          </h1>
          <p className="text-sm text-gray-600">
            整理所有會用到的 QR code、電子票與交通卡，行前再確認一次狀態。
          </p>
        </header>

        <section className="space-y-3">
          {ticketInfo.map((ticket) => (
            <div
              key={ticket.title}
              className="rounded-3xl border border-pink-50 bg-white/90 p-5 shadow-sm"
            >
              <div className="text-base font-semibold text-gray-900">
                {ticket.title}
              </div>
              <p className="text-sm text-gray-700">{ticket.details}</p>
              <p className="mt-1 text-xs text-gray-500">{ticket.note}</p>
              {ticket.linkHref ? (
                <a
                  href={ticket.linkHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center rounded-2xl border border-pink-200 bg-white px-4 py-2 text-xs font-semibold text-pink-700 underline-offset-4"
                >
                  {ticket.linkLabel || "查看詳情"}
                </a>
              ) : null}
            </div>
          ))}
        </section>

        <section className="rounded-3xl border border-pink-100 bg-white/90 p-5 shadow-sm">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            大眾運輸查詢
          </div>
          <p className="mt-2 text-sm text-gray-600">
            若要查票價、路線與首末班車，可使用這些工具：
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
