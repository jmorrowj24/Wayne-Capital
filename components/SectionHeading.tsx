import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: Props) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className={`flex items-center gap-4 ${centered ? "justify-center" : ""}`}>
        <span className="h-px w-10 bg-gold/60" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="mt-6 font-serif text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-[1.05] tracking-[-0.015em] text-ivory">
        {title}
      </h2>
      {intro && (
        <p className="mt-6 text-lg leading-relaxed text-slate-soft">{intro}</p>
      )}
    </Reveal>
  );
}
