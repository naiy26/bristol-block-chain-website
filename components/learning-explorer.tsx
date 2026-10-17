"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { resourceCategories } from "@/lib/types";
import { resources } from "@/data/resources";
import { ResourceCard } from "./ui";
export function LearningExplorer() {
  const [category, setCategory] = useState("All resources");
  const [query, setQuery] = useState("");
  const filtered = resources.filter(
    (r) =>
      (category === "All resources" || r.category === category) &&
      `${r.name} ${r.description} ${r.category}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <section className="section page-section">
      <div className="learn-intro">
        <p>Start with the fundamentals, or jump into something new.</p>
        <label className="search-box">
          <Search size={17} />
          <input
            aria-label="Search learning resources"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find your next rabbit hole…"
          />
        </label>
      </div>
      <div className="category-filters" aria-label="Resource categories">
        {["All resources", ...resourceCategories].map((c) => (
          <button
            key={c}
            aria-pressed={category === c}
            className={category === c ? "active" : ""}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="results-count" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "resource" : "resources"} to
        explore
      </p>
      <div className="resource-grid learn-grid">
        {filtered.map((r) => (
          <ResourceCard resource={r} key={r.id} />
        ))}
      </div>
      {!filtered.length && (
        <div className="empty-state">
          <Search />
          <h3>No resources found.</h3>
          <p>Try a different search or category.</p>
          <button
            className="text-link"
            onClick={() => {
              setQuery("");
              setCategory("All resources");
            }}
          >
            Reset filters
          </button>
        </div>
      )}
      <p className="resource-disclaimer">
        Resources open on external websites. Content and availability are
        managed by their respective providers.
      </p>
    </section>
  );
}
