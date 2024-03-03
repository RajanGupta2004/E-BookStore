import React from "react";
import { useGlobalContext } from "../context/AppProvider";
import BookCard from "./BookCard";

const BookList = () => {
  const { book, loader } = useGlobalContext();
  if (loader) {
    return (
      <h1 className="text-3xl font-bold text-center">Loading books....</h1>
    );
  }
  return (
    <>
      {book.length > 0 ? (
        <h1 className="text-2xl p-4 font-bold">Your search Result...</h1>
      ) : (
        <h1 className="text-2xl p-4 font-bold">NO search Result found...</h1>
      )}
      <div className="flex items-center justify-center flex-wrap mx-10   ">
        {book?.map((bookinfo) => (
          <BookCard key={bookinfo.id} bookinfo={bookinfo} />
        ))}
      </div>
    </>
  );
};

export default BookList;
