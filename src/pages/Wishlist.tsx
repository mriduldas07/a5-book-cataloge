import WishlistComp from "../components/WishlistComp";
import { useAppSelector } from "../redux/hooks";
import { IBooks } from "../types/globalType";

export default function Wishlist() {
  const { books } = useAppSelector((state) => state.wishlist);
  return (
    <div className="w-[600px] mx-auto">
      {books.map((book: IBooks) => (
        <WishlistComp key={book._id} book={book} />
      ))}

      {books.length === 0 && (
        <p className="text-center py-10">wishlist is empty!!!</p>
      )}
    </div>
  );
}
