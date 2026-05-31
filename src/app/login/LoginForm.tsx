"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import AuthForm from "@/components/AuthForm";
import AuthShell from "@/components/AuthShell";
import SupabaseSetupNotice from "@/components/SupabaseSetupNotice";
import { useAuth } from "@/context/AuthProvider";

export default function LoginForm() {
  const { user, loading, login, configured, setupMessage } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = searchParams.get("next") || "/dashboard";

  useEffect(() => {
    if (!loading && user) {
      router.replace(nextPath);
    }
  }, [user, loading, router, nextPath]);

  async function handleLogin(email: string, password: string) {
    const result = await login(email, password);

    if (result.success) {
      router.refresh();
      router.push(nextPath);
    }

    return result;
  }

  if (loading || user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#08080d] text-zinc-400">
        Loading...
      </div>
    );
  }

  if (!configured) {
    return (
      <AuthShell>
        <SupabaseSetupNotice message={setupMessage} />
      </AuthShell>
    );
  }

  return (
    <AuthShell>
      <AuthForm
        mode="login"
        onSubmit={handleLogin}
        submitLabel="Login"
        alternateHref="/register"
        alternateText="Don't have an account?"
        alternateLinkText="Register"
      />
    </AuthShell>
  );
}
