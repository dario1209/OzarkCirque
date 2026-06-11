import type { Metadata } from "next";
import Link from "next/link";
import Frame from "@/components/Frame";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Teaching",
  description:
    "Aerial practice integrated with yoga, breathwork, and mindfulness — circus as a movement practice for every body.",
};

const principles = [
  {
    title: "Breath first",
    body: "Every wrap, climb, and inversion starts on an exhale. Aerial work is yoga turned vertical.",
  },
  {
    title: "Co-learning",
    body: "I teach the way I research: student and teacher solving a body in space together, not a catalog of tricks delivered top-down.",
  },
  {
    title: "Circus for every body",
    body: "Strength is built, not required. Classes meet you where your practice is today.",
  },
];

export default function Teaching() {
  return (
    <div className="bg-paper text-ink">
      <section className="mx-auto max-w-6xl px-6 pb-32 pt-40 md:pb-44">
        <Reveal>
          <p className="eyebrow text-plum">Teaching</p>
          <h1 className="display mt-4 max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)]">
            Movement <i>principles</i>, not a list of tricks.
          </h1>
        </Reveal>

        <div className="mt-24 grid items-start gap-16 md:grid-cols-2">
          <Reveal>
            <Frame
              alt="Brittany guiding a student through a footlock on low silks, studio daylight"
              tone="light"
              aspect="aspect-[4/5]"
            />
          </Reveal>
          <div className="space-y-16">
            {principles.map((p) => (
              <Reveal key={p.title}>
                <h2 className="display text-3xl">{p.title}</h2>
                <p className="mt-3 max-w-md text-aubergine">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-40">
          <p className="max-w-md text-lg text-aubergine">
            Classes and intensives are listed as they&apos;re scheduled.
          </p>
          <Link
            href="/events"
            className="eyebrow mt-8 inline-block border-b border-plum pb-1 text-ink hover:text-plum"
          >
            Upcoming sessions
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
