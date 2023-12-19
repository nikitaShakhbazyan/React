import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../fetching/Fetching.module.css";
import { Link } from "react-router-dom";

const Fetching = () => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://imdb-top-100-movies.p.rapidapi.com",
        headers: {
          "X-RapidAPI-Key":
            "a7765f740dmsh9e00fd5cc5a51e8p164dcejsneb3f9fc4b305",
          "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const totalItems = data?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.container}>
      {data ? (
        <div>
          <h1>Films</h1>
          <main className={styles.mainDiv}>
            {currentItems.map((item, index) => (
              <div className={styles.Movie} key={index}>
                <h1 className={styles.MovieTitle}> {item.title}</h1>
                <img
                  className={styles.img}
                  src={item.image}
                  alt="Films Pictures"
                />
                <div className={styles.description}>
                <p className={styles.movieP}>Rating-{item.rating}</p>
                <p className={styles.movieP}>{item.year}-Year</p>
                </div>
                <Link to={`/Productsdetail/${item.id}`}>
                  <button className={styles.details_button}>Details Information</button>
                </Link>
              </div>
            ))}
          </main>
          <div className={styles.pagination}>
            {[...Array(totalPages).keys()].map((number) => (
              <button
                key={number + 1}
                onClick={() => paginate(number + 1)}
                className={styles.pageNumber}
              >
                {number + 1}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Fetching;
imdb-top-100-movies.p.rapidapi.com
Написать в Muro Bedianidze
