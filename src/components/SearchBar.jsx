import React from "react";

function SearchBar({ onChange, query }) {
  return (
    <div className='h-[8vh] w-full px-4 py-2 flex gap-2'>
      <div className='flex-1 px-4 flex gap-4 items-center bg-gray-100 rounded-lg'>
        <label htmlFor='searchInput'>
          <svg
            width={22}
            height={22}
            fill='#00000'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8Zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6Z' />
          </svg>
        </label>
        <input
          id='searchInput'
          type='text'
          value={query}
          onChange={onChange}
          className='w-full outline-none bg-gray-100'
          autoComplete='off'
          placeholder='Search chats'
        />
      </div>
      <div>
        <button className='p-1 hover:bg-gray-100 rounded-full'>
          <svg
            width={25}
            height={25}
            fill='#00000'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M7 11h10v2H7v-2ZM4 7h16v2H4V7Zm6 8h4v2h-4v-2Z' />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
