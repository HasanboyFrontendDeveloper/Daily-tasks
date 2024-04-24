import { Button } from "@material-tailwind/react";
import React from "react";

const Main = () => {
  return (
    <div className="h-[60vh] flex justify-center items-center text-center">
      <div>
        <h1 className="text-5xl">Daily Tasks</h1>
        <p className="max-w-[550px] mt-5">
          After a stroke, it can take time to figure out how to do the tasks
          that make up daily life. Here are some tips. Find useful services and
          connect with others living with heart disease or stroke.{" "}
        </p>
        <Button className="mt-5">Get-started</Button>
      </div>
    </div>
  );
};

export default Main;
