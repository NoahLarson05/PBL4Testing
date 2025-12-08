// app/page.tsx

import Link from "next/link";

type Club = {
  id: number;
  name: string;
  category: string;
  description: string;
  tags?: string[];
};

type Event = {
  id: number;
  title: string;
  clubName: string;
  date: string;
  time: string;
  location: string;
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8 space-y-10">
        <HeroSearch />

        <Section
          title="Upcoming Events"
          linkText="View all events"
          linkHref="#"
        >
          <div className="grid gap-4 md:grid-cols-3">
          </div>
        </Section>

        <Section title="Discover Clubs" linkText="View all clubs" linkHref="#">
          <div className="grid gap-4 md:grid-cols-3">
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold">
            CC
          </span>
          <span className="font-semibold text-slate-900">
            ClubConnect
          </span>
        </div>
        <nav className="flex items-center gap-4 text-sm text-slate-600">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>
          <Link href="#" className="hover:text-slate-900">
            Clubs
          </Link>
          <Link href="#" className="hover:text-slate-900">
            Events
          </Link>
          <Link
            href="/login"
            className="px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-medium hover:bg-slate-800"
          >
            Log in
          </Link>
        </nav>
      </div>
    </header>
  );
}

function HeroSearch() {
  return (
    <section className="bg-white rounded-2xl shadow-sm border p-6 md:p-8 space-y-4">
      <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">
        Find your circle at Ritsumeikan
      </h1>
      <p className="text-sm md:text-base text-slate-600">
        Browse clubs, circles, and events across campus in one place.
      </p>
      <div className="flex flex-col md:flex-row gap-3">
        <input
          type="text"
          placeholder="Search by club, circle, or event name..."
          className="flex-1 rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/20"
        />
        <select className="md:w-48 rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/20">
          <option value="">All categories</option>
          <option value="sports">Sports</option>
          <option value="culture">Culture</option>
          <option value="academic">Academic</option>
          <option value="volunteer">Volunteer</option>
        </select>
        <button className="md:w-28 rounded-xl bg-slate-900 text-white text-sm font-medium px-4 py-2 hover:bg-slate-800">
          Search
        </button>
      </div>
    </section>
  );
}

function Section(props: {
  title: string;
  linkText?: string;
  linkHref?: string;
  children: React.ReactNode;
}) {
  const { title, linkText, linkHref = "#", children } = props;
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        {linkText && (
          <a
            href={linkHref}
            className="text-xs text-slate-600 hover:text-slate-900"
          >
            {linkText} →
          </a>
        )}
      </div>
      {children}
    </section>
  );
}

function EventCard({ event }: { event: Event }) {
  return (
    <article className="bg-white rounded-xl border shadow-sm p-4 space-y-2 text-sm">
      <h3 className="font-semibold text-slate-900">{event.title}</h3>
      <p className="text-slate-600 text-xs">{event.clubName}</p>
      <p className="text-slate-700 text-xs">
        {event.date} ・ {event.time}
      </p>
      <p className="text-slate-600 text-xs">{event.location}</p>
      <button className="mt-2 text-xs font-medium text-slate-900 hover:underline">
        View details
      </button>
    </article>
  );
}

function ClubCard({ club }: { club: Club }) {
  return (
    <article className="bg-white rounded-xl border shadow-sm p-4 space-y-2 text-sm">
      <h3 className="font-semibold text-slate-900">{club.name}</h3>
      <p className="text-xs text-slate-500">{club.category}</p>
      <p className="text-xs text-slate-700 line-clamp-3">
        {club.description}
      </p>
      {club.tags && (
        <div className="flex flex-wrap gap-1 mt-2">
          {club.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-1 rounded-full bg-slate-100 text-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <button className="mt-2 text-xs font-medium text-slate-900 hover:underline">
        View club
      </button>
    </article>
  );
}

function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="max-w-5xl mx-auto px-4 py-4 text-xs text-slate-500 flex justify-between">
        <span>© 2025 ClubConnect (Prototype)</span>
        <span>Made for Ritsumeikan PBL</span>
      </div>
    </footer>
  );
}