import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};
