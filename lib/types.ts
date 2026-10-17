export type EventCategory = "Workshop" | "Talk" | "Social" | "Hackathon";
export interface SocietyEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: EventCategory;
  status: "upcoming" | "past";
  art: string;
}
export const resourceCategories = [
  "Blockchain Fundamentals",
  "Ethereum and Smart Contracts",
  "Solidity Development",
  "DeFi",
  "Web3 Development",
  "Blockchain Security",
] as const;
export interface Resource {
  id: string;
  name: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  category: (typeof resourceCategories)[number];
  url: string;
  mark: string;
  color: string;
}
export interface MembershipInput {
  fullName: string;
  email: string;
  university: string;
  course: string;
  year: string;
  experience: string;
  interests: string[];
  acknowledgement: boolean;
}
