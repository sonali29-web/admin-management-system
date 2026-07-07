import React, { useContext, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  CartesianGrid,
} from "recharts";
import { EmployeeContext } from "../../../store/context/EmployeeContext";


const EmployeeGrowth = () => {
  const { employees } = useContext(EmployeeContext);

const last4Months=useMemo(()=> {

  const now = new Date();

  const arr = [];

  for (let i = 4; i >= 1; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);

    arr.push({
      year: date.getFullYear(),
      month: date.getMonth(),
      label: date.toLocaleString("default", { month: "short" }),
    });
  }

  return arr;

},[])

  const employeeGrowth = useMemo(() => {
    return last4Months.map((m) => {
      const count = employees.filter((emp) => {
        const d = new Date(emp.joiningDate);

        return d.getFullYear() === m.year && d.getMonth() === m.month;
      }).length;

      return {
        month: m.label,
        joined: count,
      };
    });
  }, [employees, last4Months]);

  return (
    <div className="bg-white p-2 rounded-lg shadow-lg dark:bg-zinc-900">
      <h2 className="text-[15px] font-semibold mb-4 dark:text-zinc-100">
        Employees Growth
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={employeeGrowth}>
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f97316" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="dark:opacity-20" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }}></XAxis>
          <YAxis
            tick={{ fontSize: 12, fill: "#9ca3af" }}
            width={30}
            axisLine={false}
            tickLine={false}
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
          <Area
            type="monotone"
            dataKey="joined"
            stroke="#ec4899"
            strokeWidth={3}
            fill="url(#colorSales)"
            dot={{ r: 5, fill: "#ec4899", stroke: "#fff", strokeWidth: 2 }}
          ></Area>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmployeeGrowth;
