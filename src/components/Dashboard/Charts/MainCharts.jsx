import React from "react";
import Departments from "./Departments";
import EmployeeGrowth from "./EmployeeGrowth";

const MainCharts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 ">
      <div className="lg:col-span-2">
        <Departments></Departments>
      </div>

      <div className="lg:col-span-1">
        <EmployeeGrowth></EmployeeGrowth>
      </div>
    </div>
  );
};

export default MainCharts;
