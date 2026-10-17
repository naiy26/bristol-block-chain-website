"use client";
import { useState } from "react";
import { ArrowUpRight, Check, BookOpen, Users, Code2 } from "lucide-react";
import type { MembershipInput } from "@/lib/types";
import { DemoNotice } from "./ui";
const interests = [
  "Blockchain fundamentals",
  "Smart contracts",
  "DeFi",
  "Web3 development",
  "Security",
  "Community & events",
];
export function JoinForm() {
  const [result, setResult] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [interestError, setInterestError] = useState(false);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!selected.length) {
      setInterestError(true);
      return;
    }
    const form = new FormData(e.currentTarget);
    const membership: MembershipInput = {
      fullName: String(form.get("fullName")).trim(),
      email: String(form.get("email")).trim(),
      university: String(form.get("university")).trim(),
      course: String(form.get("course")).trim(),
      year: String(form.get("year")),
      experience: String(form.get("experience")),
      interests: selected,
      acknowledgement: form.get("acknowledgement") === "on",
    };
    if (
      [membership.fullName, membership.university, membership.course].some(
        (value) => !value,
      )
    ) {
      e.currentTarget.reportValidity();
      return;
    }
    setResult(true);
  }
  return (
    <section className="section join-layout">
      <aside>
        <span className="eyebrow">A COMMUNITY TO GROW WITH</span>
        <h2>
          Bring your questions.
          <br />
          Find your people.
        </h2>
        <p>
          You don’t need a computer science degree or a crypto wallet. An open
          mind is a great place to start.
        </p>
        {[
          [BookOpen, "Learn at your own pace"],
          [Code2, "Turn ideas into experiments"],
          [Users, "Connect across disciplines"],
        ].map(([Icon, label]) => {
          const I = Icon as typeof Users;
          return (
            <div className="join-benefit" key={String(label)}>
              <I size={20} />
              {String(label)}
            </div>
          );
        })}
        <div id="privacy" className="privacy-card">
          <h3>Your privacy matters.</h3>
          <p>
            This demo does not send, save, or store your form entries. There is
            no membership database connected. A full privacy notice and
            membership process will be available before registration launches.
          </p>
        </div>
      </aside>
      <div className="form-card">
        <DemoNotice>
          Membership form demo · Registration is not yet available.
        </DemoNotice>
        <h3>A little about you</h3>
        <p>
          Explore the form below. Submitting only validates your details in this
          browser.
        </p>
        <form onSubmit={submit}>
          <div className="form-grid">
            <label>
              Full name <span>*</span>
              <input
                name="fullName"
                autoComplete="name"
                required
                minLength={2}
                pattern=".*\S.*"
                placeholder="Your full name"
              />
            </label>
            <label>
              Email address <span>*</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
              />
            </label>
            <label>
              University <span>*</span>
              <input
                name="university"
                autoComplete="organization"
                defaultValue="University of Bristol"
                required
                pattern=".*\S.*"
              />
            </label>
            <label>
              Degree / Course <span>*</span>
              <input
                name="course"
                required
                pattern=".*\S.*"
                placeholder="e.g. Computer Science"
              />
            </label>
            <label>
              Year of study <span>*</span>
              <select name="year" required defaultValue="">
                <option value="" disabled>
                  Select your year
                </option>
                {[
                  "Foundation",
                  "Year 1",
                  "Year 2",
                  "Year 3",
                  "Year 4+",
                  "Postgraduate",
                  "Other",
                ].map((y) => (
                  <option key={y}>{y}</option>
                ))}
              </select>
            </label>
            <label>
              Blockchain experience <span>*</span>
              <select name="experience" required defaultValue="">
                <option value="" disabled>
                  Select your level
                </option>
                {["Just curious", "Beginner", "Intermediate", "Advanced"].map(
                  (y) => (
                    <option key={y}>{y}</option>
                  ),
                )}
              </select>
            </label>
          </div>
          <fieldset>
            <legend>
              What sparks your interest? <span>*</span>
            </legend>
            <p className="field-help">Choose one or more.</p>
            <div className="interest-options">
              {interests.map((interest) => (
                <label key={interest}>
                  <input
                    type="checkbox"
                    checked={selected.includes(interest)}
                    onChange={(e) => {
                      setSelected(
                        e.target.checked
                          ? [...selected, interest]
                          : selected.filter((i) => i !== interest),
                      );
                      setInterestError(false);
                    }}
                  />
                  {interest}
                </label>
              ))}
            </div>
            {interestError && (
              <p role="alert" className="field-error">
                Choose at least one area of interest.
              </p>
            )}
          </fieldset>
          <label className="acknowledgement">
            <input name="acknowledgement" type="checkbox" required />
            <span>
              I understand this is a demo, my details will not be saved, and
              this does not register me as a member.{" "}
              <a href="#privacy">Read privacy notice</a>.
            </span>
          </label>
          <button className="button" type="submit">
            Preview registration <ArrowUpRight size={17} />
          </button>
          <span className="form-footnote">
            All marked fields are required. Nothing is submitted to a server.
          </span>
          {result && (
            <div role="status" className="success-message">
              <Check size={20} />
              <div>
                <strong>Your demo form is valid.</strong>
                <p>
                  You have not been registered and your details have not been
                  saved. Registration will become available after the database
                  is connected.
                </p>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
