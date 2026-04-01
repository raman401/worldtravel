export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-lime-50 via-white to-orange-50 text-slate-900">
      <header className="sticky top-0 z-10 border-b border-lime-100 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <span className="text-lg font-extrabold tracking-tight text-lime-700 sm:text-xl">Fresh Fruits Market</span>
          <nav className="flex gap-2 sm:gap-4">
            <a href="#home" className="rounded-md px-2 py-1 text-sm font-medium text-slate-600 hover:bg-lime-100 hover:text-lime-800">Home</a>
            <a href="#products" className="rounded-md px-2 py-1 text-sm font-medium text-slate-600 hover:bg-lime-100 hover:text-lime-800">Products</a>
            <a href="#about" className="rounded-md px-2 py-1 text-sm font-medium text-slate-600 hover:bg-lime-100 hover:text-lime-800">About</a>
            <a href="#contact" className="rounded-md px-2 py-1 text-sm font-medium text-slate-600 hover:bg-lime-100 hover:text-lime-800">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <p className="inline-block rounded-full bg-lime-100 px-4 py-1 text-sm font-semibold text-lime-800">Farm-fresh daily picks</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Fresh &amp; Organic Fruits Delivered to Your Doorstep
          </h1>
          <p className="mt-5 text-base text-slate-600 sm:text-lg">
            Enjoy hand-selected fruits sourced directly from trusted growers and delivered to your home.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1400&q=80"
          alt="Colorful assortment of fresh fruits"
          className="h-80 w-full rounded-3xl object-cover shadow-xl sm:h-96"
        />
      </section>

      <section id="products" className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <h2 className="text-3xl font-bold">Our Products</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article className="overflow-hidden rounded-2xl border border-lime-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <img src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=900&q=80" alt="Apple" className="h-44 w-full object-cover" />
            <div className="p-5"><h3 className="text-lg font-semibold">Apple</h3><p className="mt-3 text-base font-bold text-lime-700">$2.99 / lb</p><button type="button" className="mt-4 w-full rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-orange-600">Add to Cart</button></div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-lime-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <img src="https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=900&q=80" alt="Banana" className="h-44 w-full object-cover" />
            <div className="p-5"><h3 className="text-lg font-semibold">Banana</h3><p className="mt-3 text-base font-bold text-lime-700">$1.49 / lb</p><button type="button" className="mt-4 w-full rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-orange-600">Add to Cart</button></div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-lime-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <img src="https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=900&q=80" alt="Mango" className="h-44 w-full object-cover" />
            <div className="p-5"><h3 className="text-lg font-semibold">Mango</h3><p className="mt-3 text-base font-bold text-lime-700">$3.49 each</p><button type="button" className="mt-4 w-full rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-orange-600">Add to Cart</button></div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-lime-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <img src="https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=900&q=80" alt="Orange" className="h-44 w-full object-cover" />
            <div className="p-5"><h3 className="text-lg font-semibold">Orange</h3><p className="mt-3 text-base font-bold text-lime-700">$2.29 / lb</p><button type="button" className="mt-4 w-full rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-orange-600">Add to Cart</button></div>
          </article>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="mt-4 leading-7 text-slate-600">At Fresh Fruits Market, we deliver premium-quality fruits with unmatched freshness and flavor.</p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20">
        <div className="rounded-3xl border border-lime-100 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <form className="mt-6 grid gap-4">
            <input type="text" placeholder="Name" className="rounded-xl border border-slate-300 px-4 py-2.5" required />
            <input type="email" placeholder="Email" className="rounded-xl border border-slate-300 px-4 py-2.5" required />
            <textarea rows={5} placeholder="Message" className="resize-none rounded-xl border border-slate-300 px-4 py-2.5" required />
            <button type="submit" className="inline-flex w-fit rounded-xl bg-lime-600 px-6 py-3 text-sm font-semibold text-white hover:bg-lime-700">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-lime-100 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Fresh Fruits Market. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://x.com" target="_blank" rel="noreferrer">X</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
