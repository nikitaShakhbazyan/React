import React from 'react'
import styles from '../../styles/Products.module.css'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../../constants/routes'
import { useState } from 'react'

const Products = ({title,products = [],amount}) => {
    const list = products.filter((i)=> i < amount)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;


    const totalItems = products?.length || 0; 
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className={styles.products}>
        <div className={styles.list}>
    {currentItems.map(({id,title,price,category,image})=>
        <div key={id} className={styles.product}>
            <Link className={styles.link} to={`${PRODUCTS}/${id}`}>
            <div className={styles.image} style={{backgroundImage:`url(${image})`}}>
            </div>
            <div className={styles.wrapper}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.info}>
                    <div className={styles.price}>NEW PRICE{price} $</div>
                    <div className={styles.oldPrice}>Old Price{Math.floor(price * 1.7)} $</div>
                </div>
            </div>
            </Link>

        </div>
    )}
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


export default Products