import Link from "next/link";
import Frame from "@/components/Frame";
import Reveal from "@/components/Reveal";
import events from "@/content/events.json";

export default function Home() {
  const next = events
    .filter((e) => new Date(e.date) >= new Date())
    .sort((a, b) => +new Date(a.date) - +new Date(b.date))[0];

  return (
    <div className="bg-ink text-cream">
      {/* Hero */}
      <section className="relative flex min-h-screen items-end">
        <Frame
          alt="Brittany Paul suspended on aerial silks, mid-inversion, stage light from above"
          aspect=""
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-24">
          <p className="eyebrow text-gray">Performing artist · aerial educator</p>
          <h1 className="display mt-4 text-[clamp(3rem,8vw,7rem)]">
            Brittany Paul
          </h1>
          <p className="mt-4 max-w-md text-cream/70">
            Aerial performance and the <i className="font-serif">art</i> of
            suspension, from Northwest Arkansas.
          </p>
        </div>
      </section>

      {/* Entertain teaser */}
      <section className="mx-auto max-w-6xl px-6 py-32 md:py-44">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <Frame
              alt="Aerial hoop performance at an evening event, performer arched in a back balance"
              tone="dark"
            />
          </Reveal>
          <Reveal>
            <p className="eyebrow text-plum">Entertain</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">
              Performance, solo or with a cast.
            </h2>
            <Link
              href="/entertain"
              className="eyebrow mt-8 inline-block text-cream/60 hover:text-plum"
            >
              See the work →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Teaching teaser */}
      <section className="mx-auto max-w-6xl px-6 pb-32 md:pb-44">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal className="md:order-2">
            <Frame
              alt="Students on low silks in a studio, daylight, Brittany spotting"
              tone="dark"
              aspect="aspect-[4/3]"
            />
          </Reveal>
          <Reveal className="md:order-1 md:justify-self-end md:text-right">
            <p className="eyebrow text-plum">Teaching</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">
              Movement as a practice, not a trick.
            </h2>
            <Link
              href="/teaching"
              className="eyebrow mt-8 inline-block text-cream/60 hover:text-plum"
            >
              Study with me →
            </Link>
          </Reveal>
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
