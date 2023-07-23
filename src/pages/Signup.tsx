import { FormEvent, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createUser } from "../redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export default function Signup() {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(createUser({ email: email, password: password }));
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  useEffect(() => {
    if (user.email && !isLoading) {
      if (state) {
        navigate(state.path);
      } else {
        navigate("/");
      }
    }
  }, [isLoading, user.email, navigate, state]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left max-w-[50%]">
          <h1 className="text-5xl font-bold">Sign up now!</h1>
          <p className="py-6">
            Through the pages of a book, we can bridge the gap between the past
            and the future, connecting with the thoughts and dreams of countless
            souls, as timeless as the written word itself."
          </p>
          <Link to={`/login`}>
            <button className="bg-emerald-200 px-5 py-1.5 rounded-md hover:bg-emerald-300">
              Login
            </button>
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="text"
                  placeholder="confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="input input-bordered"
                />
              </div>
              {password !== confirmPassword && (
                <p className="text-red-600">password should be match!!!</p>
              )}
              <div className="form-control mt-6">
                <button
                  className={`bg-emerald-600 text-white py-1.5 px-5 rounded-sm hover:bg-emerald-700 ${
                    password !== confirmPassword &&
                    "bg-slate-400 hover:bg-slate-500"
                  }`}
                  disabled={password !== confirmPassword}
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
