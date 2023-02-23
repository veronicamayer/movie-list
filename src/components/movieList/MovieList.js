import MovieItems from "../movieItems/MovieItems.js";
import { useState } from "react";
import movies from "../../data/Data.js";

const MovieList = () => {
  const [moviesList, setMoviesList] = useState(movies);
  const [sortOrder, setSortOrder] = useState({
    title: "asc",
  });

  const sortByTitle = (a, b) => {
    return sortOrder.title === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
  };

  const sortByYear = (a, b) => {
    return sortOrder.year === "asc" ? a.year - b.year : b.year - a.year;
  };

  const sortByRating = (a, b) => {
    return sortOrder.rate === "asc" ? a.rate - b.rate : b.rate - a.rate;
  };

  const handleSortByTitle = () => {
    setSortOrder({ title: sortOrder.title === "asc" ? "desc" : "asc", year: sortOrder.year, rate: sortOrder.rate });
    setMoviesList([...moviesList].sort(sortByTitle));
  };

  const handleSortByYear = () => {
    setSortOrder({ title: sortOrder.title, year: sortOrder.year === "asc" ? "desc" : "asc", rate: sortOrder.rate });
    setMoviesList([...moviesList].sort(sortByYear));
  };

  const handleSortByRating = () => {
    setSortOrder({ title: sortOrder.title, year: sortOrder.year, rate: sortOrder.rate === "asc" ? "desc" : "asc" });
    setMoviesList([...moviesList].sort(sortByRating));
  };

  return (
    <div>
      <button onClick={handleSortByTitle}>{sortOrder.title === "asc" ? "A-Z" : "Z-A"}</button>
      <button onClick={handleSortByYear}>{sortOrder.year === "asc" ? "Sort by Year Ascending" : "Sort by Year Descending"}</button>
      <button onClick={handleSortByRating}>{sortOrder.rate === "asc" ? "Worst Rating" : "Best Rating"}</button>

      <section className="movies">
        {moviesList.map((movie) => {
          return (
            <MovieItems
              key={movie.id}
              title={movie.title}
              year={movie.year}
              director={movie.director}
              duration={movie.duration}
              rate={movie.rate}
              genre={movie.genre}
            />
          );
        })}
      </section>
    </div>
  );
};

export default MovieList;
