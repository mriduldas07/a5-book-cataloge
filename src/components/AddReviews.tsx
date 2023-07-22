/* eslint-disable @typescript-eslint/no-floating-promises */
import { ChangeEvent, FormEvent, useState } from "react";
import { useAddCommentMutation } from "../redux/features/books/booksApi";
import Loading from "./Loading";

interface IProps {
  id: number;
}

export default function AddReviews({ id }: IProps) {
  const [inputData, setInputData] = useState<string>("");
  const [addComment, { isLoading }] = useAddCommentMutation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addComment({
      id: id,
      data: { comment: inputData },
    });
    setInputData("");
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputData(event.target.value);
  };
  return (
    <div>
      <h1 className="text-xl text-center mt-4 mb-10">
        Add Reviews about this books
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center gap-3">
          <textarea
            className="textarea textarea-success"
            placeholder="Add a review..."
            onChange={handleChange}
            value={inputData}
            cols={100}
            rows={2}
          ></textarea>
          {isLoading && <Loading />}
          <button className="btn bg-emerald-700 text-white" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
