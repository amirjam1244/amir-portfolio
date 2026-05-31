# Supabase setup

## 1. Environment variables

Copy `env.example` to `.env.local` and add your project URL and anon key.

## 2. Create the `products` table

In the Supabase Dashboard, open **SQL Editor** and run the migration:

`migrations/001_products.sql`

This creates the `products` table, enables public read access (RLS), and seeds three starter products.

## 3. Verify

Visit `/products` in the app. You should see products loaded from the database.
