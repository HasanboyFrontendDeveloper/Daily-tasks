import { DashBoard, Loader, Login, Main, Navbar, Register } from "./components";
import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { getTasksFailure, getTasksStart, getTasksSuccess, getUser } from "./slice/tasks";
import { doc, getDoc } from "firebase/firestore";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const { isLoading } = useSelector(state => state.tasks)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true)
        getUserData()
      } else {
        setIsLoggedIn(false)
      }
    })
  }, [auth])

  const dispatch = useDispatch()



  const getUserData = async () => {
    const currentEmail = auth?.currentUser?.email
    const userRef = doc(db, 'users', currentEmail)
    dispatch(getTasksStart())
    try {
      const data = await getDoc(userRef).then(res => res.data())
      dispatch(getUser({ username: data.username, email: data.email }))
      dispatch(getTasksSuccess(data.tasks))

    } catch (error) {
      dispatch(getTasksFailure(error.message))
    }
  }


  return (
    <>
      {isLoading ? <Loader /> :
        <>
          <Navbar isLoggedIn={isLoggedIn} />
          <Routes>
            <Route path="/welcome" element={isLoggedIn ? <Navigate to={'/'} /> : <Main />} />
            <Route path="/login" element={isLoggedIn ? <Navigate to={'/'} /> : <Login />} />
            <Route path="/register" element={isLoggedIn ? <Navigate to={'/'} /> : <Register />} />
            <Route path='/' element={isLoggedIn ? <DashBoard /> : <Navigate to={'/welcome'} />} />
          </Routes></>
      }
    </>
  );
};

export default App;
