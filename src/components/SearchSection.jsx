import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../context/AppProvider";

const SearchSection = () => {
  const searchText = useRef();
  const { setSearchTerm } = useGlobalContext();

  const handleSearch = () => {
    setSearchTerm(searchText.current.value);
  };

  const bannerUrl =
    "https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-the-background-photography-of-the-empty-bookstore-library-image_785536.jpg";

  return (
    <div
      className=" flex justify-center items-center h-[500px] bg-cover bg-center  bg-neutral-500 bg-gradient-to-r from-sky-500 to-indigo-500"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.6)) , url(${bannerUrl})`,
      }}
    >
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-3xl font-bold text-white  my-5">
          Find Your Book Of Choice.
        </h1>
        <p className="text-white mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquam
        </p>

        <div className=" flex items-center  p-3  w-[390px]  h-10 rounded-xl bg-white">
          <input
            type="text"
            ref={searchText}
            placeholder="Search your book...."
            className="h-10 w-[390px] text-[20px] focus:outline-none  "
          />
          <FaSearch
            onClick={handleSearch}
            className="text-2xl text-orange-500 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
