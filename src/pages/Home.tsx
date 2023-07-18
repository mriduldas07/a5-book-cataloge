import BookCard from "../components/BookCard";

export default function Home() {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6 px-10 mx-auto mb-10">
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  );
}
