create table if not exists public.feedback (
  id bigint generated always as identity primary key,
  name text not null,
  email text,
  message text not null,
  rating int not null check (rating >= 1 and rating <= 5),
  created_at timestamptz not null default now()
);

alter table public.feedback enable row level security;

create policy "Allow public insert feedback"
on public.feedback
for insert
to anon
with check (true);

create policy "Allow authenticated read feedback"
on public.feedback
for select
to authenticated
using (true);
