import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">

      <Navbar />

      <div className="pt-0">
        <Outlet />
      </div>

      <Footer />

    </div>
  );
}

export default Layout;