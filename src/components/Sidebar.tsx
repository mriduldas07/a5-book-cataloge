import { useEffect, useState } from "react";
import { useGetBooksQuery } from "../redux/features/books/booksApi";
import {
  filterByGenre,
  filterByYear,
} from "../redux/features/filter/filterSlice";
import { useAppDispatch } from "../redux/hooks";
import { IBooks } from "../types/globalType";

export default function Sidebar() {
  const dispatch = useAppDispatch();
  const { data } = useGetBooksQuery(undefined);
  // local state
  const [genre, setGenre] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const booksData = data?.data;
  const genreArr: string[] = [];
  const publicationYearArr: string[] = [];

  booksData?.map((b: IBooks) => {
    const upperCase = b.genre.charAt(0).toUpperCase() + b.genre.slice(1);
    genreArr.push(upperCase);
  });

  const genSet = new Set(genreArr);
  const genreArray = [...genSet];

  booksData?.map((b: IBooks) => {
    const arr = b.publicationDate.split(" ");
    publicationYearArr.push(arr[arr.length - 1]);
  });
  const yearSet = new Set(publicationYearArr);
  const yearArr = [...yearSet];

  useEffect(() => {
    dispatch(filterByGenre(genre));
    dispatch(filterByYear(year));
  }, [dispatch, genre, year]);

  return (
    <div className="bg-slate-100 rounded-md min-h-full w-[240px] mx-auto">
      <h1 className="text-center text-xl font-bold pt-3">Filter books</h1>
      <div className="flex flex-col items-center gap-3 pt-10">
        <h4>Filter by Genre</h4>
        <select
          name="genre"
          id="genre"
          value={genre}
          placeholder="News Category"
          className="border-[3px] border-[#666565] rounded py-2 px-5"
          required
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">Choose one</option>
          {genreArray.map((g, i) => (
            <option value={g} key={i}>
              {g}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col items-center gap-3 pt-10">
        <h4>Filter by publication year</h4>
        <select
          name="year"
          value={year}
          id="year"
          placeholder="News Category"
          className="border-[3px] border-[#666565] rounded py-2 px-5"
          required
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="">Choose one</option>
          {yearArr.map((y, i) => (
            <option value={y} key={i}>
              {y}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
