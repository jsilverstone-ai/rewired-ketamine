"use client";

import { useEffect, useState } from "react";
import { AccordionCard, card, Pill } from "./ui";

type Priority = "high" | "medium" | "low";

interface Task {
  id: string;
  text: string;
  completed: boolean;
  priority?: Priority;
}

const WEEKLY_DEFAULTS: Task[] = [
  { id: "w1", text: "Run Steps 1–5 of the Weekly Plan", completed: false },
  { id: "w2", text: "Review Google Search Console Pages (watch 404s)", completed: false },
  { id: "w3", text: "Create 2 Blog posts", completed: false },
  { id: "w4", text: "Set up / manage Social Media (Munch)", completed: false },
  { id: "w5", text: "Create 1 Patient Review Video", completed: false },
  { id: "w6", text: "Create 1 Instructional Video", completed: false },
  { id: "w7", text: "Add 1 news article", completed: false },
];

const priorityColors: Record<Priority, string> = {
  high: "bg-rose-100 text-rose-700 border-rose-200",
  medium: "bg-amber-100 text-amber-700 border-amber-200",
  low: "bg-teal-100 text-teal-700 border-teal-200",
};

function getWeekId(d = new Date()) {
  const start = new Date(d);
  start.setDate(d.getDate() - d.getDay());
  start.setHours(0, 0, 0, 0);
  return start.toISOString().slice(0, 10);
}

