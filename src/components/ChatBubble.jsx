import React from "react";

function ChatBubble({ side, message, time }) {
  return (
    <div
      className={`z-1 max-w-[450px] px-4 py-2 space-y-1 bg-neutral-800 text-white rounded-xl ${
        side == "left" ? "mr-auto" : "ml-auto bg-gray-800"
      }`}
    >
      <div>
        <p className='text-sm'>{message}</p>
      </div>
      <div className='flex justify-end'>
        <span className='text-xs text-neutral-300'>{time}</span>
      </div>
    </div>
  );
}

export default ChatBubble;
