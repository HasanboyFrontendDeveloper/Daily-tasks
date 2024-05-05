import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import Succes from "../Succes/Succes";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../slice/tasks";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [openModal, setOpenModal] = useState(false)
  const [value, setValue] = useState({
    name: "",
    email: '',
    password: ''
  })
  const [showWrongMsg, setShowWrongMsg] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // const submitHandler = async (e) => {
  //   dispatch(signUserStart())
  //   e.preventDefault()
  //   try {
  //     const res = await AuthServise.userRegister(value)
  //     console.log(res);
  //     if (res?.status === 200) {
  //       const res = await AuthServise.userLogin({email: value.email, password: value.password})
  //       dispatch(signUserSuccess(res))
  //     }
  //     setOpenModal(true)
  //     showWrongMsg('')
  //   } catch (error) {
  //     dispatch(signUserFailure(error.message))
  //     setShowWrongMsg("Email or Password is Wrong")
  //     console.log(error);
  //   }

  // }


  const submitHandler = async (e) => {
    e.preventDefault();
    const email = value.email
    const userRef = doc(db, 'users', email)
    if (value.password.length >= 8) {
      await createUserWithEmailAndPassword(auth, value.email, value.password).then(async () => {
        const user = { username: value.name, email: value.email, tasks: [] }
        await setDoc(userRef, user)
        navigate('/')
      }).catch(() => {
        setShowWrongMsg("This email already exists.")
      })
    }else{
      setShowWrongMsg("Password should be at least 8 characters")
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
            <br />
            <label className="" htmlFor="email">
              Your Password
            </label>
            <br />
            <input
              className="rounded border-2 pl-3 h-10 w-[90%] mt-1"
              type="password"
              name=""
              id="email"
              value={value.password}
              onChange={e => setValue(prev => ({ ...prev, password: e.target.value }))}
              required
            />
            <br />
            <p className="text-center text-red-700">{showWrongMsg}</p>
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