export default function WorkflowAndTemplates() {
  const [weeklyTodos, setWeeklyTodos] = useState<Task[]>(WEEKLY_DEFAULTS);
  const [myTodos, setMyTodos] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [newPriority, setNewPriority] = useState<Priority>("medium");
  const [showGuide, setShowGuide] = useState(false);

  const [note1, setNote1] = useState("");
  const [note2, setNote2] = useState("");
  const [note3, setNote3] = useState("");
  const [note4, setNote4] = useState("");
  const [note5, setNote5] = useState("");

  useEffect(() => {
    try {
      const savedWeekly = localStorage.getItem("seo-weekly-todos");
      const savedMy = localStorage.getItem("seo-my-todos");
      const weekId = getWeekId();
      const savedWeek = localStorage.getItem("seo-weekly-week-id");
      const shouldReset = savedWeek !== weekId;

      if (shouldReset) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setWeeklyTodos(WEEKLY_DEFAULTS);
        localStorage.setItem("seo-weekly-todos", JSON.stringify(WEEKLY_DEFAULTS));
        localStorage.setItem("seo-weekly-week-id", weekId);
      } else if (savedWeekly) {
        const parsed = JSON.parse(savedWeekly);
        if (!parsed || parsed.length === 0 || parsed.length < WEEKLY_DEFAULTS.length) {
          setWeeklyTodos(WEEKLY_DEFAULTS);
          localStorage.setItem("seo-weekly-todos", JSON.stringify(WEEKLY_DEFAULTS));
        } else {
          setWeeklyTodos(parsed);
        }
      }
      if (savedMy) setMyTodos(JSON.parse(savedMy));

      setNote1(localStorage.getItem("seo-note-1") || "");
      setNote2(localStorage.getItem("seo-note-2") || "");
      setNote3(localStorage.getItem("seo-note-3") || "");
      setNote4(localStorage.getItem("seo-note-4") || "");
      setNote5(localStorage.getItem("seo-note-5") || "");
    } catch {
      /* ignore localStorage failures */
    }
  }, []);

  useEffect(() => {
    try { localStorage.setItem("seo-weekly-todos", JSON.stringify(weeklyTodos)); } catch { /* ignore */ }
  }, [weeklyTodos]);
  useEffect(() => {
    try { localStorage.setItem("seo-my-todos", JSON.stringify(myTodos)); } catch { /* ignore */ }
  }, [myTodos]);
  useEffect(() => { try { localStorage.setItem("seo-note-1", note1); } catch { /* ignore */ } }, [note1]);
  useEffect(() => { try { localStorage.setItem("seo-note-2", note2); } catch { /* ignore */ } }, [note2]);
  useEffect(() => { try { localStorage.setItem("seo-note-3", note3); } catch { /* ignore */ } }, [note3]);
  useEffect(() => { try { localStorage.setItem("seo-note-4", note4); } catch { /* ignore */ } }, [note4]);
  useEffect(() => { try { localStorage.setItem("seo-note-5", note5); } catch { /* ignore */ } }, [note5]);

  const toggleWeekly = (id: string) => setWeeklyTodos((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  const toggleMy = (id: string) => setMyTodos((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  const deleteWeekly = (id: string) => setWeeklyTodos((prev) => prev.filter((t) => t.id !== id));
  const deleteMy = (id: string) => setMyTodos((prev) => prev.filter((t) => t.id !== id));

  const addMyTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setMyTodos((prev) => [...prev, { id: Date.now().toString(), text: newTask.trim(), completed: false, priority: newPriority }]);
    setNewTask("");
  };

  const sortedMyTodos = [...myTodos].sort((a, b) => {
    const order = { high: 0, medium: 1, low: 2 };
    return (order[a.priority || "medium"] || 1) - (order[b.priority || "medium"] || 1);
  });

  const doneCount = weeklyTodos.filter((t) => t.completed).length;

  return (
    <AccordionCard
      icon="📋"
      title="Checklists, Notes & Content Templates"
      summary={`${doneCount}/${weeklyTodos.length} weekly tasks done · ${myTodos.length} personal task${myTodos.length === 1 ? "" : "s"} · blog/video/news templates & tool links`}
      badge={<Pill tone="neutral">{doneCount}/{weeklyTodos.length} done</Pill>}
      defaultOpen={false}
    >
      <div className="space-y-6 pt-2">
        {/* Checklists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className={card}>
            <h3 className="text-base font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <span className="text-teal-500">✓</span> Weekly Tasks
            </h3>
            <div className="space-y-2">
              {weeklyTodos.map((task) => (
                <div key={task.id} className="flex items-start gap-3 bg-slate-50 hover:bg-slate-100 rounded-2xl p-3 transition">
                  <input type="checkbox" checked={task.completed} onChange={() => toggleWeekly(task.id)} className="mt-1 w-4 h-4 accent-teal-500" />
                  <span className={`flex-1 text-sm ${task.completed ? "line-through text-slate-400" : "text-slate-700"}`}>{task.text}</span>
                  <button type="button" onClick={() => deleteWeekly(task.id)} className="text-slate-400 hover:text-rose-500 p-1 rounded-lg transition text-lg font-bold leading-none">×</button>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-3">Resets every Sunday</p>
          </div>

          <div className={card}>
            <h3 className="text-base font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <span className="text-teal-600">✎</span> My Tasks
            </h3>
            <form onSubmit={addMyTask} className="mb-4 space-y-2">
              <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Add a task..." className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-200" />
              <div className="flex gap-2">
                <select value={newPriority} onChange={(e) => setNewPriority(e.target.value as Priority)} className="bg-slate-50 border border-slate-200 rounded-2xl px-3 py-2 text-sm">
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
                <button type="submit" className="flex-1 bg-teal-600 hover:bg-teal-500 text-white text-sm font-medium py-2 rounded-2xl transition">Add</button>
              </div>
            </form>
            <div className="space-y-2 max-h-72 overflow-y-auto">
              {sortedMyTodos.length === 0 && <p className="text-sm text-slate-400">No personal tasks yet</p>}
              {sortedMyTodos.map((task) => (
                <div key={task.id} className="flex items-start gap-3 bg-slate-50 hover:bg-slate-100 rounded-2xl p-3 transition">
                  <input type="checkbox" checked={task.completed} onChange={() => toggleMy(task.id)} className="mt-1 w-4 h-4 accent-teal-600" />
                  <div className="flex-1 min-w-0">
                    <span className={`text-sm block ${task.completed ? "line-through text-slate-400" : "text-slate-700"}`}>{task.text}</span>
                    {task.priority && <span className={`inline-block mt-1 text-[10px] px-2 py-0.5 rounded-lg border ${priorityColors[task.priority]}`}>{task.priority}</span>}
                  </div>
                  <button type="button" onClick={() => deleteMy(task.id)} className="text-slate-400 hover:text-rose-500 p-1 rounded-lg transition text-lg font-bold leading-none">×</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content request templates */}
        <div className={card}>
          <h3 className="text-base font-semibold text-slate-800 mb-1">📌 Master Content Request Templates</h3>
          <p className="text-xs text-slate-500 mb-4">Fill these in and copy into chat when you want a new blog, video, or news item.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="text-xs font-semibold text-slate-700 mb-1.5">📝 New Blog Post</div>
              <textarea
                defaultValue={`NEW BLOG – USE MASTER TEMPLATE\n\nTopic: \nSource: \nKeywords: \nExtra notes: `}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs text-slate-700 leading-relaxed focus:outline-none focus:ring-2 focus:ring-teal-200 min-h-[140px] font-mono"
              />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-700 mb-1.5">🎬 New Video</div>
              <textarea
                defaultValue={`NEW VIDEO – USE MASTER VIDEO TEMPLATE\n\nYouTube ID: \nTitle: \nDescription: \nExtra notes: `}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs text-slate-700 leading-relaxed focus:outline-none focus:ring-2 focus:ring-teal-200 min-h-[140px] font-mono"
              />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-700 mb-1.5">📰 New News Article</div>
              <textarea
                defaultValue={`NEW NEWS ARTICLE – USE MASTER NEWS TEMPLATE\n\nURL: \nSource / Publication: \nDate (or year): \nTitle: \nShort description: `}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs text-slate-700 leading-relaxed focus:outline-none focus:ring-2 focus:ring-teal-200 min-h-[140px] font-mono"
              />
            </div>
          </div>
        </div>

        {/* 5-step guide + notes */}
        <div className={card}>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-slate-800">🧭 5-Step SEO Playbook &amp; Scratch Notes</h3>
            <button type="button" onClick={() => setShowGuide((s) => !s)} className="text-xs font-medium text-teal-600 hover:text-teal-500">
              {showGuide ? "Hide notes" : "Open notes"}
            </button>
          </div>
          {showGuide && (
            <div className="space-y-4 mt-4 text-sm">
              {[
                ["1. Rank Review", note1, setNote1, "Your notes for Step 1 (example: ketamine clinic miami → #7)"],
                ["2. Competitor Check", note2, setNote2, "Your notes for Step 2 (who is ranking above you and why)"],
                ["3. Site Health", note3, setNote3, "Your notes for Step 3 (any errors, low scores, etc.)"],
                ["4. Technical + Internal Links", note4, setNote4, "Your notes for Step 4 (pages you linked from / to)"],
                ["5. Optimize 1 Page", note5, setNote5, "Your notes for Step 5 (which page you chose and what you changed)"],
              ].map(([label, val, setter, ph]) => (
                <div key={label as string}>
                  <div className="font-semibold text-slate-700 text-xs mb-1">{label as string}</div>
                  <textarea
                    value={val as string}
                    onChange={(e) => (setter as (v: string) => void)(e.target.value)}
                    placeholder={ph as string}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-200 min-h-[70px]"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* External tools */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className={card}>
            <h3 className="text-base font-semibold text-slate-800 mb-1">📱 Munch Studio</h3>
            <p className="text-xs text-slate-500 mb-4">Social media scheduling</p>
            <a href="https://www.munchstudio.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-teal-600 hover:bg-teal-500 text-white text-xs font-medium px-4 py-2 rounded-xl transition">
              Open Munch Studio
            </a>
          </div>
          <div className={card}>
            <h3 className="text-base font-semibold text-slate-800 mb-1">🎬 HeyGen</h3>
            <p className="text-xs text-slate-500 mb-4">Avatar video generation</p>
            <a href="https://www.heygen.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#0B1D36] hover:bg-slate-800 text-white text-xs font-medium px-4 py-2 rounded-xl transition">
              Open HeyGen
            </a>
          </div>
          <div className={card}>
            <h3 className="text-base font-semibold text-slate-800 mb-1">📰 Ketamine News</h3>
            <p className="text-xs text-slate-500 mb-4">Latest industry coverage</p>
            <a href="https://news.google.com/search?q=ketamine%20therapy&hl=en-US&gl=US&ceid=US:en" target="_blank" rel="noopener noreferrer" className="inline-block bg-slate-700 hover:bg-slate-600 text-white text-xs font-medium px-4 py-2 rounded-xl transition">
              View News
            </a>
          </div>
        </div>
      </div>
    </AccordionCard>
  );
}
