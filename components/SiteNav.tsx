import Link from "next/link";

export function SiteNav() {
  return (
    <header className="nav">
      <Link href="/" className="nav__brand">
        WorldTravel
      </Link>
      <nav className="nav__links" aria-label="Main">
        <Link href="/">Destinations</Link>
        <Link href="/form">Trip budget</Link>
      </nav>
    </header>
  );
}
