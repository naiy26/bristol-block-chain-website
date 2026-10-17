import { PageHeading } from "@/components/ui";
import { EventsExplorer } from "@/components/events-explorer";
export const metadata = { title: "Events" };
export default function EventsPage() {
  return (
    <>
      <PageHeading
        eyebrow="LEARN SOMETHING. MEET SOMEONE. MAKE SOMETHING."
        title="Your next connection starts here."
        description="Workshops, conversations, and shared ideas. Discover ways to explore blockchain with the community."
      />
      <EventsExplorer />
    </>
  );
}
