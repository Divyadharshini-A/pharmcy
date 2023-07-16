import React from 'react'
import styles from "./Loader.module.scss";
import loading from "../../assests/loading.webp";
import * as ReactDOM from 'react-dom';
const Loader = () => {
  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
        <div className={styles.loader}>
            <img src = {loading} alt = "Loading...">
            </img>
        </div>
    </div>,
    document.getElementById("loader")
  );
};

export default Loader