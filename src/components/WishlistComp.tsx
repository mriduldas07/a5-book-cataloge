import { HiOutlineTrash } from "react-icons/hi";
import { removeFromWishlist } from "../redux/features/wishList/wishListSlice";
import { useAppDispatch } from "../redux/hooks";
import { IBooks } from "../types/globalType";

interface IProps {
  book: IBooks;
}

export default function WishlistComp({ book }: IProps) {
  const dispatch = useAppDispatch();
  const { img, title, author, genre } = book || {};
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
          <button
            className="bg-red-500 hover:bg-red-400 px-3 py-1.5 rounded-md"
            onClick={() => dispatch(removeFromWishlist(book))}
          >
            <HiOutlineTrash size="25" />
          </button>
        </div>
      </div>
    </div>
  );
}
