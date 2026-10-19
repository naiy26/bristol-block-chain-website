import type { SocietyEvent } from "@/lib/types";

// Event details transcribed from the poster supplied by the society.
export const events: SocietyEvent[] = [
  {
    id: "encode-london-2026",
    title: "Encode London Hackathon 2026",
    date: "2026-10-23",
    endDate: "2026-10-25",
    dateLabel: "23–25 October 2026",
    time: "Daily schedule to be confirmed",
    location: "Encode Hub · Shoreditch, London",
    description:
      "Join fellow Bristol students for three days of building, learning, and connecting in London. The hackathon brings together developers, founders, builders, and students for challenges, mentorship, workshops, and project demos.",
    category: "Hackathon",
    status: "upcoming",
    art: "blocks",
    poster: "/events/encode-london-2026.jpg",
    interestForm: {
      url: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=MH_ksn3NTkql2rGM8aQVG_GEEcQ03MBFkXbD-Dlt52dURENVTktKM0Q0OEk1MTFJV0o4ODlONU1aRy4u&origin=QRCode",
      qrImage: "/events/encode-london-interest-qr.svg",
    },
    posterAlt:
      "Encode London Hackathon 2026 poster: 23–25 October 2026 at Encode Hub, Shoreditch, London. Three days of challenges, mentorship, workshops, and project demos.",
  },
];
