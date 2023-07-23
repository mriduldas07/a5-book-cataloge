import { FormEvent, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export default function Login() {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser({ email: email, password: password }));
    setEmail("");
    setPassword("");
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
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Reading is a magical journey that allows our minds to explore
            boundless realms, where imagination and knowledge intertwine to
            paint the canvas of wisdom.
          </p>
          <Link to={`/signup`}>
            <button className="bg-emerald-200 px-5 py-1.5 rounded-md hover:bg-emerald-300">
              Sign up
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
              <div className="form-control mt-6">
                <button
                  className="bg-emerald-600 text-white py-1.5 px-5 rounded-sm hover:bg-emerald-700"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
