/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import BookCard from "../components/BookCard";
import Loading from "../components/Loading";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import { useGetBooksQuery } from "../redux/features/books/booksApi";
import { useAppSelector } from "../redux/hooks";
import { IBooks } from "../types/globalType";

export default function Home() {
  const { data, isLoading } = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const { genre, year, search } = useAppSelector((state) => state.filter);
  const booksData: IBooks[] = data?.data;
  let content;
  if (isLoading) {
    content = <Loading />;
  }

  if (!isLoading && booksData?.length > 0) {
    content = booksData
      ?.filter((f) => {
        if (genre !== "") {
          return f.genre === genre;
        }
        return f;
      })
      ?.filter((f) => {
        if (year !== "") {
          return f.publicationDate.includes(year);
        }
        return f;
      })
      ?.filter((f) => {
        if (search !== "") {
          return (
            f.title.toLowerCase().includes(search) ||
            f.publicationDate.toLowerCase().includes(search) ||
            f.author.toLowerCase().includes(search)
          );
        }
        return f;
      })
      .map((book: IBooks) => <BookCard key={book._id} book={book} />);
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <Searchbar />{" "}
      </div>
      <div className="grid grid-cols-12 gap-5 mt-5">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-9">
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6 px-10 mx-auto mb-10">
            {content}
          </div>
        </div>
      </div>
    </>
  );
}
