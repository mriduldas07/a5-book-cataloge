interface IProps {
  comment: string;
}

export default function BookReviews({ comment }: IProps) {
  return (
    <div className="flex justify-center items-center">
      <textarea
        className="bg-slate-300 flex flex-col my-4 w-[600px] h-[80px] rounded p-2"
        disabled
      >
        {comment}
      </textarea>
    </div>
  );
}
