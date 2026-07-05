import React from "react";
import { UserRoundPlus } from "lucide-react";
import { useContext } from "react";
import { TaskContext } from "../../../store/context/TaskContext";

const NewEmployees = () => {
  const { count } = useContext(TaskContext);

  return (
    <div className="w-full  bg-linear-to-br from-yellow-300  to-orange-600 p-4 rounded-xl text-white font-bold  shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-orange-600">Completed Task</h2>
      <div className="flex justify-start items-center gap-4 p-3">
        <span className="text-orange-600 bg-orange-200 p-2 rounded-xl">
          <UserRoundPlus size={30} />
        </span>
        <h1 className="text-2xl">{count.TotalCompletedTask}</h1>{" "}
      </div>

    </div>
  );
};

export default NewEmployees;
