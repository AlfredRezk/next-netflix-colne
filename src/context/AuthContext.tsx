"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const AuthContext = createContext<any>({});

interface AuthProviderProps {
  children: React.ReactNode;
}

interface CurrentUser {
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const router = useRouter();

  useEffect(() => {
    userObserver();
  }, []);

  // Register
  const createUser = async (
    email: string,
    password: string,
    displayName: string,
  ) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser!, { displayName: displayName });
      router.push("/profile");
      toast.success("Registered Successfully!");
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  // Login a user
  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/profile");
      toast.success("Logged In Successfully!");
    } catch (error) {
      toast.error((error as Error).message);
    }
  };
  // user observer
  const userObserver = () => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { email, displayName, photoURL } = currentUser;
        setCurrentUser({ email, displayName, photoURL });
        sessionStorage.setItem(
          "user",
          JSON.stringify({ email, displayName, photoURL }),
        );
      } else {
        setCurrentUser(null);
        sessionStorage.clear();
      }
    });
  };

  const logOut = () => {
    signOut(auth);
    toast.success("Logged Out Successfully!");
  };

  const signupProvider = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/profile");
      toast.success("Logged In Successfully!");
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  const forgotPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Please check your email box!");
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  const value = {
    createUser,
    signIn,
    currentUser,
    logOut,
    signupProvider,
    forgotPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
