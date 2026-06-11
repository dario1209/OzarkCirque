import type { Metadata } from "next";
import Frame from "@/components/Frame";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Brittany Paul — performing artist, aerial educator, founder of Ozark Cirque.",
};

export default function About() {
  return (
    <div className="bg-paper text-ink">
      <section className="mx-auto max-w-6xl px-6 pb-32 pt-40 md:pb-44">
        <Reveal>
          <p className="eyebrow text-plum">About</p>
          <h1 className="display mt-4 max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)]">
            I came to the air by way of <i>rock</i> and <i>breath</i>.
          </h1>
        </Reveal>

        <div className="mt-24 grid gap-16 md:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <Frame
              alt="Portrait of Brittany Paul in the studio, resting a hand on hung silks"
              tone="light"
            />
          </Reveal>
          <Reveal className="max-w-prose space-y-6 text-lg leading-relaxed text-aubergine">
            <p>
              Climbing taught me to trust my hands. Yoga taught me to trust my
              breath. Aerial arts asked me to bring both into the air — and
              I&apos;ve spent more than a decade there since.
            </p>
            <p>
              I founded Ozark Cirque to make work, and to make work <em>for</em>{" "}
              other artists: a company in Northwest Arkansas that stages
              productions, hires professional performers, and builds an audience
              for circus here at home.
            </p>
            <p>
              My MA in Art Education shaped how I teach. I think of circus as
              co-learning — teacher and student figuring out a body in space
              together. That research thread runs through everything I write and
              every class I lead.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Person schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Brittany Paul",
            jobTitle: "Performing Artist & Aerial Educator",
            affiliation: { "@type": "Organization", name: "Ozark Cirque, LLC" },
            address: { "@type": "PostalAddress", addressRegion: "AR" },
          }),
        }}
      />
    </div>
  );
}
