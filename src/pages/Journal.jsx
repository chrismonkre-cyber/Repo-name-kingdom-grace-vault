import { useState, useEffect } from "react";
import PageBackground from "../components/PageBackground";
import HeroHeader from "../components/HeroHeader";
import GlassCard from "../components/GlassCard";
import { Trash2 } from "lucide-react";

const DESKTOP = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/f9b2693a1_journal-desktop.png";
const MOBILE = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/c64284dc6_journal-mobile.png";

const PROMPTS = [
  "What has God placed in my hands to steward well?",
  "Where do I need wisdom, order, or discipline?",
  "How can I honor God with my finances this week?",
  "What fear around provision do I need to surrender?",
  "Where is God calling me to be more generous?",
  "What legacy am I building for my family and the Kingdom?"
];

const GOAL_TYPES = ["Giving","Saving","Debt Freedom","Family","Ministry","Legacy","Other"];

function loadJSON(key, fallback) {
  const s = localStorage.getItem(key);
  return s ? JSON.parse(s) : fallback;
}

export default function Journal() {
  const [entries, setEntries] = useState(() => loadJSON("kgv_journal", []));
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [goals, setGoals] = useState(() => loadJSON("kgv_goals", []));
  const [goalTitle, setGoalTitle] = useState("");
  const [goalType, setGoalType] = useState("Giving");
  const [goalNotes, setGoalNotes] = useState("");

  useEffect(() => { localStorage.setItem("kgv_journal", JSON.stringify(entries)); }, [entries]);
  useEffect(() => { localStorage.setItem("kgv_goals", JSON.stringify(goals)); }, [goals]);

  const saveEntry = () => {
    if (!title.trim() || !content.trim()) return;
    setEntries([{ id: Date.now(), title: title.trim(), content: content.trim(), date: new Date().toLocaleDateString() }, ...entries]);
    setTitle(""); setContent("");
  };

  const saveGoal = () => {
    if (!goalTitle.trim()) return;
    setGoals([{ id: Date.now(), title: goalTitle.trim(), type: goalType, notes: goalNotes.trim(), date: new Date().toLocaleDateString() }, ...goals]);
    setGoalTitle(""); setGoalNotes(""); setGoalType("Giving");
  };

  return (
    <>
      <PageBackground desktopImg={DESKTOP} mobileImg={MOBILE} />
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 md:py-20">
        <HeroHeader title="Stewardship Journal" subtitle="Write the vision. Pray with wisdom. Build with purpose." />

        {/* Prompts */}
        <GlassCard className="mb-8">
          <h3 className="font-heading text-sm text-yellow-400 font-bold uppercase tracking-wider mb-3">Journal Prompts</h3>
          <ul className="space-y-1.5">
            {PROMPTS.map((p, i) => (
              <li key={i} className="text-yellow-100/80 text-sm font-body cursor-pointer hover:text-yellow-300 transition-colors" onClick={() => setContent(p)}>• {p}</li>
            ))}
          </ul>
        </GlassCard>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Journal */}
          <GlassCard>
            <h3 className="font-heading text-lg text-yellow-300 font-bold mb-4">New Journal Entry</h3>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Entry title..." className="w-full bg-black/30 border border-yellow-600/30 rounded-lg px-3 py-2 text-yellow-100 text-sm mb-3 placeholder:text-yellow-100/40 focus:outline-none focus:border-yellow-500" />
            <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Write your thoughts..." rows={4} className="w-full bg-black/30 border border-yellow-600/30 rounded-lg px-3 py-2 text-yellow-100 text-sm mb-3 placeholder:text-yellow-100/40 focus:outline-none focus:border-yellow-500 resize-none" />
            <button onClick={saveEntry} className="px-5 py-2 rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-heading font-bold text-sm hover:from-yellow-500 hover:to-yellow-400 transition-all">Save Entry</button>
          </GlassCard>

          {/* Goals */}
          <GlassCard>
            <h3 className="font-heading text-lg text-yellow-300 font-bold mb-4">New Goal</h3>
            <input value={goalTitle} onChange={e => setGoalTitle(e.target.value)} placeholder="Goal title..." className="w-full bg-black/30 border border-yellow-600/30 rounded-lg px-3 py-2 text-yellow-100 text-sm mb-3 placeholder:text-yellow-100/40 focus:outline-none focus:border-yellow-500" />
            <select value={goalType} onChange={e => setGoalType(e.target.value)} className="w-full bg-black/30 border border-yellow-600/30 rounded-lg px-3 py-2 text-yellow-100 text-sm mb-3 focus:outline-none focus:border-yellow-500">
              {GOAL_TYPES.map(t => <option key={t} value={t} className="bg-red-950 text-yellow-100">{t}</option>)}
            </select>
            <textarea value={goalNotes} onChange={e => setGoalNotes(e.target.value)} placeholder="Notes..." rows={3} className="w-full bg-black/30 border border-yellow-600/30 rounded-lg px-3 py-2 text-yellow-100 text-sm mb-3 placeholder:text-yellow-100/40 focus:outline-none focus:border-yellow-500 resize-none" />
            <button onClick={saveGoal} className="px-5 py-2 rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-heading font-bold text-sm hover:from-yellow-500 hover:to-yellow-400 transition-all">Save Goal</button>
          </GlassCard>
        </div>

        {/* Saved entries */}
        {entries.length > 0 && (
          <div className="mb-10">
            <h3 className="font-heading text-xl text-yellow-300 font-bold mb-4">Saved Journal Entries</h3>
            <div className="space-y-3">
              {entries.map(e => (
                <GlassCard key={e.id} className="flex justify-between items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading text-base text-yellow-300 font-bold">{e.title}</h4>
                    <p className="text-yellow-100/60 text-xs mb-1">{e.date}</p>
                    <p className="text-yellow-100/80 text-sm font-body whitespace-pre-wrap">{e.content}</p>
                  </div>
                  <button onClick={() => setEntries(entries.filter(x => x.id !== e.id))} className="text-red-400 hover:text-red-300 shrink-0 mt-1"><Trash2 className="w-4 h-4" /></button>
                </GlassCard>
              ))}
            </div>
          </div>
        )}

        {/* Saved goals */}
        {goals.length > 0 && (
          <div>
            <h3 className="font-heading text-xl text-yellow-300 font-bold mb-4">Saved Goals</h3>
            <div className="space-y-3">
              {goals.map(g => (
                <GlassCard key={g.id} className="flex justify-between items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-heading text-base text-yellow-300 font-bold">{g.title}</h4>
                      <span className="text-xs bg-yellow-600/30 text-yellow-200 px-2 py-0.5 rounded-full">{g.type}</span>
                    </div>
                    <p className="text-yellow-100/60 text-xs mb-1">{g.date}</p>
                    {g.notes && <p className="text-yellow-100/80 text-sm font-body">{g.notes}</p>}
                  </div>
                  <button onClick={() => setGoals(goals.filter(x => x.id !== g.id))} className="text-red-400 hover:text-red-300 shrink-0 mt-1"><Trash2 className="w-4 h-4" /></button>
                </GlassCard>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}