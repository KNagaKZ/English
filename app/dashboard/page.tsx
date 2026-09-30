"use client";
import Link from "next/link";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { mockProgress } from "@/lib/data";

export default function Dashboard() {
  const weeks = [1,2,3,4,5,6];
  return <main className="mx-auto min-h-screen max-w-6xl px-5 py-8">
    <div className="flex flex-wrap items-center justify-between gap-4"><div><p className="text-sm font-bold text-indigo-600">SpeakUp AI</p><h1 className="text-3xl font-black">Welcome, Student 07</h1></div><Link href="/progress" className="btn-soft">My Speaking Journey</Link></div>
    <section className="card mt-7 p-6"><h2 className="text-xl font-bold">Research Progress</h2><div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{weeks.map(w=><Link href={"/task/"+w} key={w} className={"rounded-2xl p-4 text-center font-bold "+(w<3?"bg-emerald-50 text-emerald-700":w===3?"bg-indigo-100 text-indigo-700":"bg-slate-100 text-slate-400")}><div>Week {w}</div><div className="mt-2 text-2xl">{w<3?"✅":w===3?"🔵":"🔒"}</div></Link>)}</div></section>
    <section className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[["Tasks completed","2 / 6"],["Average score","69 / 100"],["Speaking time","4m 12s"],["Improvement","+12%"]].map(([a,b])=><div className="card p-5" key={a}><div className="text-sm text-slate-500">{a}</div><div className="mt-2 text-3xl font-black">{b}</div></div>)}</section>
    <section className="mt-5 grid gap-5 lg:grid-cols-3"><div className="card p-6 lg:col-span-2"><h2 className="font-bold">Overall speaking score</h2><div className="mt-4 h-64"><ResponsiveContainer width="100%" height="100%"><LineChart data={mockProgress}><XAxis dataKey="week"/><YAxis domain={[0,100]}/><Tooltip/><Line type="monotone" dataKey="overall" strokeWidth={3}/></LineChart></ResponsiveContainer></div></div>
    <div className="card p-6"><h2 className="font-bold">Current skill scores</h2><div className="mt-4 space-y-4">{[["Fluency",66],["Grammar",69],["Vocabulary",68],["Task achievement",74]].map(([n,s])=><div key={String(n)}><div className="flex justify-between text-sm font-semibold"><span>{n}</span><span>{s}</span></div><div className="mt-1 h-2 rounded-full bg-slate-100"><div className="h-2 rounded-full bg-indigo-500" style={{width:s+"%"}}/></div></div>)}</div></div></section>
  </main>
}
