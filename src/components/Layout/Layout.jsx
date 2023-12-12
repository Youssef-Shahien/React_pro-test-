import style from "./Layout.module.css";
import Sidebar from "../Sidebar/Sidebar.jsx";
import { Outlet } from "react-router-dom";
import HeaderLogin from './../Header/Header';

export default function Layout() {
  return (
    <>
       <HeaderLogin />
      <div className="d-flex min-vh-100 align-items-stretch">
        <div className={`${style.sidebar}`}>
          <Sidebar />
        </div>

        <div className={`${style.content}`}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
