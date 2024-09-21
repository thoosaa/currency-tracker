export type SearchState = {
  value: string;
  suggestions: string[];
};

export type SearchProps = {
  setSearch: (search: string) => void;
};
