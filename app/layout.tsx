import type { Metadata } from "next";
import { Header, Footer } from "@/components/shell";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Blockchain Bristol — Build what comes next",
    template: "%s | Blockchain Bristol",
  },
  description:
    "A student community at the University of Bristol exploring blockchain, Web3, and the ideas shaping our future. Learn, build, and connect.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div className="site-wrap">
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
