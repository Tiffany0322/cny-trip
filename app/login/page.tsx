import { Suspense } from "react";
import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="px-5 py-10 text-center text-sm text-gray-500">載入中…</div>}>
      <LoginForm />
    </Suspense>
  );
}
