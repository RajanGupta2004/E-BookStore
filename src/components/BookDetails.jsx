import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const [bookInfo, setbookInfo] = useState({});
  const { id } = useParams();
  // console.log(id);
  // console.log("MY Rajan", bookInfo);

  const fetchBookInfoDetail = async () => {
    try {
      const url = `https://www.googleapis.com/books/v1/volumes/${id}`;

      const result = await fetch(url);
      const info = await result.json();
      const { description, imageLinks, title, publisher, authors } =
        info.volumeInfo;
      setbookInfo({ description, imageLinks, title, publisher, authors });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBookInfoDetail();
  }, []);
  return (
    <div className="flex flex-wrap gap-10  m-10 p-9">
      <div className="w-[300px] border-gray-800 p-2">
        <img
          className="w-[100%]"
          src={bookInfo.imageLinks?.thumbnail}
          alt="image"
        />
      </div>

      <div className="w-[60%]">
        <div>
          <h1 className="font-bold text-sm">
            <b>Title:</b>
            {bookInfo.title}
          </h1>
          <b>Author:</b> <span>{bookInfo.authors} </span>
          <br />
          <b>Publisher:</b> <span>{bookInfo.publisher} </span>
          <i> Publish Year:</i>
          <span>2003</span>
        </div>
        <p>
          <b>Description:</b>
          {bookInfo.description}
        </p>
      </div>
    </div>
  );
};

export default BookDetails;
