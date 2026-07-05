import { db } from "./firebaseConfig";
import { collection,addDoc,getDoc,doc, onSnapshot, getDocs, deleteDoc } from "firebase/firestore";




export const addNotiData=async(notification)=>{

await addDoc(collection(db,"notification"),notification);
console.log("notidata added")

}

export const notificationDatafetch=async()=>{
const data=await getDocs(collection(db,"notification"))

const notificationData=data.docs.map((doc)=>({
id:doc.id,
...doc.data()
}))
return notificationData

}


export const deleteNotification=async(id)=>{
    try{await deleteDoc(doc(db,"notification",id))
        console.log("deleted notification")
    }
    catch(err){
        console.log(err.message)
    }

}