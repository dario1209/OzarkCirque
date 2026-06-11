import type { Metadata } from "next";
import Link from "next/link";
import Frame from "@/components/Frame";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Entertain",
  description:
    "Aerial performance for stages and events — solo, or with a cast of professional artists.",
};

export default function Entertain() {
  return (
    <div className="bg-ink text-cream">
      <section className="mx-auto max-w-6xl px-6 pb-32 pt-40 md:pb-44">
        <Reveal>
          <p className="eyebrow text-plum">Entertain</p>
          <h1 className="display mt-4 max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)]">
            I create aerial performance for stages and events.
          </h1>
          <p className="mt-6 max-w-md text-cream/70">
            Solo, or with a cast of professional performers assembled for larger
            productions.
          </p>
        </Reveal>

        <div className="mt-28 grid gap-6 md:grid-cols-3">
          <Reveal>
            <Frame alt="Silks act, performer in a deep drop wrap, theatrical haze" />
            <p className="eyebrow mt-4 text-gray">Silks</p>
          </Reveal>
          <Reveal className="md:translate-y-16">
            <Frame alt="Aerial hoop duet silhouetted against a single warm spotlight" />
            <p className="eyebrow mt-4 text-gray">Lyra &amp; duo work</p>
          </Reveal>
          <Reveal>
            <Frame alt="Full cast staged production with multiple rig points" />
            <p className="eyebrow mt-4 text-gray">Cast productions</p>
          </Reveal>
        </div>

        <Reveal className="mt-40 max-w-prose">
          <p className="text-lg text-cream/80">
            Theaters, festivals, galas, private events. Each piece is built for
            the room it&apos;s in.
          </p>
          <Link
            href="/contact"
            className="eyebrow mt-10 inline-block border-b border-plum pb-1 text-cream hover:text-plum"
          >
            Start a conversation
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
