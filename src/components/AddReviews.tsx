export default function AddReviews() {
  return (
    <div>
      <h1 className="text-xl text-center mt-4 mb-10">
        Add Reviews about this books
      </h1>
      <div className="flex justify-center items-center gap-3">
        <textarea
          className="textarea textarea-success"
          placeholder="Add a review..."
          cols={100}
          rows={2}
        ></textarea>
        <button className="btn bg-emerald-700 text-white">Send</button>
      </div>
    </div>
  );
}
