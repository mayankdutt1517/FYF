import { Outlet, Navigate } from "react-router-dom";
const PrivateRoute = () => {
  const details = JSON.parse(localStorage.getItem("USER"));

  return (
    <div>{details?.role === "Admin" ? <Outlet /> : Navigate({ to: "/" })}</div>
  );
};

export default PrivateRoute;
