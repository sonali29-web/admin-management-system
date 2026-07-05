import React, { useContext, useState } from "react"
import { EmployeeContext } from "../../store/context/EmployeeContext"
import { EditTask, fetchTask } from "../../store/taskService"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../store/firebaseConfig"
import { addTasknoti } from "../../store/taskService"
import { TaskContext } from "../../store/context/TaskContext"
import { NotificationContext } from "../../store/context/NotificationContext"
import { notificationDatafetch } from "../../store/notification"
import { useNavigate } from "react-router-dom"

const TasksForm = () => {
  console.log("taskfrom render");

  const navigate = useNavigate();

  const { employees } = useContext(EmployeeContext);
  const {
    taskForm,
    settaskForm,
    taskId,
    setTaskId,
    taskEdit,
    setTaskedit,
    settask,
  } = useContext(TaskContext);

  const {
    notiEnabled,
    setNotification,
    taskNotification,
    setNotiPopUp,
    taskEditNotification,
  } = useContext(NotificationContext);

  const handletaskChange = (e) => {
    if (e.target.name === "employeeName") {
      const selectedEmp = employees.find((emp) => emp.name === e.target.value);

      settaskForm({
        ...taskForm,
        employeeName: e.target.value,
        department: selectedEmp?.department || "",
        role: selectedEmp?.role || "",
        [e.target.name]: e.target.value,
      });
    } else {
      settaskForm({
        ...taskForm,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleCancel = () => {
    settaskForm({
      employeeName: "",
      taskTitle: "",
      department: "",
      role: "",
      deadline: "",
      priority: "",
      status: "",
    });
  };

  const handletaskSubmit = async (e) => {
    e.preventDefault();

    try {
      if (taskEdit) {
        await EditTask(taskId, taskForm);

        await addTasknoti(taskEditNotification);

        const notiData = notificationDatafetch();

        setNotification(notiData);
        if (notiEnabled) {
          setNotiPopUp("Task Updated");
          setTimeout(() => {
            setNotiPopUp("");
          }, 3000);
        }

        navigate("/dashboard/task");
      } else {
        await addDoc(collection(db, "empTask"), taskForm);
        const data = await fetchTask();
        settask(data);
      }

      await addTasknoti(taskNotification);
      const notiData = notificationDatafetch();

      setNotification(notiData);

      if (notiEnabled) {
        setNotiPopUp("Task Added Successfully");

        setTimeout(() => {
          setNotiPopUp("");
        }, 3000);
      }
    } catch (err) {
      console.log(err);
    }

    setTaskedit(false);
    setTaskId(null);
    settaskForm({
      employeeName: "",
      taskTitle: "",
      department: "",
      role: "",
      deadline: "",
      priority: "",
      status: "",
    });

    navigate("/dashboard/task");
  };

  return (
    <div className="p-4">
      <div className="bg-white rounded-xl w-full min-h-screen p-2 dark:bg-zinc-900 ">
        <div className="flex flex-col p-4">
          <h2 className="text-3xl font-semibold p-1 text-gray-700  dark:text-zinc-100">
            Create Task
          </h2>
          <p className="text-sm text-gray-500">
            Add a new task for an employee
          </p>

          <form
            className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 p-4"
            onSubmit={handletaskSubmit}
          >
            {/* Employee */}
            <div className="flex flex-col gap-1">
              <label className="text-[13px] font-semibold dark:text-zinc-100">
                Select Employee
              </label>

              <select
                name="employeeName"
                value={taskForm.employeeName}
                onChange={handletaskChange}
                className="border border-gray-300 p-2 rounded-lg outline-none   dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700"
              >
                <option value="">Employee</option>
                {employees.map((emp) => (
                  <option key={emp.id} value={emp.name}>
                    {emp.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Task */}
            <div className="flex flex-col gap-1">
              <label className="text-[13px] font-semibold   dark:text-zinc-100">
                Task
              </label>

              <input
                name="taskTitle"
                value={taskForm.taskTitle}
                onChange={handletaskChange}
                type="text"
                placeholder="Task Name"
                className="w-full border border-gray-300 p-2 rounded-lg outline-none dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-700"
              />
            </div>

            {/* Department */}
            <div className="flex flex-col gap-1">
              <label className="text-[13px] font-semibold dark:text-zinc-100">
                Department
              </label>

              <input
                name="department"
                readOnly
                value={taskForm.department}
                onChange={handletaskChange}
                className="border border-gray-300 p-2 rounded-lg outline-none dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-700"
                placeholder="Department"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[13px] font-semibold dark:text-zinc-100">
                Role
              </label>

              <input
                name="role"
                readOnly
                value={taskForm.role}
                onChange={handletaskChange}
                className="border border-gray-300 p-2 rounded-lg outline-none dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-700"
                placeholder="Role "
              />
            </div>

            {/* Priority */}
            <div className="flex flex-col gap-1">
              <label className="text-[13px] font-semibold dark:text-zinc-100">
                Priority
              </label>

              <select
                name="priority"
                value={taskForm.priority}
                onChange={handletaskChange}
                className=" border border-gray-300 p-2 rounded-lg outline-none dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700"
              >
                <option value="">Priority</option>

                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            {/* Deadline */}
            <div className="flex flex-col gap-1">
              <label className="text-[13px] font-semibold dark:text-zinc-100">
                Deadline
              </label>

              <input
                name="deadline"
                value={taskForm.deadline}
                onChange={handletaskChange}
                type="date"
                className="w-full border border-gray-300 p-2 rounded-lg outline-none dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700"
              />
            </div>

            {/* Status */}
            <div className="flex flex-col gap-1">
              <label className="text-[13px] font-semibold dark:text-zinc-100">
                Status
              </label>

              <select
                name="status"
                value={taskForm.status}
                onChange={handletaskChange}
                className="border border-gray-300 p-2 rounded-lg outline-none dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700"
              >
                <option value="">Status</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="col-span-full flex justify-end gap-4 ">
              <button
                onClick={handleCancel}
                type="button"
                className="border border-gray-300 px-4 py-2 rounded-lg dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-700"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="bg-linear-to-br from-pink-500 to-pink-700 px-4 py-2 rounded-lg text-white"
              >
                {taskEdit ? "Update" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TasksForm;
