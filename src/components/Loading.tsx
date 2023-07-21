export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen min-w-[1200px]">
      <div className="flex justify-center items-center gap-2">
        <span className="loading loading-dots loading-lg"></span>
        <span className="loading loading-dots loading-lg"></span>
        <span className="loading loading-dots loading-lg"></span>
      </div>
    </div>
  );
}
