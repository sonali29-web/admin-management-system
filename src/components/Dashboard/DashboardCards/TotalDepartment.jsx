import React from "react";
import { Building2 } from "lucide-react";
import { EmployeeContext } from "../../../store/context/EmployeeContext";
import { useContext } from "react";

const TotalDepartment = () => {
  const { count } = useContext(EmployeeContext);

  return (
    <div className=" w-full   bg-linear-to-br  from-purple-300 from-5%  to-95% to-purple-600 p-4  rounded-xl text-white font-bold shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-purple-700">Total Departments</h2>
      <div className="flex justify-start items-center gap-4 p-3">
        <span className="text-purple-700 bg-purple-200 p-2 rounded-xl">
          <Building2 size={30} />
        </span>
        <h1 className="text-2xl">{count.totalDept}</h1>{" "}
      </div>

    </div>
  );
};

export default TotalDepartment;
