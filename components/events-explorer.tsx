"use client";
import { useEffect, useRef, useState } from "react";
import { events } from "@/data/events";
import { DemoNotice, EventCard } from "./ui";
import { ArrowUpRight, CalendarDays, X } from "lucide-react";
import Image from "next/image";
export function EventsExplorer() {
  const [period, setPeriod] = useState<"upcoming" | "past">("upcoming");
  const [category, setCategory] = useState("All categories");
  const [selected, setSelected] = useState<string | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (selected && dialog.current && !dialog.current.open)
      dialog.current.showModal();
  }, [selected]);
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("event");
    if (events.some((e) => e.id === id)) setSelected(id);
  }, []);
  const event = events.find((e) => e.id === selected);
  return (
    <section className="section page-section">
      <DemoNotice>
        Our next trip: Encode London Hackathon, 23–25 October 2026. Event
        information is taken from the supplied poster. Open event details to
        access the expression-of-interest form. Travel arrangements will be
        shared separately.
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
            {[
              "All categories",
              ...new Set(events.map((event) => event.category)),
            ].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="event-grid event-grid-featured">
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
                  ? "View hackathon details"
                  : "View event details"}{" "}
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
          <h3>
            {period === "past"
              ? "No past events to show yet."
              : "No upcoming events in this category."}
          </h3>
          <p>
            {period === "past"
              ? "Our next event is the Encode London Hackathon."
              : "Try a different category to explore our next event."}
          </p>
          <button
            className="text-link"
            onClick={() => {
              setCategory("All categories");
              setPeriod("upcoming");
            }}
          >
            Show upcoming events
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
          <span className="eyebrow">{event.title}</span>
          <h2 id="event-title">Expression of interest</h2>
          <p className="interest-form-intro">
            Interested in coming to London? Scan the QR code or open the form
            below.
          </p>
          {event.interestForm && (
            <div className="interest-form-entry">
              <a
                href={event.interestForm.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open hackathon expression-of-interest form"
              >
                <Image
                  src={event.interestForm.qrImage}
                  width={280}
                  height={280}
                  alt="QR code for the Encode London Hackathon 2026 expression-of-interest form"
                  className="interest-form-qr"
                  unoptimized
                />
              </a>
              <a
                className="button interest-form-button"
                href={event.interestForm.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open interest form <ArrowUpRight size={17} />
              </a>
              <p>
                This opens the society’s Microsoft Forms interest form.
                Expressing interest does not confirm a hackathon place.
              </p>
            </div>
          )}
          <details className="hackathon-more">
            <summary>About the hackathon</summary>
            <p>{event.description}</p>
            <p>
              {event.dateLabel || event.date}
              <br />
              {event.time}
              <br />
              {event.location}
            </p>
            {event.poster && (
              <a
                href={event.poster}
                target="_blank"
                rel="noopener noreferrer"
                className="dialog-poster-link"
              >
                <Image
                  src={event.poster}
                  width={1024}
                  height={1536}
                  alt={event.posterAlt || event.title}
                  sizes="(max-width: 640px) 80vw, 440px"
                  className="dialog-poster"
                />
                <span>Open full poster ↗</span>
              </a>
            )}
          </details>
          <button className="button" onClick={() => setSelected(null)}>
            Got it
          </button>
        </dialog>
      )}
    </section>
  );
}
