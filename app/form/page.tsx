"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { destinations } from "@/lib/data";

export default function FormPage() {
  const [destinationId, setDestinationId] = useState(destinations[0]?.id ?? "");
  const [nights, setNights] = useState("7");
  const [dailyBudget, setDailyBudget] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const selected = useMemo(
    () => destinations.find((d) => d.id === destinationId),
    [destinationId]
  );

  const suggestedDaily = selected
    ? Math.round((selected.budgetPerDayUsd.min + selected.budgetPerDayUsd.max) / 2)
    : null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const nightsNum = Math.max(0, parseInt(nights, 10) || 0);
  const daily = parseFloat(dailyBudget);
  const total =
    !Number.isNaN(daily) && nightsNum > 0 ? Math.round(daily * nightsNum) : null;

  return (
    <main className="form-page">
      <h1>Trip budget planner</h1>
      <p className="lead">
        Pick a destination, set nights and a daily budget. This page is static: nothing is sent to a server yet.
      </p>

      {submitted && (
        <p className="message message--ok" role="status">
          Saved locally for this session. Wire this form to your API or database when you are ready.
        </p>
      )}

      {selected && !submitted && suggestedDaily != null && (
        <p className="message message--hint">
          Typical mid-range daily spend in {selected.name}: around ${suggestedDaily} USD (from static data).
        </p>
      )}

      <form className="form" onSubmit={handleSubmit}>
        <label>
          Destination
          <select
            value={destinationId}
            onChange={(e) => setDestinationId(e.target.value)}
            required
            aria-label="Destination"
          >
            {destinations.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name} ({d.region})
              </option>
            ))}
          </select>
        </label>

        <label>
          Nights
          <input
            type="number"
            min={1}
            max={365}
            value={nights}
            onChange={(e) => setNights(e.target.value)}
            required
          />
        </label>

        <label>
          Your daily budget (USD)
          <input
            type="number"
            min={0}
            step="1"
            placeholder={suggestedDaily != null ? String(suggestedDaily) : "120"}
            value={dailyBudget}
            onChange={(e) => setDailyBudget(e.target.value)}
            required
          />
        </label>

        {total != null && (
          <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "0.95rem" }}>
            Estimated trip total (lodging + food + local transport style):{" "}
            <strong style={{ color: "var(--accent)" }}>${total.toLocaleString()}</strong>{" "}
            for {nightsNum} night{nightsNum === 1 ? "" : "s"}.
          </p>
        )}

        <label>
          Email (optional)
          <input
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Notes
          <textarea
            placeholder="Season, travel style, must-sees…"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </label>

        <div className="form__actions">
          <button type="submit" className="btn btn--primary">
            Submit plan
          </button>
          <Link href="/" className="btn btn--ghost">
            Back to destinations
          </Link>
        </div>
      </form>
    </main>
  );
}
