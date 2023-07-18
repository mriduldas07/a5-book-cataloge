import AddReviews from "../components/AddReviews";
import BookDetailsHero from "../components/BookDetailsHero";
import BookReviews from "../components/BookReviews";

export default function BookDetails() {
  return (
    <div className="mb-10">
      <BookDetailsHero />
      <div className="divider"></div>
      <AddReviews />
      <BookReviews />
      <BookReviews />
      <BookReviews />
    </div>
  );
}
