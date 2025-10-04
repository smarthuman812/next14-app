/**
 * Glow component.  Renders an absolutely positioned radial gradient that
 * softly illuminates the surrounding content.  Multiple Glows can be
 * layered to create complex ambient lighting effects.  Pass additional
 * Tailwind classes via the `className` prop to adjust position and size.
 */
export default function Glow({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={
        "pointer-events-none absolute rounded-full bg-gradient-radial from-[var(--accent-start)] via-[rgba(255,45,45,0.3)] to-transparent blur-2xl opacity-70 " +
        className
      }
    />
  );
}