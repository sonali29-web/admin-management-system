import React from "react";
import {
  Gauge,
  Settings,
  UsersRound,
  ChartSpline,
  ListTodo,
  Bell,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function Sidebar() {

  return (
    <>
      <aside className="hidden md:flex w-45  h-screen bg-white-900 fixed top-16 left-0  z-40 dark:bg-zinc-900  dark:border-zinc-700">
        <ul className="flex flex-col p-2 gap-6 mt-4 ">
          <p className=" text-gray-600 ">Menu</p>

          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              isActive
                ? "rounded-sm p-1 bg-linear-to-br from-pink-500 from-5%  to-95% to-pink-700 text-pink-100"
                : "text-gray-600 font-semibold text-[15px] dark:text-zinc-100"
            }
          >
            <li>
              <div className="flex items-center  gap-2 justify-start px-3">
                <span>
                  <Gauge />
                </span>
                <span className="px-1">Dashboard</span>
              </div>
            </li>
          </NavLink>

          <NavLink
            to="employees"
            className={({ isActive }) =>
              isActive
                ? "rounded-sm p-1 bg-linear-to-br from-pink-500 from-5%  to-95% to-pink-700 text-pink-100"
                : "text-gray-600 font-semibold text-[15px] dark:text-zinc-100"
            }
          >
            <li>
              <div className="flex items-center justify-center gap-2 md:justify-start px-3">
                <span>
                  <UsersRound />
                </span>
                <span className="px-1">Employees</span>
              </div>
            </li>
          </NavLink>

          <NavLink
            to="tasks"
            className={({ isActive }) =>
              isActive
                ? "rounded-sm p-1 bg-linear-to-br from-pink-500 from-5%  to-95% to-pink-700 text-pink-100"
                : "text-gray-600 font-semibold text-[15px] dark:text-zinc-100"
            }
          >
            <li>
              <div className="flex items-center justify-center gap-2 md:justify-start px-3">
                <span>
                  <ListTodo />
                </span>
                <span className="px-1">Tasks</span>
              </div>
            </li>
          </NavLink>

          <NavLink
            to="analytics"
            className={({ isActive }) =>
              isActive
                ? "rounded-sm p-1 bg-linear-to-br from-pink-500 from-5%  to-95% to-pink-700 text-pink-100"
                : "text-gray-600 font-semibold text-[15px] dark:text-zinc-100"
            }
          >
            <li>
              <div className="flex items-center justify-center gap-2 md:justify-start px-3">
                <span>
                  <ChartSpline />
                </span>
                <span className="px-1">Analytics</span>
              </div>
            </li>
          </NavLink>

          <NavLink
            to="notification"
            className={({ isActive }) =>
              isActive
                ? "rounded-sm p-1 bg-linear-to-br from-pink-500 from-5%  to-95% to-pink-700 text-pink-100"
                : "text-gray-600 font-semibold text-[15px] dark:text-zinc-100"
            }
          >
            <li>
              <div className="flex items-center justify-center gap-2 md:justify-start px-3">
                <span>
                  <Bell />
                </span>
                <span className="px-1">Notification</span>
              </div>
            </li>
          </NavLink>

          <p className="p-2  text-gray-600">Support</p>
          <NavLink
            to="setting"
            className={({ isActive }) =>
              isActive
                ? "rounded-sm p-1 bg-linear-to-br from-pink-500 from-5%  to-95% to-pink-700 text-pink-100"
                : "text-gray-600 font-semibold text-[15px] dark:text-zinc-100"
            }
          >
            <li>
              <div className="flex items-center justify-center gap-2 md:justify-start px-3">
                <span>
                  <Settings />
                </span>
                <span className="px-1">Setting</span>
              </div>
            </li>
          </NavLink>
        </ul>
      </aside>


{/* //mobile View */}
<div className="md:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-zinc-900 border-t flex justify-around py-2 z-50">

<NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              isActive
                ? "rounded-sm p-1 bg-linear-to-br from-pink-500 from-5%  to-95% to-pink-700 text-pink-100"
                : "text-gray-600 font-semibold text-[15px] dark:text-zinc-100"
            }
          >
            <li className="list-none">
                <span>
                  <Gauge />
                </span>
            </li>
          </NavLink>

          <NavLink
            to="employees"
            className={({ isActive }) =>
              isActive
                ? "rounded-sm p-1 bg-linear-to-br from-pink-500 from-5%  to-95% to-pink-700 text-pink-100"
                : "text-gray-600 font-semibold text-[15px] dark:text-zinc-100"
            }
          >
            <li className="list-none">

                <span>
                  <UsersRound />
                </span>


            </li>
          </NavLink>

          <NavLink
            to="tasks"
            className={({ isActive }) =>
              isActive
                ? "rounded-sm p-1 bg-linear-to-br from-pink-500 from-5%  to-95% to-pink-700 text-pink-100"
                : "text-gray-600 font-semibold text-[15px] dark:text-zinc-100"
            }
          >
            <li className="list-none">

                <span>
                  <ListTodo />
                </span>


            </li>
          </NavLink>

          <NavLink
            to="analytics"
            className={({ isActive }) =>
              isActive
                ? "rounded-sm p-1 bg-linear-to-br from-pink-500 from-5%  to-95% to-pink-700 text-pink-100"
                : "text-gray-600 font-semibold text-[15px] dark:text-zinc-100"
            }
          >
            <li className="list-none">

                <span>
                  <ChartSpline />
                </span>


            </li>
          </NavLink>

          <NavLink
            to="notification"
            className={({ isActive }) =>
              isActive
                ? "rounded-sm p-1 bg-linear-to-br from-pink-500 from-5%  to-95% to-pink-700 text-pink-100"
                : "text-gray-600 font-semibold text-[15px] dark:text-zinc-100"
            }
          >
            <li className="list-none">

                <span>
                  <Bell />
                </span>


            </li>
          </NavLink>


          <NavLink
            to="setting"
            className={({ isActive }) =>
              isActive
                ? "rounded-sm p-1 bg-linear-to-br from-pink-500 from-5%  to-95% to-pink-700 text-pink-100"
                : "text-gray-600 font-semibold text-[15px] dark:text-zinc-100"
            }
          >
            <li className="list-none">

                <span>
                  <Settings />
                </span>


            </li>
          </NavLink>

</div>

    </>
  );
}

export default Sidebar;
