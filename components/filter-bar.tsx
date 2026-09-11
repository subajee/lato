type Props = {
  items: string[];
  active: string;
  onChange: (value: string) => void;
};

export function FilterBar({ items, active, onChange }: Props) {
  return (
    <div className="inline-flex flex-wrap gap-1 rounded-full border border-gray-200 bg-white p-1 shadow-sm">
      {items.map((item) => {
        const isActive = active === item;
        return (
          <button
            key={item}
            type="button"
            onClick={() => onChange(item)}
            aria-pressed={isActive}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
              isActive
                ? "bg-brand-500 text-white shadow-sm shadow-brand-500/30"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
