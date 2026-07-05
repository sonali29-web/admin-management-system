import { data } from "react-router-dom";
import { db } from "./firebaseConfig";
import { collection, getDocs,addDoc,updateDoc,doc, deleteDoc } from "firebase/firestore"





export const fetchEmployee=async()=>{

const employeeData= await getDocs(collection(db,"employees"))

const employees=employeeData.docs.map((doc)=>({
    id:doc.id,
...doc.data()
}))


return employees;

}



export const apiData=async()=>{


 try{ const response = await fetch("http://localhost:3000/employees");
  const employeesList = await  response.json();

for (const employee of employeesList) {
  const {id,...rest}=employee
    const docRef = await addDoc(collection(db, "employees"), rest);
  console.log("Saved ID:", docRef.id);
  }

  console.log(employeesList)

  console.log("Data stored successfully in Firestore");

    return employeesList;

}catch(err){
  console.log(err.message)
}
}


export const editEmp=async(id,data)=>{
const empRef=doc(db,"employees",id)

await updateDoc(empRef,data)
}


export const deleteEmp=async(id)=>{

try{
await deleteDoc(doc(db,"employees",id))
console.log("deleted")
}catch(err){
  console.log(err.message)
}

}
