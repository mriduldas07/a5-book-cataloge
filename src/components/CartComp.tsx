import { HiMinus, HiOutlinePlus, HiOutlineTrash } from "react-icons/hi";
import {
  addToCart,
  removeFromCart,
  removeOne,
} from "../redux/features/cart/cartSlice";
import { useAppDispatch } from "../redux/hooks";
import { IBooks } from "../types/globalType";

interface IProps {
  book: IBooks;
}

export default function CartComp({ book }: IProps) {
  const dispatch = useAppDispatch();
  const { img, title, author, genre, quantity, publicationDate } = book || {};

  return (
    <div className="hero max-h-[400px] w-full bg-base-200 border m-3 rounded-lg">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-[100px]">
          <img src={img} className="w-full rounded-lg shadow-2xl" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p>Author: {author}</p>
          <p>Genre: {genre}</p>
        </div>
        <div className="border-l pl-5 flex justify-center items-center gap-3">
          <button onClick={() => dispatch(addToCart(book))}>
            <HiOutlinePlus size="20" />
          </button>
          <p className="border-gray-400 bg-white px-2 py-1">{quantity}</p>
          <button onClick={() => dispatch(removeOne(book))}>
            <HiMinus size="20" />
          </button>
          <button
            className="bg-red-500 hover:bg-red-400 px-3 py-1.5 rounded-md"
            onClick={() => dispatch(removeFromCart(book))}
          >
            <HiOutlineTrash size="25" />
          </button>
        </div>
      </div>
    </div>
  );
}
