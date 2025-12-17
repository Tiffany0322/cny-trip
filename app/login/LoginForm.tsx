"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const sp = useSearchParams();
  const next = useMemo(() => sp.get("next") || "/", [sp]);

  const [passcode, setPasscode] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    try {
      const resp = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode }),
      });

      if (!resp.ok) {
        const j = await resp.json().catch(() => ({}));
        setErr(j.message || "Passcode incorrect.");
        return;
      }

      router.replace(next);
    } catch {
      setErr("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-dvh bg-transparent px-5 py-10">
      <div className="mx-auto flex w-full max-w-md flex-col gap-6">
        <section className="rounded-3xl bg-gradient-to-br from-[#FFCEE0] via-[#FFE7F1] to-white p-6 shadow-[0_30px_60px_rgba(255,143,196,0.25)]">
          <p className="text-xs uppercase tracking-[0.3em] text-pink-600">
            2026 農曆過年
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-gray-900">
            東京 Family Trip
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            2/12 - 2/17，使用家族通關密語登入後即可查看行程。
          </p>
          <div className="mt-4 rounded-2xl bg-white/70 p-4 text-sm text-pink-700">
            密語是給家人速查行程用，請勿分享在公開社群。
          </div>
        </section>

        <form
          className="space-y-4 rounded-3xl border border-pink-100 bg-white/90 p-6 shadow-sm"
          onSubmit={onSubmit}
        >
          <label className="block text-sm font-medium text-gray-700">
            通關密碼
          </label>
          <input
            type="password"
            inputMode="text"
            autoComplete="current-password"
            className="w-full rounded-2xl border border-pink-200 px-4 py-3 text-base focus:border-pink-500 focus:outline-none"
            placeholder="輸入密語"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
          />

          {err ? (
            <div className="rounded-2xl bg-red-50 px-3 py-2 text-sm text-red-700">
              {err}
            </div>
          ) : null}

          <button
            disabled={loading || !passcode}
            className="w-full rounded-2xl bg-pink-500 px-4 py-3 text-white shadow-md transition hover:bg-pink-500/90 disabled:opacity-40"
          >
            {loading ? "登入中…" : "進入行程"}
          </button>

          <p className="text-xs text-gray-500">
            如果忘記密語，請找 Tiffany。登入後系統會在瀏覽器儲存 14
            天，若是共用裝置請登出。
          </p>
        </form>
      </div>
    </main>
  );
}
