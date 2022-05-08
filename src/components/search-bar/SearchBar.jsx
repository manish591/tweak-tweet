import React from 'react';
import { useStateContext } from 'hooks';

const SearchBar = () => {
  const { twitterPostUrl, setTwitterPostUrl, getTwitterData } =
    useStateContext();

  const handleFetchTwitterUserData = (e) => {
    e.preventDefault();
    getTwitterData();
    setTwitterPostUrl('');
  };

  return (
    <form onSubmit={handleFetchTwitterUserData} className="hidden md:block">
      <label htmlFor="url" className="sr-only">
        search
      </label>
      <section className="flex items-center border border-[#ECDBBA] py-3 rounded-md px-2 gap-2">
        <span className="material-icons-outlined">search</span>
        <input
          type="text"
          placeholder="Enter twitter post url here"
          className="w-96 outline-none bg-transparent"
          value={twitterPostUrl}
          onChange={(e) => {
            setTwitterPostUrl(e.target.value);
          }}
        />
      </section>
    </form>
  );
};

export { SearchBar };
