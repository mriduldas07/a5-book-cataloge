/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Key } from "react";
import { useParams } from "react-router-dom";
import AddReviews from "../components/AddReviews";
import BookDetailsHero from "../components/BookDetailsHero";
import BookReviews from "../components/BookReviews";
import Loading from "../components/Loading";
import {
  useGetCommentQuery,
  useGetSingleBookQuery,
} from "../redux/features/books/booksApi";
import { IBooks } from "../types/globalType";

export default function BookDetails() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleBookQuery(id);
  const { data: comments } = useGetCommentQuery(id, {
    pollingInterval: 3000,
  });

  const bookData: IBooks = data?.data;
  const commentsData = comments?.data?.comments;

  let content;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && bookData) {
    content = (
      <>
        <BookDetailsHero book={bookData} />
        <div className="divider"></div>
        <AddReviews id={bookData._id} />
        {commentsData?.map((comment: string, i: Key | null | undefined) => (
          <BookReviews key={i} comment={comment} />
        ))}
      </>
    );
  }
  return <div className="mb-10">{content}</div>;
}
