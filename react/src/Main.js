import Footer from './components/Footer/Footer'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from "react";
import { getCategories } from "./features/categories/categoriesSlice";
import { getProducts } from "./features/categories/productSlice";
import Poster from "./components/Poster/Poster";
import styles from './styles/Main.module.css'
import Products from "./components/Products/Products";
import Categories from "./components/Categories/Categories";
import Banner from './components/Banner/Banner';


function Main() {

  const dispatch = useDispatch()
  const { list: products } = useSelector((state) => state.products);

  useEffect(()=>{
    dispatch(getCategories());
    dispatch(getProducts());
  },[dispatch])

  return (
    <div className={styles.App}>
        <div className={styles.container}>
      <div className={styles.PosterAndProducts}>
      <Poster/>
      <Products products={products} />
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Main;