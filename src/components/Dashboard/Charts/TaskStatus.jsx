import { Heading2 } from "lucide-react";
import React, { useContext, useMemo } from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

import { TaskContext } from "../../../store/context/TaskContext";

const colors = ["url(#gradPink)", "url(#gradBlue)", "url(#gradPurple)"];

const TaskStatus = () => {
  const statusColors = {
    Pending: "bg-gradient-to-r from-pink-400 to-pink-700",
    "In Progress": "bg-gradient-to-r from-blue-400 to-blue-700",
    Completed: "bg-gradient-to-r from-purple-400 to-purple-700",
  };

  const { task } = useContext(TaskContext);

  const stausCount = useMemo(() => {
    return task.reduce((acc, taskData) => {
      const status = taskData.status || "unknown";

      acc[status] = (acc[status] || 0) + 1;

      return acc;
    }, {});
  }, [task]);

  const statusData = Object.entries(stausCount).map(([status, count]) => ({
    status,
    count,
  }));

  const total = statusData.reduce((acc, item) => acc + item.count, 0);

  const withPercent = statusData.map((item) => ({
    ...item,
    percent: Math.round((item.count / total) * 100),
  }));

  const completedPercent =
    withPercent.find((item) => item.status === "Completed")?.percent || 0;

  return (
    <div className="bg-white p-3  rounded-lg shadow-sm dark:bg-zinc-900">
      <h3 className="text-[15px] font-semibold dark:text-zinc-100 ">
        Task Status
      </h3>
      <div className="flex justify-around items-center ">
        <PieChart width={300} height={300}>
          <defs>
            <linearGradient id="gradPink" x1="0" y1="0" x2="1" y2="1">
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#f9a8d4" />
            </linearGradient>

            <linearGradient id="gradBlue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#bae6fd" />
            </linearGradient>

            <linearGradient id="gradPurple" x1="0" y1="0" x2="1" y2="1">
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#e9d5ff" />
            </linearGradient>
          </defs>
          <Pie
            data={statusData}
            cx="50%"
            cy="50%"
            dataKey="count"
            nameKey="status"
            innerRadius={60}
            outerRadius={90}
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
          >
            {statusData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index]}
                stroke="#fff"
                strokeWidth={2}
              ></Cell>
            ))}
          </Pie>
          <Tooltip />

          <text
            x={150}
            y={140}
            textAnchor="middle"
            fontSize={24}
            fontWeight="bold"
          >
            {completedPercent}%
          </text>

          <text x={150} y={170} textAnchor="middle" fontSize={20}>
            completed
          </text>
        </PieChart>

        <div className="flex flex-col gap-2">
          {withPercent.map((status,index) => (
            <div key={index} className="flex justify-around items-center p-2">
              <span
                className={`w-3 h-3 bg-pink-600 rounded-full  ${statusColors[status.status]} dark:text-zinc-100`}
              ></span>
              <h2 className="font-semibold text-gray-800 p-1 dark:text-zinc-100">
                {status.status}
              </h2>
              <h2 className="font-semibold text-gray-800 p-3 dark:text-zinc-100">
                {status.count}
              </h2>
              <h2 className="dark:text-zinc-100">({status.percent}%)</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskStatus;
