import {
  createContext,
  useState,
  useEffect,
  useContext,
  useReducer,
} from "react";
import { fetchEmployee, apiData } from "../employeeservice";

import { useDebounce } from "../../hooks/useDebounce";
import { collection, onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { auth } from "../Auth";
import { AuthContext } from "./AuthContext";


export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  //   useEffect(()=>{

  // apiData()
  //   },[])

  const { setLoading } = useContext(AuthContext);

  const [employees, setEmployee] = useState([]);

  useEffect(() => {
    const unEmp = onSnapshot(collection(db, "employees"), (snapshot) => {
      const employees = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setEmployee(employees);
    });
    return () => {
      unEmp();
    };
  }, []);

  const [edit, setEdit] = useState(false);

  const [empId, setEmpId] = useState(null);

  const [search, setSearch] = useState("");

  const [formdata, setformdata] = useState({
    image: null,
    name: "",
    email: "",
    empId: "",
    department: "",
    role: "",
    status: "",
    joiningDate: "",
  });

  // const handleProfileChange=(e)=>{
  //   setprofileDetails({
  //     ...profileDetails,
  //     [e.target.name]:e.target.value
  //   })

  //   console.log(e.target.value)
  // }

  // const handlePassChange=(e)=>{
  //   setchangePassword({
  //     [e.target.name]:e.target.value
  //   })

  //   console.log(e.target.value)
  // }

  const debounceSearchValue = useDebounce(search, 500);

  //  useEffect(()=>{
  //   console.log("api call")
  // apiData()
  //   console.log("data fetch successfully")
  //  },[])

  useEffect(() => {
    const loadEmployees = async () => {
      setLoading(true);
      try {
        const data = await fetchEmployee();
        setEmployee(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadEmployees();
  }, []);

  const count = {
    totalEmployess: employees.length,
    totalDept: new Set(employees.map((emp) => emp.department)).size,
    totalActive: employees.filter((emp) => emp.status === "Active").length,
  };

  return (
    <>
      <EmployeeContext.Provider
        value={{
          count,
          empId,
          setEmpId,
          edit,
          setEdit,
          employees,
          setEmployee,
          search,
          setSearch,
          formdata,
          setformdata,
          debounceSearchValue,
        }}
      >
        {children}
      </EmployeeContext.Provider>
    </>
  );
};
