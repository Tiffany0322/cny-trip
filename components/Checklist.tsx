"use client";

import { useState, useEffect } from "react";

const initialItems = [
    "1/25 確認護照在身上並拍照存雲端。",
    "換日幣",
    "旅平險",
    "登錄外交部出國",
    "填寫 Visit Japan Web",
    "下載日本要用的 APP、準備好信用卡、填好飯店資料",
    "買西瓜卡、阿姨記得買！！",
    "陳醫生拿藥",
    "買 eSim 卡",
];

export function Checklist() {
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

    useEffect(() => {
        // Load state from localStorage on mount
        const saved = localStorage.getItem("trip_checklist");
        if (saved) {
            try {
                setCheckedItems(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse checklist state", e);
            }
        }
    }, []);

    const toggleItem = (item: string) => {
        const nextState = {
            ...checkedItems,
            [item]: !checkedItems[item],
        };
        setCheckedItems(nextState);
        localStorage.setItem("trip_checklist", JSON.stringify(nextState));
    };

    return (
        <div className="mt-4 rounded-2xl border border-white/60 bg-white/60 p-3 text-sm text-gray-800">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-pink-600">
                重要提醒
            </div>
            <div className="mt-2 space-y-2">
                {initialItems.map((item) => {
                    const isChecked = checkedItems[item] || false;
                    return (
                        <label
                            key={item}
                            className={`flex items-start gap-2 cursor-pointer transition select-none ${isChecked ? "opacity-50" : ""
                                }`}
                        >
                            <div
                                className={`flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition ${isChecked
                                        ? "bg-pink-500 border-pink-500 text-white"
                                        : "bg-white border-pink-300"
                                    }`}
                            >
                                {isChecked && (
                                    <svg
                                        className="w-3.5 h-3.5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                )}
                            </div>
                            <input
                                type="checkbox"
                                className="hidden"
                                checked={isChecked}
                                onChange={() => toggleItem(item)}
                            />
                            <span className={isChecked ? "line-through text-gray-500" : ""}>
                                {item}
                            </span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
}
