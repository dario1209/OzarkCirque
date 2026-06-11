/**
 * Image placeholder. When photos are ready, replace the inner div with:
 *   <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} placeholder="blur" />
 * and keep the aspect wrapper.
 */
export default function Frame({
  alt,
  aspect = "aspect-[3/4]",
  tone = "dark",
  className = "",
}: {
  alt: string;
  aspect?: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden ${aspect} ${className} ${
        tone === "dark"
          ? "bg-gradient-to-b from-aubergine to-ink"
          : "bg-gradient-to-b from-gray/30 to-gray/10"
      }`}
    >
      <span className="absolute bottom-3 left-3 right-3 text-[0.65rem] uppercase tracking-[0.12em] text-gray">
        {alt}
      </span>
    </div>
  );
}
