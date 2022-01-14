import React, { useState, useEffect } from "react";
import ImgCard from "./components/ImgCard";

function App(props) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=your_key&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <>
      <div className="w-screen flex items-center justify-center h-40 bg-slate-400 fixed inset-0 z-50">
        <input
          onChange={(e) => setTerm(e.target.value)}
          type="search"
          name="search"
          id=""
          placeholder="Search Anything...."
          className="w-1/4 outline-none border border-r-0 border-slate-300 h-10 p-4 bg-white rounded-lg rounded-r-none"
        />
        <i className="fa fa-search border border-l-0 border-slate-300 h-10 leading-10 pr-4 bg-white rounded-lg rounded-l-none"></i>
      </div>
      {!isLoading && images.length === 0 && (
        <h1 className="text-center text-4xl mt-44">No Results Found!</h1>
      )}
      ;
      {isLoading ? (
        <h1 className="text-center text-4xl mt-44">Loading.....</h1>
      ) : (
        <main className="mt-44 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-10">
          {images.map((image) => (
            <ImgCard key={image.id} image={image} />
          ))}
        </main>
      )}
    </>
  );
}

export default App;
