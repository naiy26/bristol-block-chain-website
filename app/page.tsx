import Link from "next/link";
import Image from "next/image";
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
import { socials } from "@/data/socials";
import { societyName } from "@/data/site";
export default function Home() {
  return (
    <>
      <section className="hero hero-bridge">
        <Image
          src="/images/bristol-bridge-line-art.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-bridge-background"
          aria-hidden="true"
        />
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
            Find your people at {societyName}.
          </p>
          <div className="hero-actions">
            <Link href="/events" className="button">
              Explore events <ArrowUpRight size={17} />
            </Link>
            <Link href="/learn" className="button button-white">
              Start learning <ArrowRight size={16} />
            </Link>
          </div>
          <div className="hero-footnote">
            <Check size={13} /> Any course. Any experience level. Everyone
            welcome.
          </div>
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
            We regularly organise students to take part in hackathons, build
            projects together, and share blockchain knowledge. Learn alongside
            people who are just as curious as you.
          </p>
          <Link href="/about" className="text-link">
            Get to know us <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <section className="section past-moments" aria-labelledby="past-moments-title">
        <div className="past-moments-heading">
          <div>
            <span className="eyebrow">FROM OUR PAST EVENTS</span>
            <h2 id="past-moments-title">Moments together.</h2>
          </div>
          <p>A few snapshots from our past gatherings.</p>
        </div>
        <div className="past-moments-grid">
          <figure className="past-moment-card">
            <Image
              src="/images/past-events/community-pizza-closeup.jpg"
              alt="People sharing pizza at a community gathering"
              fill
              sizes="(max-width: 640px) 100vw, 60vw"
            />
          </figure>
          <figure className="past-moment-card">
            <Image
              src="/images/past-events/community-conversation.jpg"
              alt="People talking around a table at a past gathering"
              fill
              sizes="(max-width: 640px) 100vw, 40vw"
            />
          </figure>
        </div>
      </section>
      <section className="community-section">
        <div className="community-art community-brand">
          <Image
            src="/logo.png"
            width={640}
            height={640}
            alt="Bristol Blockchain official society logo"
            className="community-logo"
            sizes="(max-width: 640px) 260px, 320px"
          />
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
          <a
            href={socials.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Follow us on Instagram <ArrowUpRight size={17} />
          </a>
          <div className="social-note">
            <a
              href={socials.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Find us on WhatsApp <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <Sparkles className="community-spark" size={30} strokeWidth={1} />
      </section>
    </>
  );
}
