"use client";

import Link from "next/link";

export default function ImahanMenuPage() {
    return (
        <main className="min-h-dvh bg-[#FFF9FB] px-5 py-8">
            <div className="mx-auto max-w-md">
                <Link
                    href="/day/2026-02-15"
                    className="text-sm font-medium text-pink-600 underline underline-offset-4"
                >
                    ← 回到 Day 4 行程
                </Link>

                <header className="mt-6 mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">人形町今半 銀座店</h1>
                    <p className="mt-2 text-sm text-gray-600">已預訂餐點明細 (4 人)</p>
                </header>

                <div className="space-y-6">
                    <div className="rounded-2xl border border-pink-100 bg-white p-5 shadow-sm space-y-4">
                        <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-2">餐點內容 (注文)</h3>

                        <div className="flex justify-between items-start text-sm">
                            <div>
                                <div className="font-medium text-gray-800">午間壽喜燒定食 (特上ロース)</div>
                                <div className="text-xs text-gray-500">¥9,460 × 2</div>
                            </div>
                            <div className="font-medium text-gray-900">¥18,920</div>
                        </div>

                        <div className="flex justify-between items-start text-sm">
                            <div>
                                <div className="font-medium text-gray-800">團體壽喜燒套餐 (特上ロース)</div>
                                <div className="text-xs text-gray-500">¥11,110 × 2</div>
                            </div>
                            <div className="font-medium text-gray-900">¥22,220</div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-pink-100 bg-white p-5 shadow-sm space-y-3">
                        <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-2">金額計算</h3>

                        <div className="flex justify-between text-sm text-gray-600">
                            <span>小計</span>
                            <span>¥41,140</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>服務費 (10%)</span>
                            <span>¥4,114</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>消費稅</span>
                            <span>(已含)</span>
                        </div>

                        <div className="my-2 border-t border-dashed border-gray-200"></div>

                        <div className="flex justify-between items-center">
                            <span className="font-bold text-gray-900">總計 (合計)</span>
                            <span className="text-xl font-bold text-pink-600">¥45,254</span>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-pink-50 p-4 text-center">
                        <p className="text-sm text-gray-600">平均每人預算</p>
                        <p className="mt-1 text-2xl font-bold text-pink-600">¥11,314</p>
                        <p className="text-xs text-gray-400 mt-1">(¥45,254 ÷ 4人)</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
