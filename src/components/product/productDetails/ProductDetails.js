import styles from "./ProductDetails.module.scss";
import React,{useEffect,useState} from "react";
import {Link,useParams} from "react-router-dom";
import loading from "../../../assests/loading.webp";


const ProductDetails = () => {
  const[product] = useState(null);
  return (
      <section>
        <div className={`container ${styles.Product}`}>
         <h2>Product Details</h2>
         <div>
          <Link to = "/#products">&larr; Back To Products</Link>
         </div>
         {product === null ?(
          <img src = {loading} alt = "Loading" style = {{width:"50px"}}/>

         ):(
           <>
           <div className={styles.details}>
            <div className={styles.img}>
              <img src = {product.imageURL} alt = {product.name}/>

            </div>
           </div>
           </>

         )}
        </div>
      </section>

  )
}

export default ProductDetails
