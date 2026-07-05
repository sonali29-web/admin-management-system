import { createContext, useState, useContext, useEffect } from "react";
import { notificationDatafetch } from "../notification";
import { EmployeeContext } from "./EmployeeContext";
import { TaskContext } from "./TaskContext";
import { collection, onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const { task,taskForm } = useContext(TaskContext);

  const { formdata ,employees} = useContext(EmployeeContext);

  const [notification, setNotification] = useState([]);

  const newNotification = {
    type: "employeeAdd",
    title: "New Employee Added",
    message: `${formdata.name} has been added to the employee list.`,
    time: new Date().toLocaleTimeString(),
  };



  const empUpdateNotication={
     type: "employeeUpdate",
    title: "Employee Updated",
    message: `${formdata.name} has been Updated to the employee list.`,
    time: new Date().toLocaleTimeString(),
  }



    const taskNotification = {
    type: "taskAdd",
    title: "Task Assigned",
    message: `A new task has been assigned to ${taskForm.employeeName}`,
    time: new Date().toLocaleTimeString(),
  };


  const taskEditNotification = {
    type: "taskEdit",
    title: "Task Edited",
    message: `A new task has been Edited to ${taskForm.employeeName}`,
    time: new Date().toLocaleTimeString(),
  };



  useEffect(() => {
    const unNotification = onSnapshot(
      collection(db, "notification"),
      (snapshot) => {
        const notification = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setNotification(notification);
      },
    );

    return () => unNotification();
  }, []);

  useEffect(() => {
    const loadEmployees = async () => {
      const data = await notificationDatafetch();
      setNotification(data);
    };

    loadEmployees();
  }, []);

  const [notiPopUp,setNotiPopUp]=useState(false)

  const [notiEnabled, setnotiEnabled]=useState(true)

  return (
    <>
      <NotificationContext.Provider
        value={{
          taskNotification,
          taskEditNotification,
          newNotification,
          empUpdateNotication,
          notification,
          setNotification,
          setNotiPopUp,
          notiPopUp,
          setnotiEnabled,
          notiEnabled
        }}
      >
        {children}
      </NotificationContext.Provider>
    </>
  );
};
