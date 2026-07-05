import { createContext, useEffect, useState } from "react";
import {  doc ,getDoc} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db } from "../firebaseConfig";
import { auth } from "../Auth";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profileDetails, setprofileDetails] = useState({
    fullName: "",
    newEmail: "",
    phoneNo: "",
    dept: "",
    bio: "",
  });

  const [currPass, setcurrPass] = useState("");

  const handleProfileChange = (e) => {
    setprofileDetails({
      ...profileDetails,
      [e.target.name]: e.target.value,
    });
  };

  // const handlePassChange=(e)=>{
  //   setchangePassword({
  //     [e.target.name]:e.target.value
  //   })

  //   console.log(e.target.value)
  // }

  const handleCurrChnage = (e) => {
    setcurrPass(e.target.value);
  };

  useEffect(() => {




   const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (!user) {
      console.log("User not logged in");
      return;
    }

    const docRef = doc(db, "user", user.uid);
    const docProfile = await getDoc(docRef);

    if (docProfile.exists()) {
      setprofileDetails(docProfile.data());
    }
  })


  return () => unsubscribe();
}, []);

  return (
    <>
      <ProfileContext.Provider
        value={{
          profileDetails,
          handleProfileChange,
          currPass,
          setcurrPass,
          handleCurrChnage,
        }}
      >
        {children}
      </ProfileContext.Provider>
    </>
  );
};
