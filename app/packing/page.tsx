"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "cny-trip-packing";

const packingList = [
  {
    title: "必備證件",
    items: [
      { id: "docs-passport", label: "護照 + 身分證" },
      { id: "docs-ticket", label: "日本入境/回台回程機票" },
      { id: "docs-insurance", label: "保險資料／緊急聯絡表" },
    ],
  },
  {
    title: "穿搭與個人用品",
    items: [
      { id: "wear-warm", label: "保暖外套、圍巾、手套" },
      { id: "wear-med", label: "日常藥品、慢性處方籤" },
      { id: "wear-power", label: "充電器、轉接頭、行動電源" },
    ],
  },
  {
    title: "交換 / 家庭物品",
    items: [
      { id: "family-snack", label: "家族共用零食或伴手禮" },
      { id: "family-envelope", label: "除夕紅包或禮品" },
      { id: "family-scale", label: "行李秤（回程用）" },
    ],
  },
];

export default function PackingPage() {
  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    if (typeof window === "undefined") return {};
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      return stored ? (JSON.parse(stored) as Record<string, boolean>) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {
      // ignore quota errors
    }
  }, [checked]);

  const totalItems = useMemo(
    () => packingList.reduce((sum, group) => sum + group.items.length, 0),
    []
  );
  const completed = useMemo(
    () => Object.values(checked).filter(Boolean).length,
    [checked]
  );
  const progress =
    totalItems > 0 ? Math.round((completed / totalItems) * 100) : 0;

  function toggleItem(itemId: string) {
    setChecked((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  }

  function resetChecklist() {
    setChecked({});
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }

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
            行李 / Packing List
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-900">
            出發前檢查清單
          </h1>
          <p className="text-sm text-gray-600">
            統一在 2/10 晚上於家族群確認，出發當天只需要帶著行李與好心情。
          </p>
          <div className="mt-4 rounded-2xl border border-white/50 bg-white/70 p-4 text-sm text-gray-700">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-pink-600">
              <span>進度</span>
              <span>
                {completed}/{totalItems}
              </span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-pink-100">
              <div
                className="h-2 rounded-full bg-pink-500 transition-[width]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-gray-500">
              每台裝置會記錄自己的勾選，可隨時重置。
            </p>
          </div>
          <button
            onClick={resetChecklist}
            className="mt-3 inline-flex items-center justify-center rounded-2xl border border-pink-200 bg-white px-4 py-2 text-xs font-semibold text-pink-700 shadow-sm transition hover:-translate-y-0.5"
          >
            清除勾選
          </button>
        </header>

        <section className="space-y-3">
          {packingList.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-pink-50 bg-white/90 p-5 shadow-sm"
            >
              <div className="text-sm font-semibold text-gray-900">
                {group.title}
              </div>
              <ul className="mt-2 space-y-2 text-sm text-gray-700">
                {group.items.map((item) => {
                  const isChecked = !!checked[item.id];
                  return (
                    <li key={item.id}>
                      <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-pink-50 bg-white px-4 py-2 transition hover:-translate-y-0.5 hover:shadow-sm">
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={isChecked}
                          onChange={() => toggleItem(item.id)}
                        />
                        <span
                          className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                            isChecked
                              ? "border-pink-500 bg-pink-500 text-white"
                              : "border-pink-200 bg-white text-pink-400"
                          }`}
                        >
                          {isChecked ? "✓" : ""}
                        </span>
                        <span
                          className={`flex-1 ${
                            isChecked ? "text-gray-400 line-through" : ""
                          }`}
                        >
                          {item.label}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
