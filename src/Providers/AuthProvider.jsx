import { createContext, useEffect, useState } from "react";
import { appInfo } from "../Firebase/Firebase.config";
import { GoogleAuthProvider, updateProfile } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// import Loading from "../Components/Loading/Loading";


import { saveUser } from "../Pages/Utils/Utils";
import useAxiosSecure from "../Hooks/useAxiosSecure";

export  const AuthContext = createContext(null);
const auth = getAuth(appInfo);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const axiosSecure = useAxiosSecure();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({});

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInwithGoogle = () => {
    const provider = new GoogleAuthProvider();

    setLoading(true);

    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser?.email) {
        setUser(currentUser);

        if (currentUser?.displayName && currentUser?.photoURL) {

          const userInfo = {
            name: currentUser.displayName,
            email: currentUser.email,
            image: currentUser.photoURL,
          };
          //please reload to see the magic either u won't see
          await saveUser(userInfo);
        }

        // const userDoc = { email: currentUser.email };
        // console.log("User info:", userDoc);

        // axiosSecure
        //   .post(`/jwt`, userDoc)
        //   .then((res) => {
        //     if (res.data.token) {
        //       localStorage.setItem("access-token", res.data.token);
        //     }
        //   })
        //   .catch((err) => console.error("Error fetching token:", err));
      } else {
        setUser(null);
        // localStorage.removeItem("access-token");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const AuthInfo = {
    createUser,
    loginUser,
    signInwithGoogle,
    logOut,
    updateUserProfile,
    user,
    setUser,
    setLoading,
    error,
    loading,
    setError,
  };
  // if (loading) {
  //   return <LoadingSpinner count={5} width="80%" height={30} />;
  // }

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
