import Link from "next/link";

import Reveal from "@/components/Reveal";
import events from "@/content/events.json";

export default function Home() {
  const next = events
    .filter((e) => new Date(e.date) >= new Date())
    .sort((a, b) => +new Date(a.date) - +new Date(b.date))[0];

  return (
    <div className="bg-ink text-cream">
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/background-brand-dark.jpg"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src="/images/newhero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-24">
          <p className="eyebrow text-gray">Aerial arts · Northwest Arkansas</p>
          <h1 className="display mt-4 text-[clamp(3rem,8vw,7rem)]">
            Ozark Cirque
          </h1>
          <p className="mt-4 max-w-md text-cream/70">
            Performance, teaching, and writing from Brittany Paul.
          </p>
        </div>
      </section>

      {/* Writing + next event */}
      <section className="border-t border-cream/10">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-32 md:grid-cols-2 md:py-44">
          <Reveal>
            <p className="eyebrow text-plum">Writing</p>
            <h2 className="display mt-4 text-3xl md:text-4xl">
              Circus studies, history, and the practice of co-learning.
            </h2>
            <Link
              href="/writing"
              className="eyebrow mt-8 inline-block text-cream/60 hover:text-plum"
            >
              Read →
            </Link>
          </Reveal>
          {next && (
            <Reveal>
              <p className="eyebrow text-gold">Next up</p>
              <h2 className="display mt-4 text-3xl md:text-4xl">{next.title}</h2>
              <p className="mt-3 text-cream/70">
                {new Date(next.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}{" "}
                · {next.venue}
              </p>
              <Link
                href="/events"
                className="eyebrow mt-8 inline-block text-cream/60 hover:text-plum"
              >
                All events →
              </Link>
            </Reveal>
          )}
        </div>
      </section>
    </div>
  );
}