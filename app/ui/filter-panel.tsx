// @/app/ui/filter-panel.tsx

type FilterPanelProps = {
    categories: string[];
    selected: string | null;
    onSelect: (category: string) => void;
    onClear: () => void;
  };
  
  export function FilterPanel({ categories, selected, onSelect, onClear }: FilterPanelProps) {
    return (
      <aside className="w-60 p-4 bg-white rounded-lg">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Filter</h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => onSelect(cat)}
                className={
                  `w-full text-left py-1 text-sm transition-all focus:outline-none ${
                    selected === cat
                      ? 'border-b-2 border-blue-500 text-blue-600'
                      : 'text-gray-600 hover:text-gray-800'
                  }`
                }
              >
                {cat}
              </button>
            </li>
          ))}
          {selected && (
            <li>
              <button
                onClick={onClear}
                className="w-full text-left py-1 text-sm text-gray-500 hover:text-gray-700 transition-all"
              >
                Clear Filter
              </button>
            </li>
          )}
        </ul>
      </aside>
    );
  }
  
