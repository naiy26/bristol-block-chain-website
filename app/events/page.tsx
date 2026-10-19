import { PageHeading } from "@/components/ui";
import { EventsExplorer } from "@/components/events-explorer";
export const metadata = { title: "Events" };
export default function EventsPage() {
  return (
    <>
      <PageHeading
        eyebrow="LEARN SOMETHING. MEET SOMEONE. MAKE SOMETHING."
        title="Your next connection starts here."
        description="Join fellow Bristol students at Encode London Hackathon, 23–25 October 2026. Three days to learn, collaborate, and build something together."
      />
      <EventsExplorer />
    </>
  );
}
