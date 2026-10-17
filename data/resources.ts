import type { Resource } from "@/lib/types";
export const resources: Resource[] = [
  {
    id: "ethereum",
    name: "Ethereum Learn",
    description:
      "Understand the foundations of Ethereum, from blocks and accounts to smart contracts.",
    difficulty: "Beginner",
    category: "Blockchain Fundamentals",
    url: "https://ethereum.org/learn/",
    mark: "◈",
    color: "lilac",
  },
  {
    id: "zombies",
    name: "CryptoZombies",
    description:
      "Learn Solidity step by step through interactive, game-based coding lessons.",
    difficulty: "Beginner",
    category: "Solidity Development",
    url: "https://cryptozombies.io/",
    mark: "{ }",
    color: "mint",
  },
  {
    id: "speedrun",
    name: "Speed Run Ethereum",
    description:
      "Learn by building. Work through practical challenges and create your first dApps.",
    difficulty: "Intermediate",
    category: "Web3 Development",
    url: "https://speedrunethereum.com/",
    mark: "↗",
    color: "peach",
  },
  {
    id: "solidity",
    name: "Solidity Documentation",
    description:
      "Go deeper into the language, compiler, and concepts behind Ethereum smart contracts.",
    difficulty: "Intermediate",
    category: "Ethereum and Smart Contracts",
    url: "https://docs.soliditylang.org/",
    mark: "⌘",
    color: "blue",
  },
  {
    id: "cyfrin",
    name: "Cyfrin Updraft",
    description:
      "Explore courses in smart contract development, security, and auditing.",
    difficulty: "Advanced",
    category: "Blockchain Security",
    url: "https://updraft.cyfrin.io/",
    mark: "↑",
    color: "lilac",
  },
  {
    id: "defi",
    name: "Understanding DeFi",
    description:
      "Explore decentralised finance, its applications, and the risks to understand first.",
    difficulty: "Beginner",
    category: "DeFi",
    url: "https://ethereum.org/en/defi/",
    mark: "◎",
    color: "mint",
  },
];
