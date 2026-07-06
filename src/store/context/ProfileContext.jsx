import { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db } from "../firebaseConfig";
import { auth } from "../Auth";
import { AuthContext } from "./AuthContext";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

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
    if (loading) return;
    if (!user) return;
    const fetchProfile = async () => {
      try {
        const snapshot = await getDoc(doc(db, "user", user.uid));


        if (snapshot.exists()) {
          setprofileDetails(snapshot.data());
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchProfile();
  }, [user, loading]);

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
