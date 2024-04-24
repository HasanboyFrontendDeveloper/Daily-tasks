import { Button } from "@material-tailwind/react";

const Navbar = () => {
  return (
    <div className="border-b-2">
      <div className="w-[1024px] mx-auto my-5 flex justify-between">
        <h1 className="text-3xl">🎯 Daily Tasks</h1>
        <Button variant="filled">Sign-In</Button>
      </div>
    </div>
  );
};

export default Navbar;
