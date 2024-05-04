import { DashBoard, Login, Main, Navbar, Register } from "./components";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUserSuccess } from "./slice/auth";
import AuthServise from "./service/auth";
import { getItem } from "./helpers/localstorage";
import { useEffect } from "react";

const App = () => {

  const { isLoggedIn } = useSelector(state => state.auth)

  const dispatch = useDispatch();
  const getUser = async () => {
    try {
      const response = await AuthServise.getUser();
      dispatch(signUserSuccess(response));
    } catch (error) {
      console.log(error);
    }
  };




  useEffect(() => {
    const token = getItem("token");
    if (token && token !== "undefined") {
      getUser();
    }
  }, []);


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/welcome" element={isLoggedIn ? <Navigate to={'/'} /> : <Main />} />
        <Route path="/login" element={isLoggedIn ? <Navigate to={'/'} /> : <Login />} />
        <Route path="/register" element={isLoggedIn ? <Navigate to={'/'} /> : <Register />} />
        <Route path='/' element={isLoggedIn ? <DashBoard /> : <Navigate to={'/welcome'} />} />
      </Routes>
    </>
  );
};

export default App;
