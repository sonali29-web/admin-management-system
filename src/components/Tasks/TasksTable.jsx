import React, { useState } from "react";
import { useContext } from "react";
import { Check, PenLine, Trash2 } from "lucide-react";
import { deleteTask, TaskCompleted } from "../../store/taskService";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../../store/context/TaskContext";
import { NotificationContext } from "../../store/context/NotificationContext";
import { notificationDatafetch } from "../../store/notification";
import { addTasknoti } from "../../store/taskService";
const TasksTable = () => {
  console.log("task table render");

  const {
    task,
    taskId,
    setTaskId,
    taskEdit,
    setTaskedit,
    settaskForm,
    filterTask,
  } = useContext(TaskContext);

  const { notiEnabled, setNotiPopUp, setNotification } =
    useContext(NotificationContext);

  const navigate = useNavigate();

  const priorityColors = {
    High: "bg-pink-100 text-pink-500",
    Medium: "bg-orange-100 text-orange-500",
    Low: "bg-green-100 text-green-500",
  };

  const handleDeleteTask = async (id, name) => {
    deleteTask(id);
    await addTasknoti({
      type: "taskDel",
      title: "Task Deleted",
      message: `A task assigned to ${name} has been Deleted  `,
      time: new Date().toLocaleTimeString(),
    });

    const notiData = await notificationDatafetch();

    setNotification(notiData);

    if (notiEnabled) {
      setNotiPopUp("Task deleted Successfully");

      setTimeout(() => setNotiPopUp(""), 3000);
    }
  };

  const handleTaskEdit = (task) => {
    setTaskedit(true);
    setTaskId(task.id);

    settaskForm({
      employeeName: task.employeeName,
      taskTitle: task.taskTitle,
      department: task.department,
      role: task.role,
      deadline: task.deadline,
      priority: task.deadline,
      status: task.status,
    });

    navigate("form");
  };

  const handleTaskCompleted = (id) => {
    TaskCompleted(id);
  };

  return (
    <div className="bg-white dark:bg-zinc-900 text-zinc-100 overflow-x-auto w-full  p-2">
      <table className="border-collapse w-full rounded-xl ">
        <thead>
          <tr className="bg-linear-to-br from-pink-500 to-pink-700 hover:bg-gray-50 transition text-white">
            <th className="text-left p-3 border-b border-gray-200">
              Task Name
            </th>
            <th className="text-left p-3 border-b border-gray-200">Employee</th>
            <th className="text-left p-3 border-b border-gray-200">Dept</th>
            <th className="text-left p-3 border-b border-gray-200">priority</th>
            <th className="text-left p-3 border-b border-gray-200">Status</th>
            <th className="text-left p-3 border-b border-gray-200">DeadLine</th>
            <th className="text-left p-3 border-b border-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filterTask.map((emptask) => (
            <tr key={emptask.id}>
              <td className="px-4 md:p-3 border-b border-gray-100 text-black dark:text-zinc-100 ">
                <div className="flex items-center gap-4 ">
                  <div
                    className="w-4 h-4 md:w-4  md-h-5  shrink-0  rounded-full border border-gray-700 "
                    onClick={() => handleTaskCompleted(emptask.id)}
                  >
                    {emptask.status === "Completed" ? (
                      <Check className="text-green-600 font-bold" size={15} />
                    ) : null}
                  </div>
                  <span>{emptask.taskTitle}</span>
                </div>
              </td>
              <td className="p-3 border-b border-gray-100 text-black dark:text-zinc-100">
                {emptask.employeeName}
              </td>
              <td className="p-3 border-b border-gray-100 text-black dark:text-zinc-100">
                {emptask.department}
              </td>

              <td className=" border-b border-gray-100">
                <div
                  className={` flex justify-center items-center text-center p-2  bg-gray-300 rounded-lg text-sm font-semibold ${priorityColors[emptask.priority]}`}
                >
                  {emptask.priority}
                </div>
              </td>

              <td className="p-3 border-b border-gray-100 text-black dark:text-zinc-100">
                {emptask.status}
              </td>
              <td className="p-3 border-b border-gray-100 text-black dark:text-zinc-100">
                {emptask.deadline}
              </td>
              <td className="p-3 border-b border-gray-100 text-black dark:text-zinc-100">
                <div className="flex items-center gap-2">
                  <PenLine
                    onClick={() => handleTaskEdit(emptask)}
                    className="text-orange-400 hover:scale-110 cursor-pointer"
                    size={20}
                  />{" "}
                  <Trash2
                    onClick={() =>
                      handleDeleteTask(emptask.id, emptask.employeeName)
                    }
                    className="text-red-600 hover:scale-110 cursor-pointer"
                    size={20}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TasksTable;
