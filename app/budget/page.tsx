"use client";

import Link from "next/link";
import { budgetItems } from "@/lib/budget";

export default function BudgetPage() {
    return (
        <main className="min-h-dvh bg-transparent">
            <div className="mx-auto flex max-w-2xl flex-col gap-6 px-5 pb-20 pt-8">
                <Link
                    href="/"
                    className="text-sm font-medium text-pink-600 underline underline-offset-4"
                >
                    ← 回到行程總覽
                </Link>

                <header>
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                        TRIP BUDGET
                    </p>
                    <h1 className="mt-1 text-2xl font-semibold text-gray-900">
                        預算表
                    </h1>
                </header>

                {/* Mobile View: Cards */}
                <section className="space-y-4 md:hidden">
                    {budgetItems.map((item, idx) => (
                        <div key={idx} className="rounded-2xl border border-pink-100 bg-white p-4 shadow-sm">
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <h3 className="font-semibold text-gray-900">{item.item}</h3>
                                    {item.memo && (
                                        <p className="mt-1 text-xs text-gray-500">{item.memo}</p>
                                    )}
                                </div>
                                {(item.costPerPersonNT || item.costPerPersonJPY) && (
                                    <div className="text-right">
                                        <div className="text-sm font-bold text-pink-600">
                                            {item.costPerPersonNT ? `$${item.costPerPersonNT.toLocaleString()}` : ''}
                                            {item.costPerPersonNT && item.costPerPersonJPY ? <br /> : ''}
                                            {item.costPerPersonJPY ? `¥${item.costPerPersonJPY.toLocaleString()}` : ''}
                                        </div>
                                        <div className="text-[10px] text-gray-400">/人</div>
                                    </div>
                                )}
                            </div>

                            {(item.costNT || item.costJPY) && (
                                <div className="mt-3 pt-3 border-t border-gray-50 grid grid-cols-2 gap-2 text-xs">
                                    {item.costNT && (
                                        <div>
                                            <span className="text-gray-400 block mb-0.5">總額 (NT)</span>
                                            <span className="font-mono text-gray-700">${item.costNT.toLocaleString()}</span>
                                        </div>
                                    )}
                                    {item.costJPY && (
                                        <div>
                                            <span className="text-gray-400 block mb-0.5">總額 (¥)</span>
                                            <span className="font-mono text-gray-700">¥{item.costJPY.toLocaleString()}</span>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </section>

                {/* Desktop View: Table */}
                <section className="hidden md:block rounded-3xl border border-pink-100 bg-white shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm whitespace-nowrap">
                            <thead className="bg-pink-50 text-gray-700">
                                <tr>
                                    <th className="px-4 py-3 font-semibold">項目</th>
                                    <th className="px-4 py-3 font-semibold text-right">$$ (NT)</th>
                                    <th className="px-4 py-3 font-semibold text-right">$$ (¥)</th>
                                    <th className="px-4 py-3 font-semibold text-right">$$/人 (NT)</th>
                                    <th className="px-4 py-3 font-semibold text-right">$$/人 (¥)</th>
                                    <th className="px-4 py-3 font-semibold">備註</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {budgetItems.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50/50">
                                        <td className="px-4 py-3 font-medium text-gray-900">
                                            {item.item}
                                        </td>
                                        <td className="px-4 py-3 text-right text-gray-600 font-mono">
                                            {item.costNT?.toLocaleString()}
                                        </td>
                                        <td className="px-4 py-3 text-right text-gray-600 font-mono">
                                            {item.costJPY?.toLocaleString()}
                                        </td>
                                        <td className="px-4 py-3 text-right text-pink-600 font-mono font-medium">
                                            {item.costPerPersonNT?.toLocaleString()}
                                        </td>
                                        <td className="px-4 py-3 text-right text-gray-600 font-mono">
                                            {item.costPerPersonJPY?.toLocaleString()}
                                        </td>
                                        <td className="px-4 py-3 text-xs text-gray-400">
                                            {item.memo}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </main>
    );
}
