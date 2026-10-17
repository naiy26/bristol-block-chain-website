import { PageHeading } from "@/components/ui";
import { LearningExplorer } from "@/components/learning-explorer";
export const metadata = { title: "Learning hub" };
export default function Learn() {
  return (
    <>
      <PageHeading
        eyebrow="FOLLOW YOUR CURIOSITY"
        title="Small steps. New possibilities."
        description="A curated starting point for understanding blockchain, writing your first contract, and becoming a more thoughtful builder."
      />
      <LearningExplorer />
    </>
  );
}
