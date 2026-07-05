import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { TaskContext } from "../../store/context/TaskContext";

const RecentTaskTable = () => {
  const navigate = useNavigate();

  const viewAllTask = () => {
    navigate("tasks");
  };

  const { task } = useContext(TaskContext);

  const recentTask = task
    .sort((a, b) => new Date(b.deadline) - new Date(a.deadline))
    .slice(0, 4);

  const priorityColors = {
    High: "bg-pink-100 text-pink-500",
    Medium: "bg-orange-100 text-orange-500",
    Low: "bg-green-100 text-green-500",
  };

  return (
    <div className="flex flex-col gap-2 bg-white rounded-lg p-4 dark:bg-zinc-900">
      <div className="flex justify-between items-center gap-2">
        <h2 className="font-semibold text-md dark:text-zinc-100">
          Recent Task
        </h2>
        <button
          className="bg-linear-to-r from-pink-500 to-pink-700 text-white p-2 text-sm rounded-md dark:text-zinc-100"
          onClick={viewAllTask}
        >
          View All
        </button>
      </div>
      <div className="bg-white dark:bg-zinc-800 p-2">
        {recentTask.map((latestTask) => (
          <div key={latestTask.id} className="flex justify-between items-center p-2 border-b border-gray-300">
            <div className="flex flex-col gap-1 ">
              <h2 className="text-md text-gray-900 font-small dark:text-zinc-100">
                {latestTask.taskTitle}
              </h2>
              <p className="text-sm text-gray-400">
                Due: {latestTask.deadline}
              </p>
            </div>
            <div
              className={`p-2 bg-gray-300 rounded-lg text-sm font-semibold ${priorityColors[latestTask.priority]}`}
            >
              {latestTask.priority}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTaskTable;
