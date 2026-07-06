import React, { useState } from "react";
import {
  Bell,
  MoonStar,
  Search,
  SunDim,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { CircleUserRound, Settings, LogOut } from "lucide-react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { EmployeeContext } from "../../store/context/EmployeeContext";
import { ThemeContext } from "../../store/context/ThemeContext";
import { ProfileContext } from "../../store/context/ProfileContext";
import { NotificationContext } from "../../store/context/NotificationContext";

function Header() {
  const [open, setopen] = useState(false);


  const navigate = useNavigate();

  const { search, setSearch } = useContext(EmployeeContext);

  const { notification } = useContext(NotificationContext);

  const { theme, handleMode } = useContext(ThemeContext);

  const { savedProfile } = useContext(ProfileContext);


  const [show, setshow] = useState(false);



  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const handleProfile = () => {
    setshow(!show);
  };

  return (
    <>
      <header className=" sm:px-6 flex justify-between items-center w-full bg-gray/50 p-2 fixed top-0 left-0 right-0 z-50 bg-white h-16    dark:bg-zinc-900   dark:border-zinc-700">
        <div className="flex justify-between items-center gap-4">
          <h1 className="font-bold text-gray-700 md:text-2xl text-lg dark:text-zinc-100">
            <span className="text-pink-500 text-2xl font-bold">A</span>
            <span className="-ml-2 text-purple-500 text-2xl font-bold">D</span>
            AdminDesk
          </h1>

          <div className=" flex items-center justify-start w-32 sm:w-52  md:w-80 border border-gray-300 rounded-md   dark:border-zinc-700 px-3 py-2">
            <Search className=" text-gray-500  dark:text-white " />
            <input
              value={search}
              name="search"
              onChange={handleSearch}
              className="  w-full outline-none p-1 text-black text-sm placeholder:text-sm   dark:text-white"
              type="text"
              placeholder="Search employess,tasks..."
            />
          </div>
        </div>

        <div className="hidden md:flex justify-between gap-4 items-center p-2 ">
          <NavLink
            to="notification"
            className={({ isActive }) =>
              isActive
                ? "relative bg-pink-100 text-pink-600 rounded-lg p-2 dark:bg-zinc-800 dark:text-pink-400"
                : "relative text-black rounded-lg p-2 hover:bg-gray-100 dark:text-zinc-100 dark:hover:bg-zinc-800"
            }
          >
            {" "}
            <div>
              <Bell size={20} />
              <span className="absolute -top-1  -right-1 text-[10px] bg-red-600 text-white rounded-full p-1 flex items-center justify-center w-4 h-4">
                {notification.length}
              </span>
            </div>
          </NavLink>

          {/* <NavLink
            to="notification"
            className={({ isActive }) =>
              isActive
                ? "relative bg-pink-100 text-pink-600 rounded-lg p-2 dark:bg-zinc-800 dark:text-pink-400"
                : "relative text-black rounded-lg p-2 hover:bg-gray-100 dark:text-zinc-100 dark:hover:bg-zinc-800"
            }
          >
          <div>
            <MessageSquareMore size={20} />
          </div>
          </NavLink> */}

          <div className=" relative text-black cursor-pointer bg-white border border-zinc-300   rounded-lg p-2 dark:text-zinc-100 dark:bg-zinc-800 dark:border-zinc-700">
            {theme === "light" ? (
              <MoonStar
                size={20}
                className="cursor-pointer hover:text-zinc-900   transition-all"
                onClick={handleMode}
              />
            ) : (
              <SunDim
                className="cursor-pointer hover:text-zinc-100  transition-all "
                onClick={handleMode}
              />
            )}
          </div>

          <div className="relative">
            <div className="flex justify-between items-center p-2 m-1">
              <div
                onClick={handleProfile}
                className="cursor-pointer w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold"
              >
                {savedProfile?.fullName[0]}
              </div>

              <div className="flex flex-col p-2">
                <h2 className="font-semibold text-md dark:text-zinc-100">
                  {savedProfile?.fullName}
                </h2>
                <p className="text-sm text-gray-600">Admin</p>
              </div>
              <ChevronDown onClick={handleProfile} size={20} />
            </div>

            {show && (
              <div className="absolute right-0  w-40 rounded-md bg-white mt-1 shadow-xl dark:bg-zinc-900 ">
                <ul className="flex flex-col justify-start items-start p-2 ">
                  <Link to="setting/profile">
                    {" "}
                    <li className=" flex p-2 hover:bg-gray-200 rounded-lg gap-2 text-md dark:text-zinc-100 dark:hover:bg-zinc-950">
                      {" "}
                      <CircleUserRound size={20} />
                      My profile
                    </li>
                  </Link>
                  <Link to={"setting"}>
                    <li className="flex p-2 hover:bg-gray-200 rounded-lg gap-2 text-md dark:text-zinc-100 dark:hover:bg-zinc-950">
                      <Settings size={20} />
                      Setting
                    </li>{" "}
                  </Link>
                  <li
                    onClick={handleLogout}
                    className="text-red-500 p-2 flex gap-2 text-md hover:bg-gray-200 rounded-lg dark:hover:bg-zinc-950"
                  >
                    <LogOut size={20} />
                    LogOut
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className=" relative md:hidden lg:hidden cursor-pointer flex gap-4">
          {/* <Search className= "block md:hidden text-gray-500  dark:text-white  " /> */}
          {open ? (
            <X strokeWidth={1.5} onClick={() => setopen(false)} />
          ) : (
            <Menu strokeWidth={1.5} onClick={() => setopen(true)} />
          )}
        </div>

        {open && (
          <div
            className={`md:hidden  fixed top-0 right-0  w-55 bg-white text-black shadow-lg z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="font-semibold text-pink-700">Menu</h2>
              <X
                className="cursor-pointer"
                strokeWidth={1.5}
                onClick={() => setopen(false)}
              />
            </div>
            <ul className="p-4 flex flex-col gap-4">
              <Link to="setting/profile">
                <li className="hover:bg-pink-100 p-2 rounded">Profile</li>
              </Link>
              <Link to="notification">
                <li className="hover:bg-pink-100 p-2 rounded">Notification</li>
              </Link>

              <Link to="setting">
                <li className="hover:bg-pink-100 p-2 rounded">Settings</li>
              </Link>
              <li
                className="hover:bg-pink-100 p-2 rounded text-red-700 flex gap-2 items-center"
                onClick={handleLogout}
              >
                {" "}
                <LogOut size={20} />
                <span>LogOut</span>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

export default React.memo(Header);
