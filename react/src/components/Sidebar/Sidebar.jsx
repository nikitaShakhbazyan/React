import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Poster from "../Poster/Poster";

import styles from "../../styles/Sidebar.module.css";

const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories);

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {list.map(({ category,id }) => (
            <h1 key={id}>
              <NavLink
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
                to={`/categories/${id}`}
              >
                  {category.name}
              </NavLink>
            </h1>
          ))}
        </ul>
      </nav>
      <div className={styles.footer}>
       
      </div>
    </section>
  );
};

export default Sidebar;