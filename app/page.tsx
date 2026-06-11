import Link from "next/link";
import Image from "next/image";
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
      <section className="relative flex min-h-[85vh] items-end">
        <Image
          src="/images/hero.jpg"
          alt="Aerialist balancing atop silks above a festival stage at night, band and crowd below"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
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

      {/* The work — mosaic grid */}
      <section className="mx-auto max-w-6xl px-6 py-32 md:py-44">
        <Reveal>
          <p className="eyebrow text-plum">The work</p>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[220px] md:gap-5">
          {/* Entertain — tall */}
          <Reveal className="col-span-2 md:row-span-2">
            <Link href="/entertain" className="group block h-full">
              <div className="relative h-full min-h-[280px] overflow-hidden">
                <Frame
                  alt="Aerial silks performance under stage light"
                  aspect=""
                  className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="eyebrow text-gray">Entertain</p>
                  <p className="display mt-1 text-2xl text-cream">
                    Performance, solo or with a cast
                  </p>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Teaching — wide */}
          <Reveal className="col-span-2 md:row-span-1">
            <Link href="/teaching" className="group block h-full">
              <div className="relative h-full min-h-[180px] overflow-hidden">
                <Frame
                  alt="Students on low silks in a daylight studio"
                  aspect=""
                  className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="eyebrow text-gray">Teaching</p>
                  <p className="display mt-1 text-2xl text-cream">
                    Movement as a practice
                  </p>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Events — square */}
          <Reveal className="col-span-1 md:row-span-1">
            <Link href="/events" className="group block h-full">
              <div className="relative h-full min-h-[160px] overflow-hidden">
                <Frame
                  alt="Outdoor aerial rig at dusk"
                  aspect=""
                  className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="eyebrow text-gray">Events</p>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* About — square */}
          <Reveal className="col-span-1 md:row-span-1">
            <Link href="/about" className="group block h-full">
              <div className="relative h-full min-h-[160px] overflow-hidden">
                <Frame
                  alt="Portrait in the studio"
                  aspect=""
                  className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="eyebrow text-gray">About</p>
                </div>
              </div>
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