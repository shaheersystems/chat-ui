import React from "react";
import bannerSVG from "../assets/home.svg";

function Homepage() {
  return (
    <div className='h-screen flex-1 bg-neutral-900 text-white flex flex-col gap-6 items-center justify-center'>
      <div className='h-36'>
        <img className='w-full h-full' src={bannerSVG} alt='' />
      </div>
      <h2 className='text-2xl font-semibold font-mono'>
        Let's connect through web
      </h2>
      <p className='font-sm font-semibold'>
        Chatter. is a secure{" "}
        <span className='text-blue-500'>end-to-end encrypted</span> way to
        connect with your clients.
      </p>
    </div>
  );
}

export default Homepage;
