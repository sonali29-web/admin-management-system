import React, { useContext } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { NotificationContext } from "../../store/context/NotificationContext";
import NotificationPopUp from "../NotificationPopUp";

const AppLayout = () => {

const {notiPopUp}=useContext(NotificationContext)

  return (
    <>


      <Header/>

 {notiPopUp && <NotificationPopUp></NotificationPopUp>}


      <div className="flex flex-col md:flex-row w-full">


         <Sidebar />


        <main className="

        overflow-y-auto
          flex-1
          min-h-screen
          w-full
          pt-16
          bg-stone-50
          dark:bg-slate-950
          p-2
          md:ml-48
         md:mb-0  mb-10
        ">
          <Outlet />
        </main>




      </div>

    </>
  );
};

export default AppLayout;
