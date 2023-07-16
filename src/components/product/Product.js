import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetchCollection from "../../customHooks/useFetchCollection";
import styles from "./Product.module.scss";
import loading from "../../assests/loading.webp";
import { FaCogs } from "react-icons/fa";
import {
    GET_PRICE_RANGE,
    selectProducts,
    STORE_PRODUCTS,
  } from "../../redux/slice/productSlice";
const Product = () => {
    const {data,isLoading} = useFetchCollection("products");
    const [showFilter,setShowFilter] = useState(false);
    const products = useSelector(selectProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
          STORE_PRODUCTS({
            products: data,
          })
        );
    
        dispatch(
          GET_PRICE_RANGE({
            products: data,
          })
        );
      }, [dispatch, data]);
    const toggleFilter = () => {
        setShowFilter(!showFilter);
      };

  return (
    <section>
        <div className={`container ${styles.product}`}>
            <div className={styles.content}>
                 {isLoading ? (
                        <img src = {loading} alt = "Loading.." style ={{width:"50px"}} className ="--center-all"/>

                 ):(
                    <></>
                 )}
                 <div className={styles.icon} onClick={toggleFilter}>
                    <FaCogs size={20} color="orangered"/>
                    <p>
                    <b>{showFilter ? "Hide Filter" : "Show Filter"}</b>
                    </p>

                 </div>
            </div>
        </div>
    </section>
  )
}

export default Product;