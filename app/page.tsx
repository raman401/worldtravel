export default function HomePage() {
  const destinations = [
    {
      name: 'Bali, Indonesia',
      description:
        'Tropical beaches, vibrant rice terraces, and relaxing wellness retreats for every kind of traveler.',
      image:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Santorini, Greece',
      description:
        'Cliffside sunsets, iconic whitewashed villages, and unforgettable Aegean Sea views.',
      image:
        'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Kyoto, Japan',
      description:
        'Ancient temples, seasonal gardens, and authentic cultural experiences in a timeless city.',
      image:
        'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-600 via-indigo-600 to-violet-600 text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="mb-4 inline-flex rounded-full bg-white/20 px-4 py-1 text-sm font-medium backdrop-blur-sm">
            World Travel Demo
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Discover your next unforgettable adventure.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-sky-100 md:text-lg">
            Explore top destinations, curated itineraries, and seamless travel planning — all in one place.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-lg bg-white px-5 py-3 font-semibold text-indigo-700 transition hover:bg-slate-100">
              Start Planning
            </button>
            <button className="rounded-lg border border-white/60 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
              View Destinations
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold md:text-3xl">Popular Destinations</h2>
          <span className="text-sm text-slate-500">Static demo cards</span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {destinations.map((destination) => (
            <article
              key={destination.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className="h-44 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${destination.image})` }}
                aria-hidden="true"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{destination.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{destination.description}</p>
                <button className="mt-4 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700">
                  Explore
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
          {[
            {
              title: 'Trusted Expertise',
              text: 'Our travel specialists help craft stress-free plans tailored to your style and budget.',
            },
            {
              title: 'Best Value Deals',
              text: 'Get competitive offers on flights, hotels, and guided experiences worldwide.',
            },
            {
              title: '24/7 Support',
              text: 'Wherever you go, our team is available around the clock for peace of mind.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold md:text-3xl">Contact Us</h2>
          <p className="mt-2 text-sm text-slate-600">
            This is a static UI form for demo purposes (no backend connected).
          </p>

          <form className="mt-6 grid gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Name
                <input
                  type="text"
                  placeholder="Jane Traveler"
                  className="rounded-lg border border-slate-300 px-4 py-2.5 outline-none ring-indigo-500 transition focus:ring-2"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Email
                <input
                  type="email"
                  placeholder="jane@example.com"
                  className="rounded-lg border border-slate-300 px-4 py-2.5 outline-none ring-indigo-500 transition focus:ring-2"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Destination of Interest
              <input
                type="text"
                placeholder="e.g. Santorini"
                className="rounded-lg border border-slate-300 px-4 py-2.5 outline-none ring-indigo-500 transition focus:ring-2"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Message
              <textarea
                rows={5}
                placeholder="Tell us what kind of trip you're planning..."
                className="resize-none rounded-lg border border-slate-300 px-4 py-2.5 outline-none ring-indigo-500 transition focus:ring-2"
              />
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex w-fit rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-100">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} World Travel. All rights reserved.</p>
          <p>Demo site built with Next.js + Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}
