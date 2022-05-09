import React, { useState } from 'react';
import axios from 'axios';
import { useStateContext } from 'hooks';

const UnsplacePage = () => {
  const [imageData, setImageData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { setImageUrl, setShowUnsplacePage } = useStateContext();

  const handleSearchImages = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=7i4wFx8H7VKUAuMuZ-9e4oyns_1bBlZ7se1pjZZc1so&page=1`,
      );
      if (res.status === 200) {
        setImageData(res.data.results);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed top-[10%] left-[35%] w-full">
      <section className="bg-[#261C2C] py-6 px-3 w-[80%] md:w-[500px]">
        <form onSubmit={handleSearchImages}>
          <section className="border border-white py-2">
            <input
              type="text"
              id="search"
              className="w-full bg-transparent outline-none px-2"
              placeholder="Search photos here"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
            <label htmlFor="search" className="sr-only">
              Search
            </label>
          </section>
        </form>
        <div className="grid grid-cols-2 mt-4 gap-2 max-h-[400px] overflow-hidden overflow-y-scroll">
          {imageData &&
            imageData.map((item) => {
              return (
                <button
                  type="button"
                  className="block"
                  key={item?.id}
                  onClick={() => {
                    setImageUrl(item.urls.full);
                    setShowUnsplacePage(false);
                  }}>
                  <img src={item?.urls?.full} alt="" className="cover" />
                </button>
              );
            })}
        </div>
      </section>
    </div>
  );
};

export { UnsplacePage };
