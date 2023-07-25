/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import BookCard from "../components/BookCard";
import Loading from "../components/Loading";
import { useGetBooksQuery } from "../redux/features/books/booksApi";
import { IBooks } from "../types/globalType";

export default function Home() {
  const { data, isLoading } = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const booksData: IBooks[] = data?.data;
  let content;
  if (isLoading) {
    content = <Loading />;
  }

  if (!isLoading && booksData?.length > 0) {
    content = booksData?.map((book: IBooks) => (
      <BookCard key={book._id} book={book} />
    ));
  }

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6 px-10 mx-auto mb-10">
      {content}
    </div>
  );
}
