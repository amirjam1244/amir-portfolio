export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  createdAt?: string;
};

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);
}

export function mapDbProduct(row: {
  id: string;
  name: string;
  description: string;
  price: number | string;
  created_at?: string;
}): Product {
  return {
    id: row.id,
    name: row.name,
    description: row.description,
    price: typeof row.price === "string" ? Number(row.price) : row.price,
    createdAt: row.created_at,
  };
}
