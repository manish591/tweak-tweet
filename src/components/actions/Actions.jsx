import React from 'react';
import { exportComponentAsPNG } from 'react-component-export-image';
import { useStateContext } from 'hooks';

const Actions = () => {
  const {
    downloadRef,
    setCardTheme,
    cardTheme,
    setShowCardMetrics,
    showCardMetrics,
  } = useStateContext();
  return (
    <div className="fixed bottom-0 left-0 z-[10] w-full md:bottom-20 bg-[#2D4263] md:bg-transparent text-[#ECDBBA]">
      <section className="flex items-center py-2 justify-between w-11/12 m-auto bg-[#2D4263] text-center md:w-max m-auto md:gap-4 md:px-4">
        <div className="py-2 px-2 md:px-3 rounded-md hover:bg-gray-500 cursor-pointer transition-colors flex-col justify-center items-center">
          <span className="material-icons-outlined">palette</span>
          <p className="text-xs">Color</p>
        </div>
        <button
          type="button"
          className="py-2 px-2 md:px-3 rounded-md hover:bg-gray-500 cursor-pointer transition-colors flex-col justify-center items-center"
          onClick={() => {
            setCardTheme((ct) => (ct === 'light' ? 'dark' : 'light'));
          }}>
          {cardTheme === 'light' ? (
            <span className="material-icons-outlined">light_mode</span>
          ) : (
            <span className="material-icons-outlined">dark_mode</span>
          )}
          <p className="text-xs">Card</p>
        </button>
        <button
          type="button"
          className="py-2 px-2 md:px-3 rounded-md hover:bg-gray-500 cursor-pointer transition-colors flex-col justify-center items-center"
          onClick={() => {
            setShowCardMetrics((scm) => !scm);
          }}>
          {showCardMetrics ? (
            <span className="material-icons-outlined">visibility_off</span>
          ) : (
            <span className="material-icons-outlined">visibility</span>
          )}
          <p className="text-xs">Hide</p>
        </button>
        <div className="py-2 px-2 md:px-3 rounded-md hover:bg-gray-500 cursor-pointer transition-colors flex-col justify-center items-center">
          <span className="material-icons-outlined">crop</span>
          <p className="text-xs">Size</p>
        </div>
        <div className="py-2 px-2 md:px-3 rounded-md hover:bg-gray-500 cursor-pointer transition-colors flex-col justify-center items-center">
          <span className="material-icons-outlined">add</span>
          <p className="text-xs">More</p>
        </div>
        <button
          type="button"
          className="py-2 px-2 md:px-3 cursor-pointer transition-colors flex-col justify-center items-center bg-[#C84B31] rounded-xl text-white"
          onClick={() => exportComponentAsPNG(downloadRef)}>
          <span className="material-icons-outlined">file_download</span>
          <p className="text-xs tracking-tighter">Download</p>
        </button>
      </section>
    </div>
  );
};

export { Actions };
