import React from 'react'
import styles from "./auth.module.scss";
import register1 from "../../assests/register1.webp";
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import Card from '../../components/card/Card';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import Loader from '../../components/loader/Loader';


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      toast.error("Passwords do not match.");
    }
    setIsLoading(true);
  
   createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    setIsLoading(false);
    toast.success("Registered Successfully.....");
    navigate("/login");
  })
  .catch((error) => {
    toast.error(error.message);
    setIsLoading(false);
    
  });
  };
  return (
    <>

    {isLoading && <Loader/>}
     <section className={`container ${styles.auth}`}>
        <Card>
        <div className={styles.form}>
        <h2>Register</h2>
        
        <form onSubmit={registerUser}>
            <input type = "text" placeholder='Email' required value = {email} onChange={(e) => setEmail(e.target.value)}/>
            <input type = "password" placeholder='Password' required value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            <input type = "password" placeholder='Confirm Password' required value={cPassword}
                onChange={(e) => setCPassword(e.target.value)} />
            <button className="--btn --btn-primary --btn-block">Register</button>
        </form>
        <span className={styles.register}>
          <p> Already having an account?</p>
          <Link to = "/login"><b>Login</b></Link>
        </span>
        </div>
        </Card>
        <div className={styles.img}>
        <img src = {register1} alt='Login'width = "400"/>
        </div>
        
  </section>
    </>
   
  )
}


export default Register