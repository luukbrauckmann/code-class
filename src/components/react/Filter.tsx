import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import Button from "./Button";

type Props = {
  onFilter: (filter: { search: string }) => void;
  children: ReactNode;
};

export default function Filter({ onFilter, children }: Props) {
  const [filter, setFilter] = useState({ search: "" });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    onFilter(filter);
    event.preventDefault();
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="search">Search</label>
          <input type="search" name="search" value={filter.search} onChange={handleInputChange} />
        </div>

        <div>
          <Button type="submit">Filter</Button>
        </div>
      </div>

      <output>{children}</output>
    </form>
  );
}
