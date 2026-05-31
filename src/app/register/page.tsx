"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AuthForm from "@/components/AuthForm";
import AuthShell from "@/components/AuthShell";
import SupabaseSetupNotice from "@/components/SupabaseSetupNotice";
import { useAuth } from "@/context/AuthProvider";

export default function RegisterPage() {
  const { user, loading, register, configured, setupMessage } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.replace("/dashboard");
    }
  }, [user, loading, router]);

  async function handleRegister(email: string, password: string) {
    const result = await register(email, password);

    if (result.success && !result.needsEmailConfirmation) {
      router.refresh();
      router.push("/dashboard");
    }

    return result;
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#08080d] text-zinc-400">
        Loading...
      </div>
    );
  }

  if (user) {
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
        mode="register"
        onSubmit={handleRegister}
        submitLabel="Create Account"
        alternateHref="/login"
        alternateText="Already have an account?"
        alternateLinkText="Login"
      />
    </AuthShell>
  );
}
