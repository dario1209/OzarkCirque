import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-aubergine text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="display text-2xl">Ozark Cirque</p>
          <p className="mt-2 text-sm text-cream/60">
            Brittany Paul · Northwest Arkansas
          </p>
        </div>
        <ul className="flex gap-6">
          <li>
            <a href="https://instagram.com" className="eyebrow text-cream/60 hover:text-cream">
              Instagram
            </a>
          </li>
          <li>
            <Link href="/contact" className="eyebrow text-cream/60 hover:text-cream">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-8">
        <p className="text-xs text-cream/40">
          © {new Date().getFullYear()} Ozark Cirque, LLC
        </p>
      </div>
    </footer>
  );
}
