-- Products table for the digital shop
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text not null,
  price numeric(10, 2) not null check (price >= 0),
  created_at timestamptz not null default now()
);

-- Public read access for the storefront
alter table public.products enable row level security;

create policy "Anyone can view products"
  on public.products
  for select
  to anon, authenticated
  using (true);

-- Seed starter products (safe to re-run: only inserts when table is empty)
insert into public.products (name, description, price)
select *
from (
  values
    (
      'Portfolio Website Template',
      'A polished, responsive portfolio template built with Next.js and Tailwind CSS. Customize and deploy in minutes.',
      29.00
    ),
    (
      'Next.js Starter Kit',
      'Production-ready Next.js boilerplate with auth, dashboard layout, dark theme, and reusable UI components.',
      49.00
    ),
    (
      'Landing Page UI Kit',
      'Modern landing page sections, hero blocks, pricing tables, and CTAs designed for high-converting SaaS sites.',
      39.00
    )
) as seed(name, description, price)
where not exists (select 1 from public.products limit 1);
