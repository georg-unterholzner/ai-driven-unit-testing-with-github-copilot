import type { FilterType } from '../types/todo';

interface FilterButtonsProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const FilterButtons = ({ currentFilter, onFilterChange }: FilterButtonsProps) => {
  const filters: FilterType[] = ['all', 'active', 'completed'];

  return (
    <div className="filter-buttons">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`filter-button ${currentFilter === filter ? 'active' : ''}`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};
