const products = [
  {
    name: 'Apple',
    price: '$2.99 / lb',
    image:
      'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=900&q=80',
    description: 'Crisp, sweet, and handpicked for peak freshness.',
  },
  {
    name: 'Banana',
    price: '$1.49 / lb',
    image:
      'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=900&q=80',
    description: 'Naturally ripe bananas packed with energy and flavor.',
  },
  {
    name: 'Mango',
    price: '$3.49 each',
    image:
      'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=900&q=80',
    description: 'Juicy tropical mangoes with rich aroma and sweetness.',
  },
  {
    name: 'Orange',
    price: '$2.29 / lb',
    image:
      'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=900&q=80',
    description: 'Vitamin-rich oranges bursting with citrus freshness.',
  },
];

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#products', label: 'Products' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-lime-50 via-white to-orange-50 text-slate-900">
      <header className="sticky top-0 z-10 border-b border-lime-100 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" className="text-lg font-extrabold tracking-tight text-lime-700 sm:text-xl">
            Fresh Fruits Market
          </a>
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-2 sm:gap-4">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="rounded-md px-2 py-1 text-sm font-medium text-slate-600 transition hover:bg-lime-100 hover:text-lime-800 sm:px-3"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-lime-100 px-4 py-1 text-sm font-semibold text-lime-800">
              Farm-fresh daily picks
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
              Fresh &amp; Organic Fruits Delivered to Your Doorstep
            </h1>
            <p className="mt-5 max-w-xl text-base text-slate-600 sm:text-lg">
              Enjoy hand-selected fruits sourced directly from trusted growers, packed with care, and delivered
              straight to your home.
            </p>
            <a
              href="#products"
              className="mt-8 inline-flex rounded-xl bg-lime-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-lime-200 transition hover:-translate-y-0.5 hover:bg-lime-700"
            >
              Shop Fresh Fruits
            </a>
          </div>
          <div className="relative">
            <div className="absolute -inset-5 rounded-3xl bg-gradient-to-r from-orange-200/40 to-lime-200/60 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1400&q=80"
              alt="Colorful assortment of fresh fruits"
              className="relative h-80 w-full rounded-3xl object-cover shadow-xl sm:h-96"
            />
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-bold text-slate-900">Our Products</h2>
          <p className="text-sm text-slate-500">Fresh picks updated daily</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-2xl border border-lime-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <img src={product.image} alt={product.name} className="h-44 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{product.description}</p>
                <p className="mt-4 text-base font-bold text-lime-700">{product.price}</p>
                <button
                  type="button"
                  className="mt-4 w-full rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition group-hover:bg-orange-600"
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-3xl font-bold text-slate-900">About Us</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            At Fresh Fruits Market, we are committed to delivering premium-quality fruits with unmatched freshness.
            Every order is carefully selected, quality checked, and packed to ensure you enjoy naturally delicious,
            nutrient-rich produce every day.
          </p>
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20">
        <div className="rounded-3xl border border-lime-100 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-3xl font-bold text-slate-900">Contact Us</h2>
          <p className="mt-3 text-sm text-slate-600">Have a question? Send us a message and we&apos;ll reply soon.</p>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Name
              <input
                type="text"
                placeholder="Your name"
                className="rounded-xl border border-slate-300 px-4 py-2.5 outline-none ring-lime-500 transition focus:ring-2"
                required
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Email
              <input
                type="email"
                placeholder="you@example.com"
                className="rounded-xl border border-slate-300 px-4 py-2.5 outline-none ring-lime-500 transition focus:ring-2"
                required
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Message
              <textarea
                rows={5}
                placeholder="Write your message"
                className="resize-none rounded-xl border border-slate-300 px-4 py-2.5 outline-none ring-lime-500 transition focus:ring-2"
                required
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex w-fit rounded-xl bg-lime-600 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-lime-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-lime-100 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Fresh Fruits Market. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="transition hover:text-lime-700" href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a className="transition hover:text-lime-700" href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className="transition hover:text-lime-700" href="https://x.com" target="_blank" rel="noreferrer">
              X
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
