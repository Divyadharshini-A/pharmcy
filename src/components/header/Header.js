import {useEffect, useState} from 'react'
import styles from "./Header.module.scss"
import { Link,NavLink, useNavigate} from "react-router-dom";
import { AdminOnlyLink } from "../adminOnlyRoute/AdminOnlyRoute";
import {FaShoppingCart} from "react-icons/fa";
import {HiOutlineMenuAlt3} from "react-icons/hi";
import {FaTimes,FaUserCircle} from "react-icons/fa";
import { toast } from 'react-toastify';
import { auth} from "../../firebase/config";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { SET_ACTIVE_USER } from '../../redux/slice/authSlice';
import ShowOnLogin, { ShowOnLogout } from "../hiddenLink/hiddenLink";
import { REMOVE_ACTIVE_USER } from '../../redux/slice/authSlice';
const logo = (
  <div className={styles.logo}>
        <Link to="/">
          <h2><span><i>Pharmcy</i></span>
          </h2>

        </Link>

      </div>
  
);

const cart = (
  <span className={styles.cart}>

  <Link to="/cart">
    CART
    <FaShoppingCart size={20}/>
    <p>0</p>
    

  </Link>
</span>
);
 const activeLink = ({isActive}) =>
 (isActive ? `${styles.active}` : "")


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [displayName, setdisplayName] = useState("");
  const navigate= useNavigate();

  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth,(user)=>{
      if(user){
        console.log(user)
      
        if(user.displayName == null){
          const u1 = user.email.slice(0,-10);
          const uName = u1.charAt(0).toUpperCase()+ u1.slice(1);
          console.log(uName);
          setdisplayName(uName);
        }
        else{
          setdisplayName(user.displayName);
        }
        dispatch(SET_ACTIVE_USER({
             eamil :user.email,
             userName :user.displayName ? user.displayName :displayName,
             userID : user.uid,
        }))
      }
      else{
         setdisplayName("");
         dispatch(REMOVE_ACTIVE_USER)
      }
    });

  },[dispatch,displayName]);

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  
  };

  const hideMenu = () =>{
    setShowMenu(false)
  }

  const logoutUser = () => {
    signOut(auth)
    .then(() => {
      toast.success("Logout successfully.");
      navigate("/");
    })
    .catch((error) => {
      toast.error(error.message);
    });

  };
  return (
   <header>
       <div className={styles.header}>{logo}     
        <nav className={showMenu ?` ${styles["show-nav"]}` 
        : `${styles["hide-nav"  ]}`}>
          <div className={showMenu ?`${styles["nav-wrapper"]}
           ${styles["show-nav-wrapper"]}`:`${styles["nav-wrapper"]}` }
          
           onClick={hideMenu}
           ></div>
        <ul onClick={hideMenu}>
          <li className={styles["logo-mobile"]}>
            {logo}  
            <FaTimes size={25} color="#fff" onClick={hideMenu}>
              
            </FaTimes>
 \
          </li>
         
           <li>
            <NavLink to="/admin/home" className={activeLink
           }>
             <button className="--btn --btn-primary">ADMIN</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={activeLink
           }>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={activeLink
           }>
              CONTACT US
            </NavLink>
          </li>
        </ul>
        <div className={styles["header-right"]} onClick={hideMenu} >
          <span className={styles.links}>
            <ShowOnLogout>
            <NavLink to="/login" className={activeLink
           }>LOGIN</NavLink></ShowOnLogout>
           <ShowOnLogin>
           <a href="#home" style={{ color: "#ff7722" }}>
                    <FaUserCircle size={16} />
                    Hi, {displayName}
                  </a>
           </ShowOnLogin>
            <NavLink to="/register" className={activeLink
           }>REGISTER</NavLink>
            <NavLink to="/order-history " className={activeLink
           }>MY ORDERS</NavLink>
             <NavLink to="/" onClick={logoutUser}>
              LOGOUT</NavLink>
            

          </span>
         {cart}
        
        </div>
        
       </nav>
       <div className={styles["menu-icon"]}>
        {cart}
        <HiOutlineMenuAlt3 size={28} onClick={toggleMenu}  />
        </div>
    </div>
    </header>
  );
};

export default Header;