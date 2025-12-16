import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { passcode } = await req.json().catch(() => ({ passcode: "" }));

  // 從環境變數讀取，不要寫死在程式碼
  const expected = process.env.TRIP_PASSCODE || "";

  if (!expected) {
    return NextResponse.json(
      { ok: false, message: "Server not configured (TRIP_PASSCODE missing)." },
      { status: 500 }
    );
  }

  if (passcode !== expected) {
    return NextResponse.json({ ok: false, message: "Passcode incorrect." }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set("trip_auth", "1", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    // 例如 14 天
    maxAge: 60 * 60 * 24 * 14,
  });
  return res;
}