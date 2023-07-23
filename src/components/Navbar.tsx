import { signOut } from "firebase/auth";
import { BsCardChecklist } from "react-icons/bs";
import { Link } from "react-router-dom";
import { auth } from "../lib/firebase";
import { setUser } from "../redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export default function Navbar() {
  const { user } = useAppSelector((state) => state.user);
  const { books } = useAppSelector((state) => state.cart);
  const { books: wishList } = useAppSelector((state) => state.wishlist);
  const dispatch = useAppDispatch();
  let cartQuantity = 0;
  for (let i = 0; i < books.length; i++) {
    cartQuantity += books[i].quantity!;
  }

  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch(setUser(null));
    });
  };
  return (
    <div className="navbar bg-emerald-700">
      <div className="flex-1">
        <Link to="/" className="normal-case text-white font-bold text-xl">
          Books Hut
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex lg:justify-center lg:items-center">
        {!user.email ? (
          <ul className="menu menu-horizontal px-1">
            <Link to={`/login`}>
              <li className="text-white pr-2 text-[16px]">Login</li>
            </Link>
            <Link to={`/signup`}>
              <li className="text-white text-[16px]">Sign up</li>
            </Link>
          </ul>
        ) : (
          <ul>
            <li
              className="text-white text-[16px] cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </li>
          </ul>
        )}
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <Link to={`/wishlist`}>
              <div className="indicator text-white">
                <BsCardChecklist size={21} />
                <span className="badge badge-sm indicator-item">
                  {wishList.length}
                </span>
              </div>
            </Link>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          ></div>
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <Link to={`/cart`}>
              <div className="indicator text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cartQuantity}
                </span>
              </div>
            </Link>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          ></div>
        </div>
      </div>
    </div>
  );
}
