import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";

const App = () => {
  const [value, setValue] = useState({
    email: '',
    password: ''
  })
  const [showWrongMsg, setShowWrongMsg] = useState('')

  const navigate = useNavigate()


  const submitHandler = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, value.email, value.password).then(() => {
      navigate('/')
    }).catch(() => {
      setShowWrongMsg('Email or Password is Wrong')
    })
  }


  return (
    <>
      <div className="flex items-center justify-center">
        <div className="border-2  w-[75%] lg:w-[35%] md:w-[50%] mt-[100px] pl-4 pt-3  rounded  ">
          <p className="text-[20px] f-bold font-bold ">Sign in</p>
          <p>Nice to meet you! Enter your email to login</p>
          <form onSubmit={submitHandler} className="pl-[2%]">
            {" "}
            <br />
            <label className="" htmlFor="email">
              Your email
            </label>{" "}
            <br />
            <input
              className="rounded border-2 pl-3 h-10 w-[90%] mt-2"
              type="email"
              name=""
              id="email"
              value={value.email}
              onChange={e => setValue(prev => ({ ...prev, email: e.target.value }))}
              required
            />{" "}
            <br />
            <br />
            <label className="" htmlFor="password">
              Your Password
            </label>
            <br />
            <input
              className="rounded border-2 pl-3 h-10 w-[90%] mt-1"
              type="password"
              name=""
              id="password"
              value={value.password}
              onChange={e => setValue(prev => ({ ...prev, password: e.target.value }))}
              required
            />
            <br />
            <p className="text-center text-red-700 mt-3">{showWrongMsg}</p>
            <br />
            <h4 className="mt-3">You do not have account? <Link to={'/register'} className="text-blue-700">Register here</Link></h4>
            <div className="text-center">
              <Button type="submit" className="mt-8">
                Sign-In
              </Button>
            </div>

          </form>
          <br />
        </div>
      </div>
    </>
  );
};

export default App;
