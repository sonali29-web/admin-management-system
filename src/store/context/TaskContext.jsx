import { createContext, useState, useEffect, useContext } from "react";
import { taskApi, fetchTask } from "../taskService";
import { collection, onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useDebounce } from "../../hooks/useDebounce";
import { EmployeeContext } from "./EmployeeContext";
import { AuthContext } from "./AuthContext";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const { search } = useContext(EmployeeContext);

  const {setLoading}=useContext(AuthContext)

  const [taskId, setTaskId] = useState(null);

  const [taskEdit, setTaskedit] = useState(false);

  const [task, settask] = useState([]);

  const debounceSearchValue = useDebounce(search, 500);

  const filterTask = task.filter((taskTitle) =>
    (taskTitle.employeeName ?? "")
      .toLowerCase()
      .includes(debounceSearchValue.toLowerCase()),
  );

  useEffect(() => {
    const loadTask = async () => {
      setLoading(true)
      try{
 const data = await fetchTask();
      settask(data);


      }catch(err){
        console.log(err.message)
      }finally{
  setLoading(false)
      }

    };

    loadTask();
  }, []);

  const [taskForm, settaskForm] = useState({
    employeeName: "",
    taskTitle: "",
    department: "",
    role: "",
    deadline: "",
    priority: "",
    status: "",
  });

  const count = {
    TotalCompletedTask: task.filter((t) => t.status === "Completed").length,
  };

  useEffect(() => {
    const unTask = onSnapshot(collection(db, "empTask"), (snapshot) => {
      const task = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      settask(task);
    });

    return () => unTask();
  }, []);

  return (
    <>
      <TaskContext.Provider
        value={{
          count,
          filterTask,
          taskForm,
          settaskForm,
          taskId,
          setTaskId,
          taskEdit,
          setTaskedit,
          task,
          settask,
        }}
      >
        {children}
      </TaskContext.Provider>
    </>
  );
};
