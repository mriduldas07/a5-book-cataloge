import { Link } from "react-router-dom";
import { IBooks } from "../types/globalType";

interface IPros {
  book: IBooks;
}

export default function BookCard({ book }: IPros) {
  const { title, author, genre, img, publicationDate, _id } = book || {};
  return (
    <div className="card w-[20rem] bg-base-100 shadow-xl">
      <Link to={`/book-details/${_id}`}>
        <figure className="px-10 pt-10 max-h-[293px]">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
      </Link>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <span>Author: {author}</span>
        <span>Genre: {genre}</span>
        <span>Publication Date: {publicationDate}</span>
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
