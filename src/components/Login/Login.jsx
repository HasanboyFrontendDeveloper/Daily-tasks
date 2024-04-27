import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="border-2  w-[75%] lg:w-[35%] md:w-[50%] mt-[100px] pl-4 pt-3  rounded  ">
          <p className="text-[20px] f-bold font-bold ">Sign in</p>
          <p>Nice to meet you! Enter your email to login</p>
          <form action="" className="pl-[2%]">
            {" "}
            <br />
            <label className="" htmlFor="name">
              Your email
            </label>{" "}
            <br />
            <input
              className="rounded border-2 pl-3 h-10 w-[90%] mt-2"
              type="text"
              name=""
              id="name"
            />{" "}
            <br />
          </form>
          <div className="text-center">
            <Button className="mt-8">
              <Link to={"/tasks"}>Sign-In</Link>
            </Button>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default App;
