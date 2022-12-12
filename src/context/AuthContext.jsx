import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../../config/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { Alert } from "react-native";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState("user");
  const [loading, setLoading] = useState(false);

  function signup(username, email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        Alert.alert("Account Created");

        return updateProfile(auth.user, {
          displayName: username,
        });
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        throw new Error(error.errorMessage);

        // ..
      });
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // Signed in
        const user = res.user;
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        throw new Error(error.errorMessage);

        // ..
      });
  }
  function logout() {
    return signOut(auth)
      .then((res) => {
        // Signed in
        const user = res.user;
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        throw new Error(error.errorMessage);

        // ..
      });
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email)
      .then((res) => {
        // Signed in
        // const user = res.user;
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        throw new Error(error);
        // ..
      });
  }

  function update_email(email) {
    return updateEmail(auth.currentUser, email)
      .then((res) => {
        // Signed in
        // const user = res.user;
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        throw new Error(error);
      });
  }

  function update_password(password) {
    return updatePassword(auth.currentUser, password)
      .then((res) => {
        // Signed in
        // const user = res.user;
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        throw new Error(error);
      });
  }

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return subscribe;
  }, []);
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
