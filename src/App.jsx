import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { AppProvider } from "./context/AppProvider";
import BookDetails from "./components/BookDetails";
import Navbar from "./components/Navbar";
import FavoritesBook from "./components/FavoritesBook";

function App() {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/favourites" element={<FavoritesBook />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
