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
      <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-accent" />
        <span className="label text-accent">{eyebrow}</span>
      </div>
      <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.04] tracking-[-0.02em] text-fg">
        {title}
      </h2>
      {intro && (
        <p className="mt-6 text-lg leading-relaxed text-muted">{intro}</p>
      )}
    </Reveal>
  );
}
