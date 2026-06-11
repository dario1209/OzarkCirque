"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
const LIGHT_ROUTES = ["/about", "/teaching", "/writing", "/contact"];

const links = [
  { href: "/about", label: "About" },
  { href: "/entertain", label: "Entertain" },
  { href: "/teaching", label: "Teaching" },
  { href: "/events", label: "Events" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const onLight = pathname === "/" || LIGHT_ROUTES.some((r) => pathname.startsWith(r));
  const base = onLight ? "text-ink" : "text-cream";
  const muted = onLight ? "text-aubergine/60" : "text-cream/60";

  return (
    <header
      className={`absolute top-0 left-0 right-0 z-20 ${base}`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-y-3 px-6 py-8"
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={onLight ? "/images/logo-aubergine.png" : "/images/logo-cream.png"}
            alt="Ozark Cirque"
            width={48}
            height={48}
          />
        </Link>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((l) => {
            const active = pathname.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`eyebrow hover:text-plum ${
                    active ? "text-plum" : muted
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
