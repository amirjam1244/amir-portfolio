"use client";

import type { AuthChangeEvent, Session } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  getUser,
  isSupabaseConfigured,
  login as loginWithSupabase,
  logout as logoutFromSupabase,
  mapUser,
  register as registerWithSupabase,
  SUPABASE_SETUP_MESSAGE,
  type AuthResult,
  type User,
} from "@/lib/auth";
import { createClient } from "@/lib/supabase/client";

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  configured: boolean;
  setupMessage: string;
  login: (email: string, password: string) => Promise<AuthResult>;
  register: (email: string, password: string) => Promise<AuthResult>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const configured = isSupabaseConfigured();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(configured);

  useEffect(() => {
    if (!configured) {
      return;
    }

    const supabase = createClient();
    if (!supabase) {
      return;
    }

    getUser()
      .then(setUser)
      .catch(() => setUser(null))
      .finally(() => setLoading(false));

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (event: AuthChangeEvent, session: Session | null) => {
        setUser(mapUser(session?.user));
        setLoading(false);

        if (
          event === "SIGNED_IN" ||
          event === "SIGNED_OUT" ||
          event === "TOKEN_REFRESHED"
        ) {
          router.refresh();
        }
      },
    );

    return () => subscription.unsubscribe();
  }, [configured, router]);

  const login = useCallback(async (email: string, password: string) => {
    const result = await loginWithSupabase(email, password);

    if (result.success && result.user) {
      setUser(result.user);
    } else if (result.success) {
      setUser(await getUser());
    }

    return result;
  }, []);

  const register = useCallback(async (email: string, password: string) => {
    const result = await registerWithSupabase(email, password);

    if (result.success && result.user) {
      setUser(result.user);
    }

    return result;
  }, []);

  const logout = useCallback(async () => {
    await logoutFromSupabase();
    setUser(null);
    router.refresh();
  }, [router]);

  const value = useMemo(
    () => ({
      user,
      loading,
      configured,
      setupMessage: SUPABASE_SETUP_MESSAGE,
      login,
      register,
      logout,
    }),
    [user, loading, configured, login, register, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
