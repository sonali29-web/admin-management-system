import React, { useContext } from "react";
import { UserCheck } from "lucide-react";
import { EmployeeContext } from "../../../store/context/EmployeeContext";

const ActiveEmployee = () => {
  const { count } = useContext(EmployeeContext);

  return (
    <div className="w-full  bg-linear-to-br from-sky-300 to-sky-600  p-4 rounded-xl text-white font-bold shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-sky-600">Active Employees</h2>
      <div className="flex justify-start items-center gap-4 p-3">
        <span className="text-sky-600 bg-sky-200 p-2 rounded-xl">
          <UserCheck size={30} />
        </span>
        <h1 className="text-2xl">{count.totalActive}</h1>{" "}
      </div>

    </div>
  );
};

export default ActiveEmployee;
