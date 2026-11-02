'use client';

import { useSearchContext } from 'fumadocs-ui/contexts/search';
import { Search } from 'lucide-react';

// Opens the Fumadocs search dialog provided by RootProvider.
export function SearchButton() {
  const { enabled, hotKey, setOpenSearch } = useSearchContext();
  if (!enabled) return null;

  return (
    <button type="button" className="home-btn home-btn-secondary" onClick={() => setOpenSearch(true)}>
      <Search className="size-4 opacity-70" aria-hidden="true" />
      Search docs
      <span className="ms-1 hidden gap-1 sm:inline-flex" aria-hidden="true">
        {hotKey.map((key, i) => (
          <kbd key={i} className="home-kbd">
            {key.display}
          </kbd>
        ))}
      </span>
    </button>
  );
}
