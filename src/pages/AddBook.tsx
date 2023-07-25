import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { cancelEditing } from "../redux/features/books/bookSlice";
import {
  useAddBookMutation,
  useUpdateBookMutation,
} from "../redux/features/books/booksApi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function AddNews() {
  const [addBook, { isSuccess }] = useAddBookMutation();
  const [updateBook, { isSuccess: updateSuccess }] = useUpdateBookMutation();
  const { book } = useAppSelector((state) => state.book);
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  const [value, onChange] = useState<Value>(new Date());
  const publishedDate = String(value).split(" ").splice(1, 3).join(" ");

  const navigate = useNavigate();

  useEffect(() => {
    const { _id, title, author, genre } = book || {};
    if (_id) {
      setTitle(title!);
      setGenre(genre!);
      setAuthor(author!);
    }
  }, [book]);

  const handleUpdate = (e: any) => {
    e.preventDefault();
    const id = book?._id;
    const data = {
      title: title,
      author: author,
      genre: genre,
      publicationDate: publishedDate,
    };

    updateBook({ id, data });
    setTitle("");
    setGenre("");
    setAuthor("");
    dispatch(cancelEditing());
  };

  const handleAddBook = (e: any) => {
    e.preventDefault();
    const CLIENT_API_KEY = "41638383b537c533d6c237f313e5cf71";
    const imgUrl = e.target.bookImg.files[0];

    const formData = new FormData();
    formData.append("image", imgUrl);
    const url = `https://api.imgbb.com/1/upload?key=${CLIENT_API_KEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const data = {
            title: title,
            author: author,
            img: img,
            genre: genre,
            publicationDate: publishedDate,
          };
          addBook(data);
        }
      });
    setTitle("");
    setGenre("");
    setAuthor("");
    navigate("/");
  };

  const handleCancelEditing = () => {
    dispatch(cancelEditing());
    setTitle("");
    setGenre("");
    setAuthor("");
    navigate("/");
  };
  return (
    <div className="my-10">
      <div className="toast toast-top toast-end pt-[5rem]">
        {isSuccess &&
          toast.success("Book added successfully", {
            duration: 4000,
            position: "top-right",
          })}
        {updateSuccess &&
          toast.success("Book updated successfully", {
            duration: 4000,
            position: "top-right",
          })}
      </div>
      <h1 className="text-center text-3xl text-semibold mb-8">
        Publish Your Book
      </h1>
      <form
        className=" mt-5"
        onSubmit={!book?._id ? handleAddBook : handleUpdate}
      >
        <div className="flex justify-center items-center">
          <div className="w-[500px]">
            <h4>Book title: </h4>
            <input
              type="text"
              name="title"
              value={title}
              className="border-[3px] border-[#666565] rounded py-2 px-5"
              placeholder="Book's title"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="">
            <h4>Book genre: </h4>
            <input
              type="text"
              name="genre"
              value={genre}
              className="border-[3px] border-[#666565] rounded py-2 px-5"
              placeholder="Book's genre"
              required
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>
        </div>
        {!book?._id && (
          <div className="flex justify-center items-center">
            <span>Book Image</span>
            <input
              type="file"
              name="bookImg"
              data-tooltip-id="img-tooltip"
              data-tooltip-content="Very Carefull. You Can't Update Image Any More!!"
              className="block text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-lg file:font-semibold
              file:bg-violet-50 file:text-[#3c3cbe]
              hover:file:bg-violet-200 my-5 cursor-pointer"
              required
            />
          </div>
        )}
        <div className="flex justify-center items-center flex-col gap-3 mt-3">
          <h4>Author</h4>
          <input
            type="text"
            name="author"
            className="border-[3px] border-[#666565] rounded py-2 px-5"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
          />
          <div className="flex flex-col items-center gap-3 mt-3">
            <span className="text-xl">Published Date</span>
            <Calendar onChange={onChange} value={value} />
          </div>
        </div>
        <div className="flex justify-center items-center my-5 bg-emerald-700 w-1/2 mx-auto py-[10px] rounded-sm text-white cursor-pointer">
          {!book?._id ? (
            <input type="submit" value="Add book" className="cursor-pointer" />
          ) : (
            <input
              type="submit"
              value="Update book"
              className="cursor-pointer"
            />
          )}
        </div>
        {book?._id && (
          <div
            className="flex justify-center items-center my-5 bg-red-700 w-1/2 mx-auto py-[10px] rounded-sm text-white cursor-pointer"
            onClick={handleCancelEditing}
          >
            <button>Cancel</button>
          </div>
        )}
      </form>
    </div>
  );
}
