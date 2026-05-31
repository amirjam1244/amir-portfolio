import type { Product } from "@/lib/products";

/**
 * Payload for a future checkout session (Stripe, Lemon Squeezy, etc.).
 */
export type CheckoutRequest = {
  productId: string;
  productName: string;
  price: number;
  userId?: string;
  userEmail?: string;
};

export type PurchaseResult = {
  success: boolean;
  error?: string;
  /** Set when real payment flow returns a redirect URL */
  checkoutUrl?: string;
};

/**
 * Mock purchase flow — replace body with payment provider + Supabase `purchases` insert.
 */
export async function initiatePurchase(
  product: Product,
  options?: { userId?: string; userEmail?: string },
): Promise<PurchaseResult> {
  const payload: CheckoutRequest = {
    productId: product.id,
    productName: product.name,
    price: product.price,
    userId: options?.userId,
    userEmail: options?.userEmail,
  };

  // Future: POST to /api/checkout with payload, return checkoutUrl
  void payload;

  if (typeof window !== "undefined") {
    window.alert("This is a demo product");
  }

  return { success: true };
}
