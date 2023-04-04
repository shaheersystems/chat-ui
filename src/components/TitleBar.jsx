import React from "react";
import profile from "../data/profile";
function TitleBar() {
  return (
    <div className=' w-full h-[10vh] px-4 sticky top-0 bg-neutral-900 text-white flex items-center border-b border-neutral-800 justify-between'>
      <div className='w-10 h-10 rounded-full cursor-pointer'>
        <img
          className='h-full w-full object-cover rounded-full'
          src={profile.picture}
          alt={profile.name}
        />
      </div>
      <div className='flex items-center gap-4'>
        <button className='p-1 border border-neutral-800 hover:bg-neutral-800  rounded-full'>
          <svg
            width={22}
            height={22}
            fill='white'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10Zm3.493-13a1.494 1.494 0 1 1 .076 2.987A1.494 1.494 0 0 1 15.493 9Zm-4.301 6.919a4.108 4.108 0 0 0 1.616 0c.253-.052.505-.131.75-.233.234-.1.464-.224.679-.368.208-.142.407-.306.591-.489.183-.182.347-.381.489-.592l1.658 1.117a6.003 6.003 0 0 1-3.768 2.525c-.797.16-1.617.16-2.414-.001a5.918 5.918 0 0 1-2.148-.903 6.078 6.078 0 0 1-1.621-1.622l1.658-1.117c.143.211.307.41.488.59a3.988 3.988 0 0 0 2.022 1.093ZM8.5 9a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8.5 9Z' />
          </svg>
        </button>
        <button className='p-1 border border-neutral-800 hover:bg-neutral-800 rounded-full'>
          <svg
            width={22}
            height={22}
            fill='white'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z' />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TitleBar;
