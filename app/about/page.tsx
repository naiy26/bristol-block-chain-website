import { Blocks, BookOpen, Code2, Users } from "lucide-react";
import { PageHeading, SectionTitle } from "@/components/ui";
import Image from "next/image";
import { universityPhoto } from "@/data/media";
import { societyName } from "@/data/site";
export const metadata = { title: "Our society" };
export default function About() {
  return (
    <>
      <PageHeading
        eyebrow="THE PEOPLE BEHIND THE POSSIBILITIES"
        title="A shared curiosity. An open community."
        description={`${societyName} brings students together to explore blockchain technology, Web3, and what we can create with them.`}
      />
      <section className="section story-grid">
        <Image
          src={universityPhoto.src}
          width={universityPhoto.width}
          height={universityPhoto.height}
          alt={universityPhoto.alt}
          sizes="(max-width: 640px) 90vw, (max-width: 1120px) 45vw, 500px"
          className="society-photo"
        />
        <div>
          <span className="eyebrow">OUR SOCIETY</span>
          <h2>
            From Bristol.
            <br />
            Building together.
          </h2>
          <p>
            We’re a student society at the University of Bristol. We regularly
            organise groups of students to take part in hackathons, work on
            projects together, and learn about blockchain as a community.
          </p>
          <h3>Learn. Build. Take part.</h3>
          <p>
            From sharing blockchain knowledge to turning ideas into working
            projects, we learn by doing and support each other along the way.
            Hackathons give us a chance to put those skills into practice
            together.
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
    </>
  );
}
