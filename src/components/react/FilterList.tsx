import { useState } from "react";
import Filter from "./Filter";
import List from "./List";

type Props = {
  data?: Record<string, string>[];
};

export default function FilterList({ data: initialData }: Props) {
  const [data, setData] = useState(initialData);

  function handleFilter() {
    setData([]);
  };

  return (
    <Filter onFilter={handleFilter}>
      <List data={data} />
    </Filter>
  );
}
