import React, { useContext } from "react";
import { UsersRound } from "lucide-react";
import { EmployeeContext } from "../../../store/context/EmployeeContext";

const TotalEmployees = () => {
  const { count } = useContext(EmployeeContext);

  return (
    <div className="w-full p-4 rounded-xl bg-linear-to-br from-pink-300 from-5%  to-95% to-pink-600 text-white font-bold shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-pink-600 ">Total Employees</h2>
      <div className="flex justify-start items-center gap-4 p-3">
        <span className=" text-pink-600 bg-pink-200 p-2 rounded-xl">
          <UsersRound size={30} />
        </span>
        <h1 className="text-2xl text-pink">{count.totalEmployess}</h1>{" "}
      </div>

    </div>
  );

};

export default TotalEmployees;
