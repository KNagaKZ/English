"use client";
import { useRef, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { weeks, mockFeedback } from "@/lib/data";

export default function TaskPage(){
  const params=useParams<{week:string}>(); const week=weeks[Math.max(0,Number(params.week)-1)]||weeks[0];
  const [recording,setRecording]=useState(false); const [seconds,setSeconds]=useState(0); const [audio,setAudio]=useState<string|null>(null); const [submitted,setSubmitted]=useState(false);
  const rec=useRef<MediaRecorder|null>(null); const timer=useRef<ReturnType<typeof setInterval>|null>(null); const chunks=useRef<Blob[]>([]);
  async function start(){
    const stream=await navigator.mediaDevices.getUserMedia({audio:true}); chunks.current=[]; const r=new MediaRecorder(stream); rec.current=r;
    r.ondataavailable=e=>chunks.current.push(e.data); r.onstop=()=>{setAudio(URL.createObjectURL(new Blob(chunks.current,{type:"audio/webm"}))); stream.getTracks().forEach(t=>t.stop())}; r.start(); setSeconds(0); setRecording(true); timer.current=setInterval(()=>setSeconds(s=>Math.min(60,s+1)),1000);
  }
  function stop(){rec.current?.stop(); if(timer.current) clearInterval(timer.current); setRecording(false)}
  return <main className="mx-auto max-w-4xl px-5 py-8"><Link href="/dashboard" className="text-sm font-bold text-indigo-600">← Dashboard</Link>
    <div className="card mt-4 p-7"><div className="text-sm font-bold text-indigo-600">Week {week.week}</div><h1 className="mt-1 text-3xl font-black">{week.topic}</h1><p className="mt-3 text-lg">{week.prompt}</p><div className="mt-4 rounded-2xl bg-slate-50 p-4"><div className="font-bold">Guiding questions</div><ul className="mt-2 list-disc space-y-1 pl-5 text-slate-600">{week.questions.map(q=><li key={q}>{q}</li>)}</ul></div></div>
    <div className="card mt-5 p-7 text-center"><button onClick={recording?stop:start} className={"mx-auto flex h-32 w-32 items-center justify-center rounded-full text-5xl shadow-lg "+(recording?"bg-rose-100":"bg-indigo-100")}>🎤</button><div className="mt-4 text-2xl font-black">{String(Math.floor(seconds/60)).padStart(2,"0")}:{String(seconds%60).padStart(2,"0")} / 01:00</div><div className="mt-4 font-bold">{recording?"Recording… tap to stop":"Start Recording"}</div>
      {audio&&<div className="mt-5 space-y-4"><audio className="mx-auto w-full" controls src={audio}/><div className="flex justify-center gap-3"><button onClick={start} className="btn-soft">Try Again</button><button onClick={()=>setSubmitted(true)} className="btn-primary">Submit</button></div></div>}
    </div>
    {submitted&&<section className="mt-5 space-y-5">
      <div className="card p-6"><h2 className="text-xl font-bold">Your Speech</h2><p className="mt-3 rounded-2xl bg-slate-50 p-4">{mockFeedback.transcript}</p></div>
      <div className="grid gap-4 sm:grid-cols-2">{Object.entries(mockFeedback.scores).map(([k,v])=><div className="card p-5" key={k}><div className="capitalize font-bold">{k==="task"?"Task Achievement":k}</div><div className="mt-2 text-3xl font-black">{v}/100</div></div>)}</div>
      <div className="card p-6"><h2 className="text-xl font-bold">👍 What You Did Well</h2><ul className="mt-3 list-disc space-y-2 pl-5">{mockFeedback.positives.map(x=><li key={x}>{x}</li>)}</ul><h2 className="mt-6 text-xl font-bold">🔧 Improve These</h2><ul className="mt-3 list-disc space-y-2 pl-5">{mockFeedback.improvements.slice(0,3).map(x=><li key={x}>{x}</li>)}</ul><div className="mt-5 rounded-2xl bg-rose-50 p-4"><div>❌ {mockFeedback.correction.bad}</div><div className="mt-2">✅ {mockFeedback.correction.good}</div></div><h2 className="mt-6 text-xl font-bold">💡 Try These Words</h2><div className="mt-3 flex flex-wrap gap-2">{mockFeedback.words.map(w=><span key={w} className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700">{w}</span>)}</div><div className="mt-6 text-center"><p className="font-bold">Ready to improve your speech?</p><button className="btn-primary mt-3">🎤 Record Attempt 2</button></div></div>
    </section>}
  </main>
}
