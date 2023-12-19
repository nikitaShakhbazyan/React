import React, { useState } from 'react';
import styles from '../../styles/Products.module.css';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../constants/routes';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/categories/cartSlice';
const Products = ({  products = [], amount }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalItems = products?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
    dispatch(addToCart(product));
  }

  return (
    <section className={styles.products}>
      <div className={styles.list}>
        {currentItems.map(({ id, title, price, image }) => (
          <div key={id} className={styles.product}>
            <Link className={styles.link} to={`${PRODUCTS}/${id}`}>
              <div className={styles.image} style={{ backgroundImage: `url(${image})` }}></div>
              <div className={styles.wrapper}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.info}>
                  <div className={styles.price}>NEW PRICE{price} $</div>
                  <div className={styles.oldPrice}>Old Price{Math.floor(price * 1.7)} $</div>
                </div>
              </div>
            </Link>
            <button key={id} onClick={() => handleAddToCart(id)}>Click to add to Cart</button>
          </div>
        ))}
      </div>
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
    </section>
  )
}

export default Products;
