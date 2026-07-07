import app from "./firebaseConfig";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  EmailAuthProvider,
  updatePassword,
  reauthenticateWithCredential,
  updateEmail,
} from "firebase/auth";

export const auth = getAuth(app);

export const handleSignUp = async (email, password) => {
  try {
    const signup = await createUserWithEmailAndPassword(auth, email, password);

    // get user

    const user = signup.user;

    return user;
  } catch (err) {
    console.log(err.message);
  }
};

export const handleLogin = async (email, password) => {
  try {
    const userlogin = await signInWithEmailAndPassword(auth, email, password);

    // get user
    const user = userlogin.user;
    return user;
  } catch (err) {
    console.log(err.message);
  }
};

export const handleChangePassword = async (currPass, newPass) => {
  try {
    const user = auth.currentUser;

    const myoldpassdata = EmailAuthProvider.credential(user.email, currPass);

    await reauthenticateWithCredential(user, myoldpassdata);

    await updatePassword(user, newPass);
  } catch (err) {
    console.log(err.message);
  }
};

export const handleUpdateEmail = async (newEmail, currPass) => {
  try {
    const user = auth.currentUser;

    const myOldEmail = EmailAuthProvider.credential(user.email, currPass);

    await reauthenticateWithCredential(user, myOldEmail);

    await updateEmail(user, newEmail);

    await auth.currentUser.reload();
    console.log("update email", newEmail);
    console.log(auth.currentUser.email);
  } catch (err) {
    console.log(err.message);
  }
};
