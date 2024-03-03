import React from "react";
import { useGlobalContext } from "../context/AppProvider";
import FavouritBookCard from "./FavouritBookCard";
import BookCard from "./BookCard";
// import BookCard from "./BookCard";

const FavoritesBook = () => {
  const { favourite } = useGlobalContext();

  return (
    <div>
      {favourite.length > 0 ? (
        <div className="flex flex-wrap items-center justify-center mt-[60px]">
          {favourite.map((favitem, i) => {
            return <FavouritBookCard key={i} favitem={favitem} />;
          })}
        </div>
      ) : (
        <div className="text-center mt-16">
          <h1 className="text-3xl font-bold">No Favourite Book is Added</h1>
        </div>
      )}
    </div>
  );
};

export default FavoritesBook;
