import { createContext,useEffect,useState } from "react";
import app from '../Firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    // email pass
    const createNewUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // logout

    const logout = () =>{
        setLoading(true)
        return signOut(auth)
        
    }
    // sign in
    const userSignIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // update prfl
    const updateUserProfile = (updatedData) =>{
        return updateProfile(auth.currentUser,updatedData)
    }

    const authInfo ={
        user,
        setUser,
        createNewUser,
        logout,
        userSignIn,
        loading,
        updateUserProfile,
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser);
          setLoading(false);
        });
        return () => {
          unsubscribe();
        };
      }, []);

    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;