"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X, MapPin } from "lucide-react";
const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/events", "Events"],
  ["/learn", "Learn"],
];
export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Blockchain Bristol home">
        <Image
          src="/logo.png"
          width={112}
          height={112}
          alt="Bristol Blockchain official logo"
          priority
        />
        <span>
          Blockchain
          <span>
            Bristol<span className="brand-dot">.</span>
          </span>
        </span>
      </Link>
      <nav
        aria-label="Main navigation"
        className={open ? "main-nav is-open" : "main-nav"}
      >
        {links.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            aria-current={path === href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/join"
          className="button mobile-join"
          onClick={() => setOpen(false)}
        >
          Join the society <ArrowUpRight size={16} />
        </Link>
      </nav>
      <Link href="/join" className="button header-join">
        Join the society <ArrowUpRight size={16} />
      </Link>
      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <Link className="footer-brand" href="/">
            Blockchain Bristol<span>.</span>
          </Link>
          <p>
            Curiosity connects us.
            <br />
            Let’s build what comes next.
          </p>
          <span className="location">
            <MapPin size={13} /> University of Bristol, UK
          </span>
        </div>
        <div>
          <span className="footer-label">EXPLORE</span>
          <Link href="/about">Our society</Link>
          <Link href="/events">Events</Link>
          <Link href="/learn">Learning resources</Link>
        </div>
        <div>
          <span className="footer-label">GET INVOLVED</span>
          <Link href="/join">Become a member</Link>
          <Link href="/about#committee">Meet the committee</Link>
          <Link href="/admin">Admin prototype</Link>
        </div>
        <div className="footer-note">
          <span className="tiny-orbit">✳</span>
          <p>
            For the curious.
            <br />
            For the builders.
            <br />
            For everyone.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Blockchain Bristol</span>
        <span>A student community. A shared future.</span>
        <Link href="/join#privacy">Privacy & membership</Link>
      </div>
    </footer>
  );
}
