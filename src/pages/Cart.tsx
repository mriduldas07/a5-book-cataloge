import CartComp from "../components/CartComp";
import { useAppSelector } from "../redux/hooks";
import { IBooks } from "../types/globalType";

export default function Cart() {
  const { books } = useAppSelector((state) => state.cart);
  return (
    <div className="w-[600px] mx-auto">
      {books.map((book: IBooks) => (
        <CartComp key={book._id} book={book} />
      ))}
      {books.length === 0 && (
        <p className="text-center py-10">cart is empty!!!</p>
      )}
    </div>
  );
}
