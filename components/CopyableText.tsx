"use client";

import { useState } from "react";

interface CopyableTextProps {
    text: string;
    label?: string;
    className?: string;
}

export function CopyableText({ text, label, className = "" }: CopyableTextProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <div className={`group flex items-center gap-2 ${className}`}>
            <span className="text-gray-500">{label || text}</span>
            <button
                onClick={handleCopy}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-pink-100 hover:text-pink-600 transition"
                title="複製地址"
            >
                {copied ? (
                    <span className="text-xs">✓</span>
                ) : (
                    <span className="text-xs">📋</span>
                )}
            </button>
        </div>
    );
}
