"use client";
import { useState } from "react";
import {
  Users,
  CalendarDays,
  BookOpen,
  FileText,
  Search,
  ArrowUpRight,
} from "lucide-react";
import { events as initialEvents } from "@/data/events";
import { resources as initialResources } from "@/data/resources";
import { DemoNotice, PageHeading } from "./ui";
type Tab = "Members" | "Events" | "Resources" | "Website content";
export function AdminDashboard() {
  const [tab, setTab] = useState<Tab>("Members");
  const [query, setQuery] = useState("");
  const [events, setEvents] = useState(initialEvents);
  const [resources, setResources] = useState(initialResources);
  const [message, setMessage] = useState("");
  const [editing, setEditing] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(
    "Curious minds. Decentralised futures.",
  );
  const members = [
    {
      name: "Sample member 01",
      email: "member01@example.com",
      course: "Computer Science",
      experience: "Beginner",
    },
    {
      name: "Sample member 02",
      email: "member02@example.com",
      course: "Economics",
      experience: "Just curious",
    },
    {
      name: "Sample member 03",
      email: "member03@example.com",
      course: "Engineering",
      experience: "Intermediate",
    },
  ];
  function edit(id: string, value: string) {
    setEditing(id);
    setTitle(value);
    setMessage("");
  }
  function save(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    if (tab === "Events")
      setEvents(
        events.map((item) =>
          item.id === editing ? { ...item, title: title.trim() } : item,
        ),
      );
    else
      setResources(
        resources.map((item) =>
          item.id === editing ? { ...item, name: title.trim() } : item,
        ),
      );
    setEditing(null);
    setMessage(
      "Preview updated in memory. Nothing has been saved to a database.",
    );
  }
  return (
    <>
      <PageHeading
        eyebrow="SOCIETY WORKSPACE"
        title="A little behind the scenes."
        description="A frontend prototype for the future society administration dashboard."
      />
      <section className="section page-section">
        <DemoNotice>
          Public prototype · No authentication or database. All records are
          fictional; edits reset when this page reloads.
        </DemoNotice>
        <div className="admin-stats">
          {[
            [Users, "Sample members", members.length],
            [CalendarDays, "Sample events", events.length],
            [BookOpen, "Learning resources", resources.length],
          ].map(([Icon, label, count]) => {
            const I = Icon as typeof Users;
            return (
              <div className="stat-card" key={String(label)}>
                <I size={22} />
                <strong>{String(count)}</strong>
                <span>{String(label)}</span>
              </div>
            );
          })}
        </div>
        <div className="admin-layout">
          <nav aria-label="Dashboard sections" className="admin-nav">
            {(
              ["Members", "Events", "Resources", "Website content"] as Tab[]
            ).map((item, index) => {
              const Icon = [Users, CalendarDays, BookOpen, FileText][index];
              return (
                <button
                  key={item}
                  className={tab === item ? "active" : ""}
                  aria-pressed={tab === item}
                  onClick={() => {
                    setTab(item);
                    setQuery("");
                    setEditing(null);
                    setMessage("");
                  }}
                >
                  <Icon size={17} />
                  {item}
                </button>
              );
            })}
          </nav>
          <div className="admin-panel">
            <div className="admin-panel-head">
              <h2>{tab}</h2>
              {tab !== "Website content" && (
                <label className="search-box">
                  <Search size={16} />
                  <input
                    aria-label={`Search ${tab.toLowerCase()}`}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search records…"
                  />
                </label>
              )}
            </div>
            {tab === "Members" ? (
              <div className="table-scroll">
                <table>
                  <thead>
                    <tr>
                      <th>Member</th>
                      <th>Course</th>
                      <th>Experience</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members
                      .filter((m) =>
                        `${m.name} ${m.email} ${m.course}`
                          .toLowerCase()
                          .includes(query.toLowerCase()),
                      )
                      .map((m) => (
                        <tr key={m.email}>
                          <td>
                            <strong>{m.name}</strong>
                            <small>{m.email}</small>
                          </td>
                          <td>{m.course}</td>
                          <td>
                            <span className="pill">{m.experience}</span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            ) : tab === "Website content" ? (
              <form
                className="content-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setMessage(
                    "Content preview updated in memory. The public website has not changed.",
                  );
                }}
              >
                <label>
                  Homepage heading
                  <textarea
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </label>
                <button className="button" type="submit">
                  Preview content <ArrowUpRight size={16} />
                </button>
                <div className="content-preview">
                  <span className="sample-label">LOCAL CONTENT PREVIEW</span>
                  <h3>{content}</h3>
                </div>
              </form>
            ) : (
              <div className="admin-records">
                {(tab === "Events"
                  ? events.map((e) => ({
                      id: e.id,
                      name: e.title,
                      detail: `${e.date} · ${e.category}`,
                    }))
                  : resources.map((r) => ({
                      id: r.id,
                      name: r.name,
                      detail: r.category,
                    }))
                )
                  .filter((r) =>
                    `${r.name} ${r.detail}`
                      .toLowerCase()
                      .includes(query.toLowerCase()),
                  )
                  .map((item) => (
                    <div className="admin-record" key={item.id}>
                      <div>
                        <strong>{item.name}</strong>
                        <small>{item.detail}</small>
                      </div>
                      <button
                        className="text-link"
                        onClick={() => edit(item.id, item.name)}
                      >
                        Edit preview
                      </button>
                    </div>
                  ))}
              </div>
            )}
            {editing && (
              <form className="edit-form" onSubmit={save}>
                <label>
                  Title
                  <input
                    autoFocus
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </label>
                <div>
                  <button className="button" type="submit">
                    Apply to preview
                  </button>
                  <button
                    className="button button-white"
                    type="button"
                    onClick={() => setEditing(null)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
            {message && (
              <p className="success-message" role="status">
                {message}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
