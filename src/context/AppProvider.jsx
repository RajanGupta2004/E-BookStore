import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [seacchTerm, setSearchTerm] = useState("power");
  const [book, setBooks] = useState([]);
  const [loader, setLoader] = useState(false);
  const [favourite, setFavourites] = useState([]);

  const fetchBook = async () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=search${seacchTerm}`;
    try {
      setLoader(true);
      const result = await fetch(url);
      const data = await result.json();
      const { items } = data;

      if (items) {
        setBooks(items);
        setLoader(false);
      } else {
        setBooks([]);
        setLoader(false);
      }
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBook();
  }, [seacchTerm]);

  const AddTofavourite = (favouriteBook) => {
    setFavourites((prev) => [...prev, favouriteBook]);
  };

  const RemoveTofavourite = (id) => {
    const filterBook = favourite.filter((item) => item.id != id);
    setFavourites(filterBook);
  };
  return (
    <AppContext.Provider
      value={{
        book,
        loader,
        setSearchTerm,
        favourite,
        AddTofavourite,
        RemoveTofavourite,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
