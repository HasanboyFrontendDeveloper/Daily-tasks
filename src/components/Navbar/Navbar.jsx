import { Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../../slice/auth";

const Navbar = () => {
  const { isLoggedIn } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler = () => {
    navigate('/welcome')
    dispatch(signOut())
  }
  return (
    <div className="border-b-2">
      <div className="w-[90%] mx-auto my-5 flex justify-between">
        <h1 className="text-3xl">🎯 Daily Tasks</h1>
        {isLoggedIn ?
          <Button variant="filled" onClick={logoutHandler}> Log Out </Button> :
          <Button onClick={() => navigate('/login')} variant="filled">
            Sign-In
          </Button>}
      </div>
    </div>
  );
};

export default Navbar;
