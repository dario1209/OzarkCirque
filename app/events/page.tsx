import type { Metadata } from "next";
import Frame from "@/components/Frame";
import Reveal from "@/components/Reveal";
import events from "@/content/events.json";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming performances and workshops from Ozark Cirque.",
};

function fmt(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function Events() {
  const now = new Date();
  const upcoming = events
    .filter((e) => new Date(e.date) >= now)
    .sort((a, b) => +new Date(a.date) - +new Date(b.date));
  const past = events
    .filter((e) => new Date(e.date) < now)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  const byYear = past.reduce<Record<string, typeof past>>((acc, e) => {
    const y = String(new Date(e.date).getFullYear());
    (acc[y] ||= []).push(e);
    return acc;
  }, {});

  return (
    <div className="bg-ink text-cream">
      <section className="mx-auto max-w-6xl px-6 pb-32 pt-40">
        <Reveal>
          <p className="eyebrow text-plum">Events</p>
          <h1 className="display mt-4 text-[clamp(2.5rem,6vw,4.5rem)]">
            Upcoming
          </h1>
        </Reveal>

        <div className="mt-20 grid gap-10 md:grid-cols-2">
          {upcoming.map((e) => (
            <Reveal key={e.slug} as="article">
              <Frame alt={e.imageAlt} aspect="aspect-[16/10]" />
              <p className="eyebrow mt-5 text-gold">{e.tag}</p>
              <h2 className="display mt-2 text-3xl">{e.title}</h2>
              <p className="mt-2 text-cream/70">
                {fmt(e.date)} · {e.venue}
              </p>
            </Reveal>
          ))}
          {upcoming.length === 0 && (
            <p className="text-cream/60">
              Nothing on the calendar right now. Check back soon.
            </p>
          )}
        </div>
      </section>

      <section className="border-t border-cream/10">
        <div className="mx-auto max-w-6xl px-6 py-32">
          <Reveal>
            <h2 className="display text-4xl">Past</h2>
          </Reveal>
          {Object.entries(byYear)
            .sort(([a], [b]) => +b - +a)
            .map(([year, list]) => (
              <div key={year} className="mt-16">
                <p className="eyebrow text-gray">{year}</p>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                  {list.map((e) => (
                    <Reveal key={e.slug} as="article">
                      <Frame alt={e.imageAlt} aspect="aspect-square" />
                      <h3 className="mt-3 font-serif text-xl">{e.title}</h3>
                      <p className="text-sm text-cream/50">
                        {fmt(e.date)} · {e.venue}
                      </p>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            upcoming.map((e) => ({
              "@context": "https://schema.org",
              "@type": "Event",
              name: e.title,
              startDate: e.date,
              location: { "@type": "Place", name: e.venue },
              organizer: { "@type": "Organization", name: "Ozark Cirque, LLC" },
            }))
          ),
        }}
      />
    </div>
  );
}
