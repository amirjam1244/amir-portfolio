import type { User as SupabaseUser } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import {
  isSupabaseConfigured,
  SUPABASE_SETUP_MESSAGE,
} from "@/lib/supabase/config";

export type User = {
  id: string;
  email: string;
};

export type AuthResult = {
  success: boolean;
  error?: string;
  message?: string;
  needsEmailConfirmation?: boolean;
  user?: User | null;
};

function mapUser(user: SupabaseUser | null | undefined): User | null {
  if (!user?.email) return null;

  return {
    id: user.id,
    email: user.email,
  };
}

function getClient() {
  if (!isSupabaseConfigured()) {
    return null;
  }

  return createClient();
}

export async function getUser(): Promise<User | null> {
  const supabase = getClient();
  if (!supabase) return null;

  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error || !session?.user) return null;

  return mapUser(session.user);
}

export async function login(
  email: string,
  password: string,
): Promise<AuthResult> {
  if (!isSupabaseConfigured()) {
    return { success: false, error: SUPABASE_SETUP_MESSAGE };
  }

  const supabase = getClient();
  if (!supabase) {
    return { success: false, error: SUPABASE_SETUP_MESSAGE };
  }

  const normalizedEmail = email.trim().toLowerCase();

  if (!normalizedEmail || !password) {
    return { success: false, error: "Email and password are required." };
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: normalizedEmail,
    password,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  const user = mapUser(data.user);

  return { success: true, user };
}

export async function register(
  email: string,
  password: string,
): Promise<AuthResult> {
  if (!isSupabaseConfigured()) {
    return { success: false, error: SUPABASE_SETUP_MESSAGE };
  }

  const supabase = getClient();
  if (!supabase) {
    return { success: false, error: SUPABASE_SETUP_MESSAGE };
  }

  const normalizedEmail = email.trim().toLowerCase();

  if (!normalizedEmail || !password) {
    return { success: false, error: "Email and password are required." };
  }

  if (password.length < 6) {
    return { success: false, error: "Password must be at least 6 characters." };
  }

  const { data, error } = await supabase.auth.signUp({
    email: normalizedEmail,
    password,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  if (data.user && !data.session) {
    return {
      success: true,
      needsEmailConfirmation: true,
      message: "Check your email to confirm your account, then sign in.",
    };
  }

  return { success: true, user: mapUser(data.user) };
}

export async function logout(): Promise<void> {
  const supabase = getClient();
  if (!supabase) return;

  await supabase.auth.signOut();
}

export { mapUser, isSupabaseConfigured, SUPABASE_SETUP_MESSAGE };
