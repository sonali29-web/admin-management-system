import React, { useContext, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { EmployeeContext } from "../../../store/context/EmployeeContext";

// const data = [
//   { department: "HR", employees: 10 },
//   { department: "Development", employees: 25 },
//   { department: "Design", employees: 15 },
//    { department: "Finance", employees: 10 },
//     { department: "Sales", employees: 15 },
// ];

const Departments = () => {
  const { employees } = useContext(EmployeeContext);

  const deptcount = useMemo(
    () =>
      employees.reduce((acc, emp) => {
        const dept = emp.department || "unknown";

        acc[dept] = (acc[dept] || 0) + 1;

        return acc;
      }, {}),
    [employees],
  );

  const chartDeptData = Object.entries(deptcount).map(
    ([department, count]) => ({ department, count }),
  );

  return (
    <div className="bg-white p-2  rounded-lg shadow-lg  dark:bg-zinc-900">
      <h4 className="text-[15px] font-semibold mb-4 dark:text-zinc-100">
        Department wise Employees
      </h4>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartDeptData} barCategoryGap="20%" barGap={2}>
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a855f7" stopOpacity={1} />
              <stop offset="100%" stopColor="#7e22ce" stopOpacity={0.5} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="dark:opacity-20" />
          <XAxis
            dataKey="department"
            tick={{ fontSize: 12 }}
            angle={-0}
            interval={0}
            textAnchor="middle"
            tickFormatter={(value) =>
              value.length > 9 ? value.slice(0, 5) + "..." : value
            }
          ></XAxis>
          <YAxis
            tick={{ fontSize: 12, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
            width={20}
          ></YAxis>
          <Tooltip
            contentStyle={{
              backgroundColor: "#111827",
              border: "1px solid #374151",
              borderRadius: "14px",
            }}
            labelStyle={{
              color: "#c4b5fd",
            }}
            itemStyle={{
              color: "#ffffff",
            }}
          ></Tooltip>
          <Bar
            dataKey="count"
            fill="url(#colorSales)"
            radius={[0, 0, 0, 0]}
            barSize={15}
          ></Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Departments;
