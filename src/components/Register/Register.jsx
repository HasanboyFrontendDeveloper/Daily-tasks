import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import Succes from "../Succes/Succes";
import { useDispatch } from "react-redux";
import { signUserFailure, signUserStart, signUserSuccess } from "../../slice/auth";

const Register = () => {
  const [openModal, setOpenModal] = useState(false)
  const [value, setValue] = useState({
    name: "",
    email: ''
  })

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    dispatch(signUserStart())
    e.preventDefault()
    try {
      dispatch(signUserSuccess(value))
      setOpenModal(true)
    } catch (error) {
      dispatch(signUserFailure(error.message))
    }

  }
  return (
    <>
      {openModal && <Succes setOpenModal={setOpenModal} />}
      <div className="flex items-center justify-center">
        <div className="border-2  w-[75%] lg:w-[35%] md:w-[50%] mt-[100px] pl-4 pt-3  rounded  ">
          <p className="text-[20px] f-bold font-bold ">Sign up</p>
          <p>Nice to meet you! Enter your details to register.</p>
          <form onSubmit={submitHandler} className="pl-[2%]">
            <br />
            <label className="" htmlFor="name">
              Your name
            </label>
            <br />
            <input
              className="rounded border-2 pl-3 h-10 w-[90%] mt-3 mb-3"
              type="text"
              name=""
              id="name"
              value={value.name}
              onChange={e => setValue(prev => ({ ...prev, name: e.target.value }))}
              required
            />
            <br />
            <label className="" htmlFor="email">
              Your email
            </label>
            <br />
            <input
              className="rounded border-2 pl-3 h-10 w-[90%] mt-1"
              type="text"
              name=""
              id="email"
              value={value.email}
              onChange={e => setValue(prev => ({ ...prev, email: e.target.value }))}
              required
            />
            <br />

            <div className="text-center">
              <Button type="submit" className="mt-8">Sign up</Button>
            </div>
          </form>
          <br />
        </div>
      </div>
    </>
  );
};

export default Register;
