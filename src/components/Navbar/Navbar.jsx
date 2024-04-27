import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="border-b-2">
      <div className="w-[1024px] mx-auto my-5 flex justify-between">
        <h1 className="text-3xl">🎯 Daily Tasks</h1>
        <Button variant="filled">
          <Link to={'/login'}>Sign-In</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
