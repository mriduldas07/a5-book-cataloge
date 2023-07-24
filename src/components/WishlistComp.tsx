import { HiOutlineTrash } from "react-icons/hi";
import {
  changeBookStatus,
  changeFinishedStatus,
  removeFromWishlist,
} from "../redux/features/wishList/wishListSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { IBooks } from "../types/globalType";

interface IProps {
  book: IBooks;
}

export default function WishlistComp({ book }: IProps) {
  const { books } = useAppSelector((state) => state.wishlist);
  const dispatch = useAppDispatch();
  const { img, title, author, genre, _id } = book || {};

  const matchedBook = books.find((book) => book._id === _id);
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
          <div className="flex items-center gap-1.5">
            <p className="font-semibold">Reading status: </p>

            {matchedBook?.readingStatus && (
              <div
                className="bg-green-200 px-2 py-1 rounded-2xl text-center cursor-pointer"
                onClick={() => dispatch(changeBookStatus(book))}
              >
                Reading
              </div>
            )}
            {!matchedBook?.readingStatus && (
              <div
                className="bg-red-200 px-2 py-1 rounded-2xl cursor-pointer"
                onClick={() => dispatch(changeBookStatus(book))}
              >
                Read soon
              </div>
            )}
          </div>
          <div className="flex items-center gap-1.5 mt-2">
            <p className="font-semibold">Mark as finished: </p>
            {matchedBook?.readingComplete && (
              <div
                className="bg-green-200 px-2 py-1 rounded-2xl text-center cursor-pointer"
                onClick={() => dispatch(changeFinishedStatus(book))}
              >
                Finished
              </div>
            )}
            {!matchedBook?.readingComplete && (
              <div
                className="bg-red-200 px-2 py-1 rounded-2xl cursor-pointer"
                onClick={() => dispatch(changeFinishedStatus(book))}
              >
                Not finished
              </div>
            )}
          </div>
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
