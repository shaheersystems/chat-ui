import React from "react";
import ChatListItem from "./ChatListItem";
import TitleBar from "./TitleBar";
import chatList from "../data/chatList";
import SearchBar from "./SearchBar";
import useSearch from "../hooks/useSearch";
import { useState } from "react";
import NotFound from "./NotFound";
function Sidebar() {
  const [query, setQuery] = useState("");
  const { filteredItems: filteredChatList } = useSearch(chatList, query);
  return (
    <div className='w-[410px] h-full border-r border-neutral-800'>
      <TitleBar />
      <SearchBar query={query} onChange={(e) => setQuery(e.target.value)} />
      <div className='overflow-y-scroll h-[82vh]'>
        {filteredChatList?.map((chat) => {
          return (
            <ChatListItem
              key={chat.id}
              id={chat.id}
              name={chat.name}
              avatar={chat.picture}
              latestTimestamp={chat.latest_timestamp}
              lastChat={chat.lastChat}
            />
          );
        })}
        {filteredChatList.length === 0 && <NotFound />}
      </div>
    </div>
  );
}

export default Sidebar;
