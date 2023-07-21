/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useParams } from "react-router-dom";
import AddReviews from "../components/AddReviews";
import BookDetailsHero from "../components/BookDetailsHero";
import BookReviews from "../components/BookReviews";
import Loading from "../components/Loading";
import { useGetSingleBookQuery } from "../redux/features/books/booksApi";
import { IBooks } from "../types/globalType";

export default function BookDetails() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleBookQuery(id);

  const bookData: IBooks = data?.data;
  const comments = bookData?.comments;

  let content;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && bookData) {
    content = (
      <>
        <BookDetailsHero book={bookData} />
        <div className="divider"></div>
        <AddReviews />
        {comments?.map((comment) => (
          <BookReviews comment={comment} />
        ))}
      </>
    );
  }
  return <div className="mb-10">{content}</div>;
}
