import Link from "next/link";
import { ArrowUpRight, Clock3, MapPin } from "lucide-react";
import type { Resource, SocietyEvent } from "@/lib/types";
import { Art } from "./art";
export function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="page-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
export function DemoNotice({ children }: { children: React.ReactNode }) {
  return (
    <div className="demo-notice">
      <span className="status-dot" />
      {children}
    </div>
  );
}
export function EventCard({ event, onSelect }: { event: SocietyEvent; onSelect?: () => void }) {
  const date = new Date(`${event.date}T12:00:00Z`);
  return (
    <article className="event-card">
      <div className="event-image">
        <Art variant={event.art} />
        <span className="image-label">{event.category}</span>
        <div className="date-tile">
          <span>
            {date.toLocaleDateString("en-GB", {
              month: "short",
              timeZone: "Europe/London",
            })}
          </span>
          <strong>{date.getUTCDate()}</strong>
        </div>
      </div>
      <div className="event-body">
        <span className="sample-label">SAMPLE EVENT</span>
        <h3>{event.title}</h3>
        <div className="event-meta">
          <span>
            <Clock3 size={13} />
            {event.time}
          </span>
          <span>
            <MapPin size={13} />
            {event.location}
          </span>
        </div>
        <p>{event.description}</p>
        <div className="card-bottom">
          <span>
            {event.status === "upcoming"
              ? "All levels welcome"
              : "Past sample event"}
          </span>
          {onSelect ? <button className="event-arrow" onClick={onSelect} aria-label={`View ${event.title}`}><ArrowUpRight size={19} /></button> : <Link
            href={`/events?event=${event.id}`}
            aria-label={`View ${event.title}`}
          >
            <ArrowUpRight size={19} />
          </Link>}
        </div>
      </div>
    </article>
  );
}
export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <a
      className="resource-card"
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="resource-top">
        <span className={`resource-mark ${resource.color}`}>
          {resource.mark}
        </span>
        <ArrowUpRight size={18} />
      </div>
      <span className="sample-label">{resource.category}</span>
      <h3>{resource.name}</h3>
      <p>{resource.description}</p>
      <div className="card-bottom">
        <span className="level">
          <i />
          {resource.difficulty}
        </span>
        <span>Explore resource</span>
      </div>
    </a>
  );
}
export function SectionTitle({
  eyebrow,
  title,
  description,
  href,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  action?: string;
}) {
  return (
    <div className="section-title">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {href && (
        <Link className="text-link" href={href}>
          {action}
          <ArrowUpRight size={17} />
        </Link>
      )}
    </div>
  );
}
