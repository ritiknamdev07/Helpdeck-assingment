import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col h-screen w-full justify-between">
          <Outlet />
          <div className="w-full h-[50px]">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
