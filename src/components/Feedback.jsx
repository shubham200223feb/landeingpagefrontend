import axios from "axios";
import { useState } from "react";

export default function Feedback() {
    const[send ,setsend]= useState(false);
    const[data,setdata]= useState({name:'',email:'',message:''});
    const change= (e)=>{
        const{name,value}=e.target;
        setdata((...prev)=>{
            return{...prev,[name]:[value]}
        })

    }
     const onsubmit=async(e)=>{
       
        e.preventDefault();
        setsend(true);
        try{
            const response = await axios.post("https://backendlandeing.onrender.com/api/feedback",{name:data.name,email:data.email,message:data.message});
            const data = response.data;
            if(data.success==true){
                 setdata({
        name: "",
        email: "",
        message: ""
      });
      setsend(false)

            }
        }catch(err){
            console.log("error while sendeing feedback to backend ",err)
            setsend(false);
        }
     }
    return (
      <div id="Feedback" className="bg-gradient-to-r from-yellow-400 to-yellow-700 flex-col gap-1 min-h-screen w-screen">
      <div className="w-full h-[7vh]">

      </div>

          <form onSubmit={onsubmit} className="flex flex-col items-center text-sm  w-full h-full">
            <p className="text-lg text-red-900 font-medium pb-2">Feedback</p>
            <h1 className="text-4xl font-semibold text-slate-700 pb-4">Get in touch with us</h1>
            <p className="text-sm text-gray-500 text-center pb-10">Your feedback helps us improve. Share your thoughts and experience with our makhana so we can continue delivering better taste and quality.
</p>
            
            <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
                <div className="w-full">
                    <label className="text-white" htmlFor="name" >Your Name</label>
                    <input name="name" value={data.name} required onChange={change} className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" required />
                </div>
                <div className="w-full">
                    <label className="text-white" htmlFor="name">Your Email</label>
                    <input name="email" value={data.email} onChange={change} className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="email" required />
                </div>
            </div>
        
            <div className="mt-6 w-[350px] md:w-[700px]">
                <label className="text-white" htmlFor="name">Message</label>
                <textarea name="message" value={data.message} onChange={change} required className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300" required></textarea>
            </div>
        
            <button type="button" className="mt-6 bg-yellow-700 text-white h-12 w-56 px-4 rounded active:scale-95 transition">{send?"plss wait..":"Send Message"}</button>
        </form>
      </div>
    );
};
