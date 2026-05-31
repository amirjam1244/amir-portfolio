import { createClient } from "@/lib/supabase/client";
import { isSupabaseConfigured, SUPABASE_SETUP_MESSAGE } from "@/lib/supabase/config";
import { mapDbProduct, type Product } from "@/lib/products";

export type DbProduct = {
  id: string;
  name: string;
  description: string;
  price: number | string;
  created_at: string;
};

export type FetchProductsResult = {
  data: Product[];
  error: string | null;
};

export async function fetchProducts(): Promise<FetchProductsResult> {
  if (!isSupabaseConfigured()) {
    return { data: [], error: SUPABASE_SETUP_MESSAGE };
  }

  const supabase = createClient();
  if (!supabase) {
    return { data: [], error: SUPABASE_SETUP_MESSAGE };
  }

  const { data, error } = await supabase
    .from("products")
    .select("id, name, description, price, created_at")
    .order("created_at", { ascending: true });

  if (error) {
    const missingTable =
      error.code === "PGRST205" ||
      error.message.includes("Could not find the table");

    if (missingTable) {
      return {
        data: [],
        error:
          "Products table not found. Open Supabase → SQL Editor, run supabase/migrations/001_products.sql, then refresh this page.",
      };
    }

    return { data: [], error: error.message };
  }

  return {
    data: (data ?? []).map((row) => mapDbProduct(row as DbProduct)),
    error: null,
  };
}

export async function fetchProductById(
  productId: string,
): Promise<{ data: Product | null; error: string | null }> {
  if (!isSupabaseConfigured()) {
    return { data: null, error: SUPABASE_SETUP_MESSAGE };
  }

  const supabase = createClient();
  if (!supabase) {
    return { data: null, error: SUPABASE_SETUP_MESSAGE };
  }

  const { data, error } = await supabase
    .from("products")
    .select("id, name, description, price, created_at")
    .eq("id", productId)
    .maybeSingle();

  if (error) {
    return { data: null, error: error.message };
  }

  if (!data) {
    return { data: null, error: "Product not found." };
  }

  return { data: mapDbProduct(data as DbProduct), error: null };
}

/**
 * Example purchase record shape for a future `purchases` table.
 */
export type DbPurchase = {
  id: string;
  user_id: string;
  product_id: string;
  purchased_at: string;
};

export async function fetchUserPurchases(
  userId: string,
): Promise<DbPurchase[]> {
  const supabase = createClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("purchases")
    .select("id, user_id, product_id, purchased_at")
    .eq("user_id", userId)
    .order("purchased_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch purchases:", error.message);
    return [];
  }

  return data ?? [];
}
