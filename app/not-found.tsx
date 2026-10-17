import Link from "next/link";
import { PageHeading } from "@/components/ui";
export default function NotFound() {
  return (
    <section className="not-found">
      <PageHeading
        eyebrow="404 · A SMALL DETOUR"
        title="This block hasn’t been built yet."
        description="Let’s get you back to somewhere familiar."
      />
      <Link href="/" className="button">
        Back to home →
      </Link>
    </section>
  );
}
