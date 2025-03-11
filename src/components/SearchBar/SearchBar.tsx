import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

interface SeachBarInterface {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SeachBarInterface> = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) {
      return toast.error("Field is empty!");
    }
    onSubmit(query);
    setQuery("");
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={s.input}>
        <input
          onChange={handleChange}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
