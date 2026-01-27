"use client";

import Link from "next/link";

const menuItems = [
    { name: "燒肉午餐 (Yakiniku Lunch)", price: "¥3,200", detail: "含泡菜、沙拉、基本燒肉、飯、湯、甜點、飲料" },
    { name: "肩脊燒肉午餐 (Shoulder Roast Lunch)", price: "¥3,800", detail: "肉質較軟嫩的肩脊部位" },
    { name: "混合燒肉午餐 (Yakiniku Lunch Mix)", price: "¥4,200", detail: "包含脊肉與腿肉的混合拼盤" },
    { name: "特選燒肉午餐 (Yakiniku Lunch Ginmi)", price: "¥6,700", detail: "使用上等特選和牛部位，肉質最佳" },
];

export default function JojoenMenuPage() {
    return (
        <main className="min-h-dvh bg-[#FFF9FB] px-5 py-8">
            <div className="mx-auto max-w-md">
                <Link
                    href="/day/2026-02-14"
                    className="text-sm font-medium text-pink-600 underline underline-offset-4"
                >
                    ← 回到 Day 3 行程
                </Link>

                <header className="mt-6 mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">叙叙苑 有乐町Mullion店</h1>
                    <p className="mt-2 text-sm text-gray-600">商業午餐菜單 (含稅)</p>
                </header>

                <div className="space-y-4">
                    {menuItems.map((item) => (
                        <div
                            key={item.name}
                            className="rounded-2xl border border-pink-100 bg-white p-5 shadow-sm"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                                    <p className="mt-1 text-sm text-gray-500">{item.detail}</p>
                                </div>
                                <div className="text-lg font-bold text-pink-600">{item.price}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 rounded-2xl bg-gray-50 p-4 text-sm text-gray-600">
                    <p className="font-semibold">💡 用餐提醒</p>
                    <ul className="mt-2 list-disc pl-4 space-y-1">
                        <li>午餐時段：11:00 - 16:00 (平日) / 15:00 (週末假日)</li>
                        <li>所有價格已含稅。</li>
                        <li>套餐皆附：泡菜拼盤、沙拉、韓式拌菜、湯品、白飯、甜點、飲料。</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
