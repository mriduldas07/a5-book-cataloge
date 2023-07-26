import { useEffect, useState } from "react";
import { fiterBySearch } from "../redux/features/filter/filterSlice";
import { useAppDispatch } from "../redux/hooks";

export default function Searchbar() {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    dispatch(fiterBySearch(search.toLowerCase()));
  }, [dispatch, search]);
  return (
    <div>
      <input
        type="text"
        value={search}
        placeholder="Search books..."
        className="input input-bordered input-accent w-full max-w-xs"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
