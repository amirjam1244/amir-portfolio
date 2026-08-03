import FadeIn from "@/components/FadeIn";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className = "text-center",
}: SectionHeaderProps) {
  return (
    <FadeIn className={className}>
      <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400/80">
        {eyebrow}
      </p>
      <h2 className="text-section-title mt-4">{title}</h2>
      {subtitle && <p className="text-section-subtitle">{subtitle}</p>}
    </FadeIn>
  );
}
