import type { SocietyEvent } from "@/lib/types";
export const events: SocietyEvent[] = [
  {
    id: "intro",
    title: "Your first block: an intro to Web3",
    date: "2026-11-05",
    time: "18:00–19:30 GMT",
    location: "University of Bristol · Room TBC",
    description:
      "Start with the basics. Explore how blockchains work, why they matter, and where your curiosity could take you.",
    category: "Workshop",
    status: "upcoming",
    art: "blocks",
  },
  {
    id: "contracts",
    title: "From idea to smart contract",
    date: "2026-11-12",
    time: "18:00–20:00 GMT",
    location: "University of Bristol · Room TBC",
    description:
      "A hands-on introduction to Solidity. Bring a laptop and build a small contract with fellow learners.",
    category: "Workshop",
    status: "upcoming",
    art: "code",
  },
  {
    id: "social",
    title: "Meet your next collaborators",
    date: "2026-11-19",
    time: "17:30–19:00 GMT",
    location: "Bristol · Venue TBC",
    description:
      "An informal evening for new faces, shared ideas, and conversations beyond the lecture theatre.",
    category: "Social",
    status: "upcoming",
    art: "orbits",
  },
  {
    id: "defi",
    title: "A closer look at DeFi",
    date: "2026-11-26",
    time: "18:00–19:30 GMT",
    location: "Online · Details TBC",
    description:
      "Discuss the mechanics, trade-offs, and risks of decentralised financial systems.",
    category: "Talk",
    status: "upcoming",
    art: "rings",
  },
  {
    id: "build",
    title: "The weekend build lab",
    date: "2026-12-05",
    time: "10:00–17:00 GMT",
    location: "University of Bristol · Room TBC",
    description:
      "Team up, test an idea, and share a working prototype. All experience levels are welcome.",
    category: "Hackathon",
    status: "upcoming",
    art: "blocks",
  },
  {
    id: "welcome",
    title: "An introduction to the community",
    date: "2026-10-08",
    time: "18:00–19:00 BST",
    location: "Bristol · Sample venue",
    description:
      "An illustrative welcome session exploring the society and the ideas we could build together.",
    category: "Social",
    status: "past",
    art: "orbits",
  },
];
