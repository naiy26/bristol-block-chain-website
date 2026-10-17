"use client";
import { useEffect, useRef, useState } from "react";
import { events } from "@/data/events";
import { DemoNotice, EventCard } from "./ui";
import { CalendarDays, X } from "lucide-react";
export function EventsExplorer() {
  const [period, setPeriod] = useState<"upcoming" | "past">("upcoming");
  const [category, setCategory] = useState("All categories");
  const [selected, setSelected] = useState<string | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (selected && dialog.current && !dialog.current.open) dialog.current.showModal();
  }, [selected]);
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("event");
    if (events.some((e) => e.id === id)) setSelected(id);
  }, []);
  const event = events.find((e) => e.id === selected);
  return (
    <section className="section page-section">
      <DemoNotice>
        Sample programme · Dates, venues, and events are illustrative.
        Registration is not open.
      </DemoNotice>
      <div className="filter-bar">
        <div className="tabs" aria-label="Event period">
          {(["upcoming", "past"] as const).map((value) => (
            <button
              aria-pressed={period === value}
              className={period === value ? "active" : ""}
              key={value}
              onClick={() => setPeriod(value)}
            >
              {value === "upcoming" ? "Upcoming events" : "Past events"}
            </button>
          ))}
        </div>
        <label className="select-label">
          Category
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {["All categories", "Workshop", "Talk", "Social", "Hackathon"].map(
              (c) => (
                <option key={c}>{c}</option>
              ),
            )}
          </select>
        </label>
      </div>
      <div className="event-grid">
        {events
          .filter(
            (e) =>
              e.status === period &&
              (category === "All categories" || e.category === category),
          )
          .map((e) => (
            <div className="event-with-action" key={e.id}>
              <EventCard event={e} onSelect={() => setSelected(e.id)} />
              <button
                className="registration-button"
                onClick={() => setSelected(e.id)}
              >
                {period === "upcoming"
                  ? "Registration details"
                  : "View sample recap"}{" "}
                <CalendarDays size={15} />
              </button>
            </div>
          ))}
      </div>
      {!events.some(
        (e) =>
          e.status === period &&
          (category === "All categories" || e.category === category),
      ) && (
        <div className="empty-state">
          <CalendarDays size={30} />
          <h3>No sample events in this category.</h3>
          <p>Try a different category to explore the programme.</p>
          <button
            className="text-link"
            onClick={() => setCategory("All categories")}
          >
            Show all categories
          </button>
        </div>
      )}
      {event && (
          <dialog
            ref={dialog}
            onClose={() => setSelected(null)}
            className="event-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-title"
          >
            <button
              autoFocus
              className="close-button"
              aria-label="Close event details"
              onClick={() => setSelected(null)}
            >
              <X />
            </button>
            <span className="eyebrow">SAMPLE EVENT · {event.category}</span>
            <h2 id="event-title">{event.title}</h2>
            <p>{event.description}</p>
            <p>
              {event.date} · {event.time}
              <br />
              {event.location}
            </p>
            <DemoNotice>
              {event.status === "upcoming"
                ? "Registration is not available. This is an illustrative event; no place can be reserved."
                : "This is an illustrative past event. No real event recap is available."}
            </DemoNotice>
            <button className="button" onClick={() => setSelected(null)}>
              Got it
            </button>
          </dialog>
      )}
    </section>
  );
}
