-- SpeakUp AI MVP schema
create extension if not exists pgcrypto;

create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null check (role in ('student','teacher')),
  display_name text,
  research_id text unique,
  consent_at timestamptz,
  created_at timestamptz default now()
);

create table if not exists speaking_tasks (
  id uuid primary key default gen_random_uuid(),
  week int not null check (week between 1 and 6),
  topic text not null,
  prompt text not null,
  guiding_questions jsonb not null default '[]'::jsonb,
  is_published boolean not null default true
);

create table if not exists attempts (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references profiles(id) on delete cascade,
  task_id uuid not null references speaking_tasks(id) on delete cascade,
  attempt_no int not null check (attempt_no in (1,2)),
  audio_path text,
  transcript text,
  speaking_duration_seconds int,
  fluency int check (fluency between 0 and 100),
  grammar int check (grammar between 0 and 100),
  vocabulary int check (vocabulary between 0 and 100),
  task_achievement int check (task_achievement between 0 and 100),
  overall_score numeric,
  feedback jsonb,
  created_at timestamptz default now(),
  unique(student_id,task_id,attempt_no)
);

create table if not exists reflections (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references profiles(id) on delete cascade,
  task_id uuid not null references speaking_tasks(id) on delete cascade,
  confidence int not null check (confidence between 1 and 4),
  improved_text text,
  next_time_text text,
  created_at timestamptz default now(),
  unique(student_id,task_id)
);

alter table profiles enable row level security;
alter table speaking_tasks enable row level security;
alter table attempts enable row level security;
alter table reflections enable row level security;

create policy "users read own profile" on profiles for select using (auth.uid() = id);
create policy "students read published tasks" on speaking_tasks for select using (is_published = true);
create policy "students manage own attempts" on attempts for all using (auth.uid() = student_id) with check (auth.uid() = student_id);
create policy "students manage own reflections" on reflections for all using (auth.uid() = student_id) with check (auth.uid() = student_id);

insert into storage.buckets (id,name,public) values ('speaking-audio','speaking-audio',false) on conflict (id) do nothing;
