import { Button } from "@material-tailwind/react";
import React from "react";

const Register = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="border-2  w-[75%] lg:w-[35%] md:w-[50%] mt-[100px] pl-4 pt-3  rounded  ">
          <p className="text-[20px] f-bold font-bold ">Sign up</p>
          <p>Nice to meet you! Enter your details to register.</p>
          <form action="" className="pl-[2%]">
            {" "}
            <br />
            <label className="" htmlFor="name">
              Your name
            </label>{" "}
            <br />
            <input
              className="rounded border-2 pl-3 h-10 w-[90%] mt-3 mb-3"
              type="text"
              name=""
              id="name"
            />{" "}
            <br />
            <label className="" htmlFor="email">
              Your email
            </label>{" "}
            <br />
            <input
              className="rounded border-2 pl-3 h-10 w-[90%] mt-1"
              type="text"
              name=""
              id="email"
            />{" "}
            <br />
          </form>
          <div className="text-center">
            <Button className="mt-8">Sign in</Button>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Register;
