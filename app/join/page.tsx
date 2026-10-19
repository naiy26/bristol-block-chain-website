import { redirect } from "next/navigation";
export const metadata = { title: "Our society", robots: { index: false } };
export default function Join() {
  redirect("/about");
}
