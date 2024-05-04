import { DashBoard, Login, Main, Navbar, Register } from "./components";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {

  const { isLoggedIn } = useSelector(state => state.auth)

  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/welcome" element={isLoggedIn ? <Navigate to={'/'} /> : <Main />} />
        <Route path="/login" element={isLoggedIn ? <Navigate to={'/'} /> : <Login />} />
        <Route path="/register" element={isLoggedIn ? <Navigate to={'/'} /> : <Register />} />
        <Route path='/' element={isLoggedIn ? <DashBoard /> : <Navigate to={'/wecome'} />} />
      </Routes>
    </>
  );
};

export default App;
