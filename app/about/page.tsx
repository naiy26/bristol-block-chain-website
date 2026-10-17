import { Blocks, BookOpen, Code2, Users, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PageHeading, SectionTitle } from "@/components/ui";
import { committee } from "@/data/committee";
import { Art } from "@/components/art";
export const metadata = { title: "Our society" };
export default function About() {
  return (
    <>
      <PageHeading
        eyebrow="THE PEOPLE BEHIND THE POSSIBILITIES"
        title="A shared curiosity. An open community."
        description="Blockchain Bristol brings students together to explore blockchain technology, Web3, and what we can create with them."
      />
      <section className="section story-grid">
        <Art variant="orbits" />
        <div>
          <span className="eyebrow">OUR MISSION</span>
          <h2>
            Make the complex
            <br />
            feel possible.
          </h2>
          <p>
            We want to make blockchain education approachable, encourage
            thoughtful discussion, and give students space to experiment
            together.
          </p>
          <h3>Our vision</h3>
          <p>
            A community where students from every discipline can understand,
            question, and help shape the next generation of digital technology.
          </p>
        </div>
      </section>
      <section className="section">
        <SectionTitle
          title="Find your way in."
          description="There’s more than one way to be part of the future."
        />
        <div className="values-grid">
          {[
            [
              BookOpen,
              "Learn the foundations",
              "Get comfortable with blocks, consensus, and smart contracts through accessible learning resources.",
            ],
            [
              Code2,
              "Build with others",
              "Put ideas into practice with collaborative projects, coding sessions, and hands-on workshops.",
            ],
            [
              Users,
              "Make connections",
              "Meet students with different perspectives, interests, and skills. Find your next collaborator.",
            ],
            [
              Blocks,
              "Ask better questions",
              "Explore applications, security, and the trade-offs behind decentralised systems.",
            ],
          ].map(([Icon, title, description]) => {
            const I = Icon as typeof Blocks;
            return (
              <article className="value-card" key={String(title)}>
                <I size={27} strokeWidth={1.4} />
                <h3>{String(title)}</h3>
                <p>{String(description)}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="section" id="committee">
        <SectionTitle
          eyebrow="STUDENT LED. COMMUNITY MINDED."
          title="Meet the committee."
          description="These are placeholder roles. Committee names and profiles will be added when confirmed."
        />
        <div className="values-grid">
          {committee.map((member, index) => (
            <article className="committee-card" key={member.role}>
              <div className={`avatar avatar-${index}`}>
                <Users size={32} strokeWidth={1.2} />
              </div>
              <span className="sample-label">PROFILE COMING SOON</span>
              <h3>{member.role}</h3>
              <p>{member.focus}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="compact-cta">
        <div>
          <span className="eyebrow">COME AS YOU ARE</span>
          <h2>There’s a place for your curiosity.</h2>
        </div>
        <Link className="button" href="/join">
          Join the society <ArrowUpRight size={17} />
        </Link>
      </section>
    </>
  );
}
