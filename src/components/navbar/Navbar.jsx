import React from 'react';
import { SearchBar } from 'components';

const Navbar = () => {
  return (
    <div className="py-2 md:py-4 sticky top-0 bg-white z-[10] bg-[#191919]">
      <section className="w-11/12 m-auto flex items-center justify-between">
        <ul>
          <li className="font-['Pacifico'] font-semibold text-xl lg:text-2xl text-[#C84B31]">
            Tweaky-Tweet
          </li>
        </ul>
        <SearchBar />
        <ul className="flex items-center gap-7 hidden md:flex">
          <li className="w-7 h-7">
            <a
              href="https://github.com/manish591"
              target="_blank"
              rel="noreferrer">
              <img
                src="https://res.cloudinary.com/dcugqfvvg/image/upload/v1652035579/github_ozxz6e.svg"
                alt="github"
                className="max-w-full"
              />
            </a>
          </li>
          <li className="w-7 h-7">
            <a
              href="https://twitter.com/manishdevrani77"
              rel="noreferrer"
              target="_blank">
              <img
                src="https://res.cloudinary.com/dcugqfvvg/image/upload/v1652035707/twitter_uanuwf.svg"
                alt="twitter"
                className="max-w-full"
              />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export { Navbar };
