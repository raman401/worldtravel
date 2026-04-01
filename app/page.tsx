import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/lib/data";

export default function HomePage() {
  return (
    <main>
      <h1>Explore the world</h1>
      <p className="lead">
        Curated destinations with rough daily budgets (USD). Swap static data for an API when you are ready.
      </p>

      <div className="grid grid--2">
        {destinations.map((d) => (
          <article key={d.id} className="card">
            <div className="card__image-wrap">
              <Image
                src={d.image}
                alt={`${d.name} in ${d.region}`}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="card__image"
              />
              <div className="card__image-overlay" />
            </div>
            <div className="card__body">
              <p className="card__meta">{d.region}</p>
              <h2 className="card__title">{d.name}</h2>
              <p className="card__tagline">{d.tagline}</p>
              <span className="budget-pill">
                ~${d.budgetPerDayUsd.min}–${d.budgetPerDayUsd.max} / day
              </span>
              <ul className="card__highlights">
                {d.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="cta-row">
        <Link href="/form" className="btn btn--primary">
          Plan your trip budget
        </Link>
        <span style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
          Estimates only — adjust for season and style.
        </span>
      </div>
    </main>
  );
}
