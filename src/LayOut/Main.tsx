import Navbar from "@/components/Navbar/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default Main;
