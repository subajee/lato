type Props = {
  title: string;
  description?: string;
  eyebrow?: string;
};

export function SectionHeading({ title, description, eyebrow }: Props) {
  return (
    <div>
      {eyebrow && (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600 ring-1 ring-brand-100">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          {eyebrow}
        </span>
      )}
      <div className="mt-3 flex items-center gap-3">
        <span className="h-7 w-1.5 rounded-full bg-gradient-to-b from-brand-400 to-brand-600" />
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          {title}
        </h2>
      </div>
      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-500 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
