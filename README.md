# SpeakUp AI – AI Speaking Coach

SpeakUp AI is a Grade 8–9 English research experiment platform designed around the question:

> **Does immediate AI-assisted feedback improve students’ English speaking performance?**

The six-week workflow is: **Record → AI Feedback → Improve → Record Again → Reflect**.

## MVP included

- Student research dashboard
- Six weekly speaking tasks
- Browser microphone recording with MediaRecorder
- Audio preview
- Realistic mock transcription and AI feedback
- Four scoring categories: fluency, grammar, vocabulary, task achievement
- Student-friendly feedback with a maximum of three key corrections
- Progress charts
- Researcher dashboard with anonymous research IDs
- CSV export placeholder
- Public research explanation page
- Supabase SQL schema for users, tasks, attempts and reflections
- Private audio storage bucket design
- Environment-variable setup for future AI APIs

## Technology

- Next.js
- TypeScript
- Tailwind CSS
- Supabase Auth / Database / Storage
- Browser MediaRecorder API
- Recharts
- Vercel-ready

## Local installation

```bash
git clone https://github.com/KNagaKZ/English.git
cd English
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Environment variables

Fill these in `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
AI_TRANSCRIPTION_API_KEY=
AI_FEEDBACK_API_KEY=
```

Never commit real keys. `.env.local` is ignored by Git.

## Database setup

1. Create a Supabase project.
2. Open the SQL Editor.
3. Run `supabase/schema.sql`.
4. Add your Supabase URL and anon key to `.env.local`.
5. Keep the service-role key server-side only.

The schema stores:
- anonymous research IDs
- roles
- weekly speaking tasks
- Attempt 1 and Attempt 2
- private audio paths
- transcripts
- speaking duration
- fluency, grammar, vocabulary and task-achievement scores
- reflections and confidence

## Mock AI mode

The current MVP intentionally uses realistic mock transcription and feedback so the entire research workflow can be tested before a paid transcription/LLM service is connected.

The next integration point should be a server-only API route that:
1. receives the private audio file,
2. sends audio to a transcription service,
3. sends transcript + weekly task rubric to an AI feedback service,
4. returns structured JSON scores and feedback,
5. saves the research measurements in Supabase.

## Privacy

Participants are school students:
- public pages must not display full names,
- research exports should use IDs such as `Student 01`,
- teacher routes require authentication in production,
- audio files must stay in a private Supabase bucket,
- API keys must never be exposed in browser code,
- consent must be collected before participation.

## Production checklist

Before real student use:
- connect Supabase authentication
- protect `/teacher` with teacher-role authorization
- add private signed audio URLs
- implement server-side AI transcription/feedback
- add reflection form persistence
- implement real CSV export
- add parental/student consent wording appropriate to your school
- review local school and research privacy requirements

## Build

```bash
npm run build
```

## Deploy to Vercel

1. Import `KNagaKZ/English` into Vercel.
2. Add the environment variables from `.env.local` in Vercel Project Settings.
3. Deploy.
4. Add the Vercel domain to Supabase Auth redirect URLs when authentication is enabled.

No API keys should be committed to GitHub.
