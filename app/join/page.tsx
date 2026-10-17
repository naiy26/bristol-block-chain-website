import { PageHeading } from "@/components/ui";
import { JoinForm } from "@/components/join-form";
export const metadata = { title: "Join the society" };
export default function Join() {
  return (
    <>
      <PageHeading
        eyebrow="YOUR CURIOSITY BELONGS HERE"
        title="Let’s build what comes next."
        description="From first-year explorers to experienced builders, there’s room for you at Blockchain Bristol."
      />
      <JoinForm />
    </>
  );
}
