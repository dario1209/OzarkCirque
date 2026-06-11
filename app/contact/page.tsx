import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Brittany Paul and Ozark Cirque.",
};

export default function Contact() {
  return (
    <div className="bg-paper text-ink">
      <section className="mx-auto max-w-4xl px-6 pb-32 pt-40">
        <Reveal>
          <p className="eyebrow text-plum">Contact</p>
          <h1 className="display mt-4 text-[clamp(2.5rem,6vw,4.5rem)]">
            Say hello.
          </h1>
          <p className="mt-6 max-w-md text-aubergine">
            Bookings, classes, collaborations, or just a question about circus
            in the Ozarks.
          </p>
        </Reveal>

        <Reveal className="mt-20 space-y-6">
          <p>
            <a
              href="mailto:hello@ozarkcirque.com"
              className="display border-b border-plum pb-1 text-3xl text-ink hover:text-plum"
            >
              hello@ozarkcirque.com
            </a>
          </p>
          <p className="eyebrow text-gray">Northwest Arkansas</p>
          <p>
            <a
              href="https://instagram.com"
              className="eyebrow text-aubergine hover:text-plum"
            >
              Instagram →
            </a>
          </p>
        </Reveal>
      </section>
    </div>
  );
}
