import { BrowserRouter, Routes, Route } from "react-router-dom";
import {lazy,Suspense} from "react"
import "./App.css";
const Login=lazy(()=>import  ("./pages/Auth/Login")) ;
const SignUp=lazy(()=> import  ("./pages/Auth/SignUp"))
import AppLayout from "./components/Layout/AppLayout";
const  AdminDashboard=lazy(()=>import   ("./pages/AdminDashboard/AdminDashboard")) ;
const Employees=lazy(()=>import  ("./pages/Employees/Employees"))
const Tasks=lazy(()=> import  ("./pages/Tasks/Tasks"))
const Analytics=lazy(()=>import  ( "./pages/Analytics/Analytics"))    ;
const Notification=lazy(()=> import ("./pages/Notification/Notification")) ;
const Setting=lazy(()=>import   ("./pages/Setting/Setting")) ;
const EmployeeForm=lazy(()=>import   ("./components/Employees/EmployeeForm")) ;
import { EmployeeProvider } from "./store/context/EmployeeContext";
import TasksForm from "./components/Tasks/TasksForm";
const Profile=lazy(()=>import  ( "./pages/Profile/Profile")) ;
import { ThemeProvider } from "./store/context/ThemeContext";
import { ProfileProvider } from "./store/context/ProfileContext";
import { TaskProvider } from "./store/context/TaskContext";
import { NotificationProvider } from "./store/context/NotificationContext";
import { FilterProvider } from "./store/context/FilterContext";
import Loader from "./components/Loader";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>


      <EmployeeProvider>
         <FilterProvider>
        <ThemeProvider>
          <ProfileProvider>
            <TaskProvider>
              <NotificationProvider>
        <BrowserRouter>
         <Suspense fallback={<Loader></Loader>}>
          <Routes>
            <Route element={<ProtectedRoute></ProtectedRoute>}>
            <Route path="/" element={<SignUp></SignUp>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>

            <Route path="/dashboard" element={<AppLayout></AppLayout>}>

              <Route index element={<AdminDashboard></AdminDashboard>}></Route>

              <Route path="employees" element={<Employees></Employees>}></Route>

              <Route path="tasks" element={<Tasks></Tasks>}></Route>

              <Route
                path="tasks/form"
                element={<TasksForm></TasksForm>}
              ></Route>

              <Route path="analytics" element={<Analytics></Analytics>}></Route>

              <Route
                path="notification"
                element={<Notification></Notification>}
              ></Route>
              <Route path="setting" element={<Setting></Setting>}></Route>

              <Route path="setting/profile" element={<Profile></Profile>}></Route>

              <Route
                path="employees/form"
                element={<EmployeeForm></EmployeeForm>}
              ></Route>
            </Route>
            </Route>
          </Routes>
          </Suspense>
        </BrowserRouter>
        </NotificationProvider>
        </TaskProvider>
        </ProfileProvider>
        </ThemeProvider>
        </FilterProvider>
      </EmployeeProvider>

    </>
  );
}

export default App;
