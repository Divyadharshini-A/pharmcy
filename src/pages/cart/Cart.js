import React,{useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import styles from "./Cart.module.scss";
import { FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";
import { selectIsLoggedIn } from "../../redux/slice/authSlice";

const Cart = () => {
  return (
    <div>Cart</div>
  )
}

export default Cart