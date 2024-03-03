import React from "react";
import { ImCross } from "react-icons/im";
import { useGlobalContext } from "../context/AppProvider";
import { useNavigate } from "react-router-dom";

const FavouritBookCard = ({ favitem }) => {
  const navigate = useNavigate();
  const { RemoveTofavourite } = useGlobalContext();
  // console.log(favitem);
  const { id, volumeInfo } = favitem;
  // console.log(id, volumeInfo);
  const img = volumeInfo?.imageLinks?.["thumbnail"];
  // console.log(img);
  return (
    <div className="w-[240px] h-[260px] shadow-md bg-slate-200 rounded-md  m-3 p-5 overflow-hidden ">
      <div className="flex justify-between">
        <img
          onClick={() => navigate(`/book/${id}`)}
          className="w-[100px]  h-[100px] object-cover cursor-pointer"
          src={img}
          alt="book"
        />
        <ImCross
          className="text-sm text-black-600 cursor-pointer"
          onClick={() => RemoveTofavourite(id)}
        />
      </div>
      <h1 className="font-bold text-sm">volumeInfo.title</h1>
      <div>
        <b>Author:</b> <span>volumeInfo.authors </span>
        <i> Publish Year:</i>
        <span>volumeInfo.publishedDate</span>
      </div>
    </div>
  );
};

export default FavouritBookCard;
