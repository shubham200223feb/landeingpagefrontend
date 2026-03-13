import axios from "axios";
import { useState } from "react";

export default function Feedback() {

  const [send, setsend] = useState(false);

  const [data, setdata] = useState({
    name: "",
    email: "",
    message: ""
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
        "https://backendlandeing.onrender.com/api/feedback",
        {
          name: data.name,
          email: data.email,
          message: data.message
        }
      );

      const resData = response.data;

      if (resData.success) {

        setdata({
          name: "",
          email: "",
          message: ""
        });

        alert("Feedback sent successfully 🎉");

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
      className="bg-gradient-to-r from-yellow-400 to-yellow-700 min-h-screen w-screen flex flex-col items-center"
    >

      <form
        onSubmit={onsubmit}
        className="flex flex-col items-center text-sm w-full max-w-3xl p-6"
      >

        <p className="text-lg text-red-900 font-medium pb-2">
          Feedback
        </p>

        <h1 className="text-4xl font-semibold text-slate-700 pb-4 text-center">
          Get in touch with us
        </h1>

        <p className="text-sm text-gray-600 text-center pb-10">
          Your feedback helps us improve. Share your thoughts and experience with our makhana so we can continue delivering better taste and quality.
        </p>

        <div className="flex flex-col md:flex-row gap-8 w-full">

          <div className="w-full">
            <label className="text-white">Your Name</label>

            <input
              name="name"
              value={data.name}
              onChange={change}
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
              type="text"
              required
            />
          </div>

          <div className="w-full">
            <label className="text-white">Your Email</label>

            <input
              name="email"
              value={data.email}
              onChange={change}
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300"
              type="email"
              required
            />
          </div>

        </div>

        <div className="mt-6 w-full">
          <label className="text-white">Message</label>

          <textarea
            name="message"
            value={data.message}
            onChange={change}
            className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300"
            required
          ></textarea>
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