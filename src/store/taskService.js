import { db } from "./firebaseConfig";
import { collection,getDocs,addDoc, doc, deleteDoc, updateDoc} from "firebase/firestore";


export const taskApi=async()=>{

try{const response=await fetch("http://localhost:3000/tasks")
const taskData= await response.json();

console.log("my task api data",taskData);

for(const task of taskData){
    const {id,...rest}=task
 const taskDoc=await addDoc(collection(db,"empTask"),rest)
 console.log(taskDoc.id)
}
console.log(taskData)
console.log("task data added succefully",taskData)
return taskData;
}catch(err){
    console.log(err.message)
}
}

export const fetchTask=async()=>{

const task=await getDocs(collection(db,"empTask"))

const empTask=task.docs.map((doc)=>({
 id:doc.id,
 ...doc.data()
}))

return empTask;

}

export const addTasknoti=async(taskNotification)=>{
  await addDoc(collection(db,"notification"),taskNotification)
}


export const deleteTask=async(id)=>{
try{
await deleteDoc(doc(db,"empTask",id))
console.log("task deleted")
}catch(err){
console.log(err.message)
}


}


export const EditTask=async(id,data)=>{
const taskRef=doc(db,"empTask",id)

await updateDoc(taskRef,data)

console.log("edit task successfully")
}



export const TaskCompleted=async(id)=>{
await updateDoc(doc(db,"empTask",id),{
  status:"Completed"
})
}

// export const deleteAllTasks = async () => {
//   const snapshot = await getDocs(collection(db, "empTask"));

//   for (const document of snapshot.docs) {
//     await deleteDoc(doc(db, "empTask", document.id));
//   }

//   console.log("All empTask documents deleted");
// };