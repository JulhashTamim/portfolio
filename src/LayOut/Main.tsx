import Navbar from "@/components/Navbar/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Outlet />
      <ScrollRestoration />
    </div>
  );
};

export default Main;
