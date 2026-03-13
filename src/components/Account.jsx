import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Account() {
    const navigator= useNavigate();

  const [send, setsend] = useState(false);

  const [data, setdata] = useState({
   
    email: "",
  password:""
  });

  const change = (e) => {

    const { name, value } = e.target;

    setdata((prev) => ({
      ...prev,
      [name]: value
    }));

  };

  const onsubmit = async (e) => {

    e.preventDefault();
    setsend(true);

    try {

      const response = await axios.post(
        "https://backendlandeing.onrender.com/api/login",
        {
          
          email: data.email,
          password: data.password
        }
      );

      const resData = response.data;

      if (resData.success) {

        setdata({
       
          email: "",
         password:""
        });

       navigator("/feedback")

      }

    } catch (err) {

      console.log("error while sending feedback to backend", err);

    } finally {

      setsend(false);

    }

  };

  return (

    <div
      id="Feedback"
      className="bg-gradient-to-r from-black-400 to-black-900 min-h-screen w-screen flex flex-col items-center"
    >

      <form
        onSubmit={onsubmit}
        className="flex flex-col items-center justify-center text-sm w-full max-w-3xl p-6"
      >

       

        <h1 className="text-4xl font-semibold text-white pb-4 text-center">
          Sign In
        </h1>

       

        <div className="flex flex-col  gap-8 w-full">

          <div className="w-full">
            <label className="text-white">Email</label>

            <input
              name="email"
              value={data.email}
              onChange={change}
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
              type="text"
              required
            />
          </div>

          <div className="w-full">
            <label className="text-white">Password</label>

            <input
              name="password"
              value={data.password}
              onChange={change}
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
              type="text"
              required
            />
          </div>

        </div>

       

        <button
          disabled={send}
          type="submit"
          className="mt-6 bg-yellow-700 text-white h-12 w-56 px-4 rounded active:scale-95 transition"
        >
          {send ? "Please wait..." : "Send Message"}
        </button>

      </form>

    </div>

  );
}