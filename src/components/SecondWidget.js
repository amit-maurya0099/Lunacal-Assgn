import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
const SecondWidget = () => {
    const [images,setImages]=useState([]);
   const handleFileChange=(e)=>{
      const files=Array.from(e.target.files);
      const imageArray=files.map((file)=>{
           const reader=new FileReader();
           reader.readAsDataURL(file);
           
           return new Promise((resolve)=>{
            reader.onloadend=()=>{
                resolve(reader.result);
            }
           })
      })

      Promise.all(imageArray).then((imageurls)=>{
        console.log(imageArray);
    
     setImages((prevImgs)=>[...prevImgs, ...imageurls]);
       
      })
   

   }
   useEffect(()=>{
    console.log(images);
  },[images]);
  
  return (
    <div className="h-[45%] bg-[#363C43] py-4 rounded-2xl shadow-xl ">
      <div className="flex justify-between w-[90%] p-2 m-auto rounded-2xl ">
        <div className=" bg-black rounded-xl px-4 py-2">
          <p>Gallery</p>
        </div>
        <div className="flex gap-2 items-center">
         <input
          type="file"
          accept="image/*"
          multiple
          id="addImg"
          onChange={handleFileChange}
          style={{display:"none"}}
         />
          <label 
           htmlFor="addImg"
          className="bg-slate-500 px-4 rounded-2xl py-2 text-[12px] flex items-center cursor-pointer">
              <IoMdAdd />
              ADD IMAGE
           
            </label>
          <div className="rounded-full bg-black p-1 cursor-pointer ">
            {" "}
            <IoMdArrowRoundBack className="text-2xl" />
          </div>
          <div className="bg-black rounded-full p-1 cursor-pointer">
            {" "}
            <IoMdArrowRoundForward className="text-2xl" />
          </div>
        </div>
      </div>
      <div className=" flex justify-evenly overflow-auto gap-2 no-scrollbar  p-2">
        {
           images && images.map((img,ind)=>
         <img src={img} alt="/" key={ind} className="sm:h-[150px] sm:w-[150px] md:h-[200px] md:w-[200px] object-cover rounded-xl "></img>
    )}
      </div>
     
    </div>
  );
};

export default SecondWidget;
