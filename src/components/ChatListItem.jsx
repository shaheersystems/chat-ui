import React from "react";
import { Link } from "react-router-dom";

function ChatListItem({ name, avatar, latestTimestamp, lastChat }) {
  return (
    <Link to=''>
      <div className='w-full bg-white max-h-fit py-3 px-4 border-b hover:bg-gray-100 flex items-center gap-2'>
        <div className='h-12 w-12'>
          <img
            className='rounded-full h-full w-full border'
            src={avatar}
            alt=''
          />
        </div>
        <div className='flex-1 flex flex-col'>
          <div className='flex items-center justify-between'>
            <h1 className='text-lg font-semibold'>{name}</h1>
            <span className='text-xs'>{latestTimestamp}</span>
          </div>
          <div>
            <p className='text-sm overflow-hidden truncate w-48'>{lastChat}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ChatListItem;
