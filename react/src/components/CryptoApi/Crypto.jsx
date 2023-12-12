import React from 'react';
import useFetch from '../../customHooks/useFetch';
import styles from '../../styles/crypto.module.css';
import { useState, useEffect } from 'react';

function Crypto() {
  const url = `https://api.coincap.io/v2/assets`;
  const { data, loading, error } = useFetch(url);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 33;

  const totalItems = data?.data.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        data.setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url, currentPage]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.container}>
      {currentItems.map((item) => (
        <div className={styles.main} key={item.id}>
          <div className={styles.cryptoContainer}>
            <h3>{item.name}</h3>
            <p>Symbol: {item.symbol}</p>
            <p>Price: ${parseFloat(item.priceUsd).toFixed(2)}</p>
          </div>
        </div>
      ))}
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
  );
}

export default Crypto;
