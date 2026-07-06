import React, { useContext } from "react";
import { db } from "../../store/firebaseConfig";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { auth } from "../../store/Auth";
import { handleUpdateEmail } from "../../store/Auth";
import { ProfileContext } from "../../store/context/ProfileContext";
import { AuthContext } from "../../store/context/AuthContext";

const Profile = () => {
  const { profileDetails, handleProfileChange, currPass, handleCurrChnage,savedProfile,setsavedProfile } =
    useContext(ProfileContext);

const {user}=useContext(AuthContext)

  const handleProfileSave = async (e) => {
    e.preventDefault();

    try {
      await handleUpdateEmail(profileDetails.newEmail, currPass);

      console.log(currPass);

      const profileRef = doc(db, "user", user.uid);

      await setDoc(profileRef, profileDetails, { merge: true });

      setsavedProfile(profileDetails)

      console.log("update email");

      console.log("save data added/and update");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        <div className=" p-4 rounded-lg flex-col gap-4 bg-white dark:bg-zinc-900 ">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl text-gray-600 font-semibold dark:text-zinc-100">
              Profile Information
            </h2>
            <p className="text-sm dark:text-zinc-600">
              Update your personal details
            </p>
          </div>

          <form
            className="grid  grid-cols-1 md:grid-cols-2 gap-6 p-4"
            onSubmit={handleProfileSave}
          >
            <div className="flex flex-col gap-1 p-2 ">
              <label className="dark:text-zinc-100">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={profileDetails.fullName}
                onChange={handleProfileChange}
                placeholder="full Name"
                className=" w-full outline-none p-3 border border-gray-400 rounded-lg dark:text-zinc-400 dark:border-zinc-600"
              />
            </div>

            <div className="flex flex-col gap-1 p-2">
              <label className="dark:text-zinc-100">Email Address</label>
              <input
                type="email"
                name="newEmail"
                value={profileDetails.newEmail}
                onChange={handleProfileChange}
                placeholder="Email Address"
                className="w-full outline-none p-2 border border-gray-400 rounded-lg dark:text-zinc-400 dark:border-zinc-600"
              />
            </div>

            <div className="flex flex-col gap-1 p-2">
              <label className="dark:text-zinc-100">Current Password</label>
              <input
                type="password"
                name="currPass"
                value={currPass}
                onChange={handleCurrChnage}
                placeholder="Current Password"
                className="w-full outline-none p-2 border border-gray-400 rounded-lg dark:text-zinc-400 dark:border-zinc-600"
              />
            </div>

            <div className="flex flex-col gap-1 p-2">
              <label className="dark:text-zinc-100">Phone Number</label>
              <input
                type="text"
                name="phoneNo"
                value={profileDetails.phoneNo}
                onChange={handleProfileChange}
                placeholder="phone Number"
                className="w-full outline-none p-2 border border-gray-400 rounded-lg dark:text-zinc-400 dark:border-zinc-600"
              />
            </div>

            <div className="flex flex-col gap-1 p-2">
              <label className="dark:text-zinc-100">Department</label>
              <input
                type="text"
                name="dept"
                value={profileDetails.dept}
                onChange={handleProfileChange}
                placeholder="department"
                className="w-full outline-none p-2 border border-gray-400 rounded-lg dark:text-zinc-400 dark:border-zinc-600"
              />
            </div>

            <div className="flex flex-col gap-1 p-2">
              <label className="dark:text-zinc-100">Bio</label>
              <textarea
                name="bio"
                value={profileDetails.bio}
                onChange={handleProfileChange}
                className=" w-full outline-none p-2 border border-gray-400 rounded-lg"
              ></textarea>
            </div>

            <div className=" col-span-full flex justify-end ">
              <button
                type="submit"
                className="bg-linear-to-r from-pink-400 to-pink-700 text-white p-2 px-4 rounded-lg font-semibold"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
