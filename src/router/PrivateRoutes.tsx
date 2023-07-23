import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import { useAppSelector } from "../redux/hooks";

interface IProp {
  children: ReactNode;
}
export default function PrivateRoutes({ children }: IProp) {
  const { user, isLoading } = useAppSelector((state) => state.user);

  const { pathname } = useLocation();

  if (isLoading) {
    return <Loading />;
  }
  if (!user.email && !isLoading) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
}
