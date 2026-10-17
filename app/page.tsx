import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  BookOpen,
  Code2,
  Users,
  Lightbulb,
  Sparkles,
  Check,
} from "lucide-react";
import { Art } from "@/components/art";
import { EventCard, ResourceCard, SectionTitle } from "@/components/ui";
import { events } from "@/data/events";
import { resources } from "@/data/resources";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-orb orb-left" />
        <div className="hero-orb orb-right" />
        <div className="hero-ribbon" />
        <span className="floating-node node-one" />
        <span className="floating-node node-two" />
        <span className="floating-node node-three" />
        <div className="hero-content">
          <span className="hero-tag">
            <span className="status-dot" /> A University of Bristol student
            community
          </span>
          <h1>
            Curious minds.
            <br />
            <span>Decentralised futures.</span>
          </h1>
          <p>
            Explore blockchain. Build something meaningful.
            <br />
            Find your people at Blockchain Bristol.
          </p>
          <div className="hero-actions">
            <Link href="/join" className="button">
              Join the society <ArrowUpRight size={17} />
            </Link>
            <Link href="/events" className="button button-white">
              Explore events <ArrowRight size={16} />
            </Link>
          </div>
          <div className="hero-footnote">
            <Check size={13} /> Any course. Any experience level. Everyone
            welcome.
          </div>
        </div>
        <div className="hero-art">
          <Art />
          <span className="float-label">
            <Blocks size={15} /> A new way to connect.
          </span>
        </div>
        <div className="hero-bottom">
          <span>LEARN TOGETHER. BUILD TOGETHER.</span>
          <span className="scroll-mark">SCROLL TO EXPLORE ↓</span>
        </div>
      </section>
      <section className="interest-strip" aria-label="What we explore">
        {[
          [Blocks, "Blockchain"],
          [Code2, "Web3 development"],
          [BookOpen, "Hands-on learning"],
          [Users, "Community"],
          [Lightbulb, "Ideas & innovation"],
        ].map(([Icon, label]) => {
          const I = Icon as typeof Blocks;
          return (
            <Link href="/learn" key={String(label)}>
              <I size={24} strokeWidth={1.4} />
              <span>{String(label)}</span>
            </Link>
          );
        })}
      </section>
      <section className="section about-preview">
        <div>
          <span className="eyebrow">A LITTLE ABOUT US</span>
          <h2>
            Big ideas start
            <br />
            with a connection<span className="teal">.</span>
          </h2>
        </div>
        <div>
          <p>
            We’re a student community at the University of Bristol exploring
            what blockchain can make possible.
          </p>
          <p>
            From your first question to your first smart contract, this is a
            place to learn openly, share ideas, and build alongside people who
            are just as curious as you.
          </p>
          <Link href="/about" className="text-link">
            Get to know us <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <section className="section events-home">
        <SectionTitle
          eyebrow="MAKE ROOM FOR SOMETHING NEW"
          title="Good things on the horizon."
          description="Fresh ideas, hands-on sessions, and people worth meeting."
          href="/events"
          action="View all events"
        />
        <div className="section-note">
          <span className="status-dot" /> A taste of what’s possible — all
          events below are illustrative samples.
        </div>
        <div className="event-grid">
          {events.slice(0, 3).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
      <section className="section learning-home">
        <SectionTitle
          eyebrow="YOUR NEXT RABBIT HOLE"
          title="A little curiosity goes a long way."
          description="Handpicked resources to help you go from “what’s a block?” to “I built this.”"
          href="/learn"
          action="Explore the learning hub"
        />
        <div className="resource-grid home-resources">
          {resources.slice(0, 4).map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
        <div className="learning-note">
          <BookOpen size={15} />
          <span>Start anywhere. Learn at your pace. No experience needed.</span>
        </div>
      </section>
      <section className="community-section">
        <div className="community-art">
          <div className="community-orb" />
          <Users size={58} strokeWidth={1} />
          <span className="mini-spark">✳</span>
        </div>
        <div>
          <span className="eyebrow">BETTER, TOGETHER</span>
          <h2>
            Your people.
            <br />
            Your next possibility.
          </h2>
          <p>
            Meet fellow thinkers, makers, and first-time explorers.
            <br />
            You don’t need all the answers. Just bring your curiosity.
          </p>
          <Link href="/join" className="button">
            Find your community <ArrowUpRight size={17} />
          </Link>
          <span className="social-note">
            Discord · Instagram · LinkedIn — official links coming soon
          </span>
        </div>
        <Sparkles className="community-spark" size={30} strokeWidth={1} />
      </section>
    </>
  );
}
