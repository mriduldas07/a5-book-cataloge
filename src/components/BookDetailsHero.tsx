import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { editing } from "../redux/features/books/bookSlice";
import { useDeleteBookMutation } from "../redux/features/books/booksApi";
import { addToCart } from "../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { IBooks } from "../types/globalType";

interface IProps {
  book: IBooks;
}

export default function BookDetailsHero({ book }: IProps) {
  const [deleteBook] = useDeleteBookMutation();
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { img, title, author, genre, publicationDate, _id } = book || {};
  const navigate = useNavigate();

  const handleEdit = () => {
    dispatch(editing(book));
    navigate("/add-book");
  };

  const handleDelete = () => {
    deleteBook(_id);
    confirm("Want to delete this book??");
    navigate("/");
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-[20rem]">
          <img src={img} className="min-w-full rounded-lg shadow-2xl" />
        </div>
        <div className="flex flex-col gap-3 ms-10">
          <div className="flex justify-end items-center gap-5 pb-[100px]">
            <div
              className="bg-green-500 hover:bg-green-400 px-3 py-1.5 rounded-md cursor-pointer"
              onClick={handleEdit}
            >
              <AiOutlineEdit size={28} />
            </div>
            {user.email && (
              <div
                className="bg-red-500 hover:bg-red-400 px-3 py-1.5 rounded-md cursor-pointer"
                onClick={handleDelete}
              >
                <AiOutlineDelete size={28} />
              </div>
            )}
          </div>
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
