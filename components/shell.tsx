"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ArrowUpRight,
  Instagram,
  MessageCircle,
  Menu,
  X,
  MapPin,
} from "lucide-react";
import { socials } from "@/data/socials";
import { societyName } from "@/data/site";
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
      <Link href="/" className="brand" aria-label={`${societyName} home`}>
        <Image
          src="/logo.png"
          width={112}
          height={112}
          alt={`${societyName} official logo`}
          priority
        />
        <span>
          Bristol University
          <span>
            Blockchain Society
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
      </nav>
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
    <footer className="site-footer" id="community-footer">
      <div className="footer-main">
        <div>
          <Link className="footer-brand" href="/">
            {societyName}
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
          <span className="footer-label">OUR OFFICIAL CHANNELS</span>
          <a
            className="footer-social-link"
            href={socials.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={16} />
            <span>
              Instagram<small>{socials.instagram.handle}</small>
            </span>
            <ArrowUpRight size={13} />
          </a>
          <a
            className="footer-social-link"
            href={socials.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} />
            <span>
              WhatsApp<small>Open our community group</small>
            </span>
            <ArrowUpRight size={13} />
          </a>
        </div>
        <div className="footer-qr">
          <a
            href={socials.whatsapp.qrImage}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open official WhatsApp QR code"
          >
            <Image
              src={socials.whatsapp.qrImage}
              width={256}
              height={256}
              alt="Official Bristol Blockchain WhatsApp community QR code"
              unoptimized
            />
          </a>
          <p>Scan for our WhatsApp community</p>
          <a
            className="button whatsapp-join-button"
            href={socials.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={15} />
            Join WhatsApp group
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {societyName}</span>
        <span>A student community. A shared future.</span>
        <Link href="/admin">Admin prototype</Link>
      </div>
    </footer>
  );
}
