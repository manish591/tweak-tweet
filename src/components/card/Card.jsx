import React from 'react';
import { useStateContext } from 'hooks';

const Card = () => {
  const { userData, downloadRef, cardTheme, showCardMetrics, imageUrl } =
    useStateContext();
  return (
    <section
      className="overflow-hidden overflow-x-auto min-w-[600px] min-h-[150px] m-auto rounded-md max-w-[1200px] my-28 shadow-2xl text-black"
      ref={downloadRef}>
      <div
        className="py-28 bg-gray-100 px-5"
        style={{
          backgroundRepeat: 'no-repeat',
          borderBottomRightRadius: '1px',
          backgroundSize: 'cover',
          backgroundImage: `url(${imageUrl})`,
        }}>
        <div
          className={`grid rounded-xl shadow-lg bg-white w-11/12 max-w-[55%] m-auto backdrop-blur-3xl transition-colors duration-300 ${
            cardTheme === 'dark' && 'bg-[#191919] text-[#ecdbba]'
          }`}>
          <div className="grid gap-5 p-4">
            <section>
              <div>
                <div className="flex gap-3 items-center">
                  <section className="w-12 h-12 bg-gray-300 flex justify-center items-center rounded-full">
                    <img
                      src={userData?.includes.users[0]?.profile_image_url}
                      alt="profile"
                      className="max-w-full rounded-full"
                    />
                  </section>
                  <p className="font-bold">
                    {userData?.includes.users[0]?.username}
                  </p>
                </div>
                <div className="mt-2 lg:my-4">
                  <p className="text-lg lg:text-xl font-medium leading-6">
                    {userData.data.text}
                  </p>
                </div>
              </div>
            </section>
            {showCardMetrics && (
              <section>
                <div>
                  <p className="text-gray-500 text-sm">
                    {userData?.data.created_at}
                  </p>
                </div>
                <div className="mt-1">
                  <section className="flex items-center gap-2">
                    <p className="text-base font-bold">
                      {userData?.data?.public_metrics?.reply_count}{' '}
                      <span className="text-gray-500 text-sm">Replies</span>
                    </p>
                    <p className="text-base font-bold">
                      {userData?.data?.public_metrics?.retweet_count}{' '}
                      <span className="text-gray-500 text-sm">Retweets</span>
                    </p>
                    <p className="text-base font-bold">
                      {userData?.data?.public_metrics?.like_count}{' '}
                      <span className="text-gray-500 text-sm">Likes</span>
                    </p>
                  </section>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Card };
