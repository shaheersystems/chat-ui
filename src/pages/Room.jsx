import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { chatlog } from "../data/chatlog";
import ChatBubble from "../components/ChatBubble";
function Room() {
  const [currentChats, setCurrentChats] = useState({});
  const [message, setMessage] = useState("");
  const id = parseInt(useParams().id);
  useEffect(() => {
    const getCurrentChats = () => {
      const currentChat = chatlog.filter((chat) => chat.id === id);
      setCurrentChats(...currentChat);
    };
    getCurrentChats();
  }, [id]);
  console.log(currentChats.chatlog);
  const messageHandler = () => {
    const newMessage = {
      message_id: 4,
      side: "right",
      text: message,
      timestamp: "12:00",
    };
    setCurrentChats({
      ...currentChats,
      chatlog: [...currentChats.chatlog, newMessage],
    });
    setMessage("");
  };
  return (
    <div className='flex-1'>
      <div className='sticky scroll-mx-6 z-50 px-2 flex items-center top-0 h-16 w-full border-b border-neutral-800'>
        <div className='flex items-center gap-4 px-4'>
          <div className='w-10 h-10 rounded-full bg-neutral-800'>
            <img
              className='w-full h-full rounded-full'
              src={currentChats.picture}
              alt=''
            />
          </div>
          <div>
            <h1 className='text-white text-xl font-semibold'>
              {currentChats.name}
            </h1>
          </div>
        </div>
      </div>
      <div className='overflow-y-scroll max-w-4xl m-auto h-full pb-20 flex flex-col justify-end gap-2'>
        {currentChats.chatlog &&
          currentChats.chatlog?.map((chat) => {
            return (
              <ChatBubble
                key={chat.message_id}
                side={chat.side}
                message={chat.text}
                time={chat.timestamp}
              />
            );
          })}
        {!currentChats.chatlog && <div className='text-white'>Loading...</div>}
      </div>
      <div className='w-full h-16 px-4 fixed bottom-0 bg-neutral-800 flex items-center gap-2'>
        <div className='space-x-2'>
          <button className='text-white p-2 hover:bg-neutral-900 rounded-xl'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z'
              />
            </svg>
          </button>
          <button className='text-white p-2 hover:bg-neutral-900 rounded-xl'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13'
              />
            </svg>
          </button>
        </div>
        <div className='w-[800px]'>
          <input
            onChange={(e) => setMessage(e.target.value)}
            type='text'
            className='message w-full px-3 py-2 rounded-xl bg-neutral-900 outline-none text-white text-sm'
            placeholder='Type a message'
            value={message}
          />
        </div>
        <div>
          <button
            onClick={() => messageHandler()}
            className='text-white p-2 hover:bg-neutral-900 rounded-xl'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Room;
