import { useEffect, useState } from "react"
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Componant/Firebase/Firebase.init";

initializeAuthentication()
const useFirebase = () => {
  const [user, setuser] = useState({});
  const googleprovider = new GoogleAuthProvider();
  const auth = getAuth();
  const signingoogle = () => {

    return signInWithPopup(auth, googleprovider)
  }
  const logout = () => {
    signOut(auth).then(() => {
      setuser({})
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  //observe user auth state change or not >>>>>
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user)
      }
    });
  }, [])
  return {
    user,
    signingoogle,
    logout

  }
}
export default useFirebase;