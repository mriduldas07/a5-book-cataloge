import { addToCart } from "../redux/features/cart/cartSlice";
import { useAppDispatch } from "../redux/hooks";
import { IBooks } from "../types/globalType";

interface IProps {
  book: IBooks;
}

export default function BookDetailsHero({ book }: IProps) {
  const dispatch = useAppDispatch();
  const { img, title, author, genre, publicationDate } = book || {};
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-[20rem]">
          <img src={img} className="min-w-full rounded-lg shadow-2xl" />
        </div>
        <div className="flex flex-col gap-3 ms-10">
          <h1 className="text-5xl font-bold">{title}</h1>
          <h6 className="text-xl font-bold">Author: {author}</h6>
          <h6 className="text-xl font-bold">Genre: {genre}</h6>
          <h6 className="text-xl font-bold">
            Publication Date: {publicationDate}
          </h6>
          <button
            className="bg-emerald-700 text-white my-6 py-3 px-5 rounded-sm"
            onClick={() => dispatch(addToCart(book))}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
