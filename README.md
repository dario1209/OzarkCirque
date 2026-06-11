# Ozark Cirque — site

Next.js (App Router) + TypeScript + Tailwind. Deployed on Vercel.

## Run

    npm install
    npm run dev

## Editing content

- **Events:** `content/events.json` — one object per event. Date format `YYYY-MM-DD`; anything in the future shows under Upcoming, the rest goes to the year-grouped Past archive automatically.
- **Writing:** drop a markdown file in `content/writing/` with `title`, `date`, `excerpt` frontmatter. It appears on the index and gets its own page.

## Photos

Performance photography is the design. Every image slot currently renders a `<Frame>` placeholder (`components/Frame.tsx`) with the intended alt text written in. To swap in real photos:

1. Put images in `public/images/`.
2. Replace the `<Frame>` with `next/image` inside the same aspect-ratio wrapper (a comment in `Frame.tsx` shows the pattern). Keep `placeholder="blur"` on hero images.

## Design system

Palette, type, voice, and layout rules live in the ozark-cirque-site skill. Quick reference: ink/paper/cream/plum/aubergine/gray are the working palette; gold/crimson/tangerine/teal/jade are spice only. Instrument Serif for display, Hanken Grotesk for body. Dark pages = theater (Home, Entertain, Events); light pages = studio (About, Teaching, Writing, Contact).
