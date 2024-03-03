import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useGlobalContext } from "../context/AppProvider";

const BookCard = ({ bookinfo }) => {
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();
  const { favourite, AddTofavourite } = useGlobalContext();
  const { id, volumeInfo } = bookinfo;
  const img = volumeInfo?.imageLinks?.["thumbnail"];

  const HandleFavouritbook = (favbook) => {
    // console.log(favbook);
    if (favourite.includes(favbook)) {
      alert(" Book Already in your Cart...");
    } else {
      AddTofavourite(favbook);
    }

    setIsSelected(!isSelected);
  };

  return (
    // <Link to="/book/657">
    <div className="w-[220px] h-[260px] shadow-2xl  rounded-2xl  m-3 p-5 overflow-hidden  ">
      <div className="flex justify-between">
        <img
          onClick={() => navigate(`/book/${id}`)}
          className="w-[100px]  h-[100px] object-cover cursor-pointer"
          src={img}
          alt="book"
        />

        {!isSelected ? (
          <CiHeart
            onClick={() => HandleFavouritbook(bookinfo)}
            className="text-2xl text-red-600 cursor-pointer"
          />
        ) : (
          <FaHeart
            // onClick={HandleFavouritbook}
            className="text-2xl text-red-600 cursor-pointer"
          />
        )}
      </div>
      <h1 className="font-bold text-sm">{volumeInfo.title}</h1>
      <div>
        <b>Author:</b> <span>{volumeInfo.authors} </span>
        <i> Publish Year:</i>
        <span>{volumeInfo.publishedDate}</span>
      </div>
    </div>
    // </Link>
  );
};

export default BookCard;
