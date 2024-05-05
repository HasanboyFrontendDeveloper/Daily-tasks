import { Button } from "@material-tailwind/react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";

const Navbar = ({isLoggedIn}) => {
  const navigate = useNavigate()

  const logoutHandler = async () => {
    navigate('/welcome')
    await signOut(auth)
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
