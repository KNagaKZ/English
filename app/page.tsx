import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-sky-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 flex items-center justify-between">
          <div className="text-2xl font-black text-indigo-700">SpeakUp AI</div>
          <div className="flex gap-3">
            <Link href="/research" className="btn-soft">Research</Link>
            <Link href="/dashboard" className="btn-primary">Open demo</Link>
          </div>
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-bold text-indigo-700">Grade 8–9 Research Experiment</span>
            <h1 className="mt-5 text-5xl font-black leading-tight">Speak, get feedback, improve, and prove your progress.</h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">A six-week English speaking research platform designed to measure whether immediate AI-assisted feedback improves speaking performance and confidence.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/task/1" className="btn-primary">Try Week 1 speaking task</Link>
              <Link href="/teacher" className="btn-soft">Teacher dashboard</Link>
            </div>
          </div>
          <div className="card p-7">
            <h2 className="text-xl font-bold">Research workflow</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-5">
              {["Record","AI feedback","Improve","Record again","Reflect"].map((x,i)=><div key={x} className="rounded-2xl bg-slate-100 p-4 text-center"><div className="text-sm font-black text-indigo-600">{i+1}</div><div className="mt-1 text-sm font-semibold">{x}</div></div>)}
            </div>
            <div className="mt-6 rounded-2xl bg-emerald-50 p-5">
              <div className="text-sm font-semibold text-emerald-800">Research question</div>
              <div className="mt-1 text-lg font-bold">Does immediate AI-assisted feedback improve students’ English speaking performance?</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
