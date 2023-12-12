import React from "react";
import { useAuthContext } from "../../context/auth/AuthContextProvider";
import { logOutAction } from "../../context/auth/actions";
import styles from './home.module.css'
import Main from "../../Main";

const Home = () => {
  const { dispatch } = useAuthContext();
  return (
    <>
    <Main/>
      <button
        onClick={() => {
          dispatch(logOutAction());
        }}>
        Log Out
      </button>
    </>
  );
};

export default Home;
