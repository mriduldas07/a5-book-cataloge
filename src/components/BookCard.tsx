import { IBooks } from "../types/globalType";

interface IPros {
  book: IBooks;
}

export default function BookCard({ book }: IPros) {
  const { title } = book || {};
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Title</h2>
        <p>Author</p>
        <p>Genre</p>
        <p>Publication Date</p>
        <div className="flex justify-center items-center gap-5">
          <button className="bg-emerald-700 text-white py-1.5 px-5 rounded-sm">
            Add to cart
          </button>
          <p>wishlist</p>
        </div>
      </div>
    </div>
  );
}
