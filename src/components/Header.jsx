import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  closeCheckOutModal,
  getProduct,
  openCheckOutModal,
} from "../redux/action/actionCreator";
import CheckOutModal from "./CheckOutModal";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.checkOut.checkOutModalIsOpen);
  const itemInCartState = useSelector((state) => state.checkOut);
  const [mobileNav, setMobileNav] = useState(false);

  const cartIsEmpty = itemInCartState.cartEmpty;
  const itemInCart = itemInCartState.checkoutItems;

  console.log(
    modalState,
    cartIsEmpty,
    itemInCart,
    itemInCartState,
    itemInCartState.cartEmpty
  );
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1065;
  console.log(width);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    dispatch(getProduct);
  }, [dispatch]);
  const openCheckOut = () => {
    modalState ? dispatch(closeCheckOutModal()) : dispatch(openCheckOutModal());
  };

  return (
    <header className="header">
       <Link to="/" className="logo">
        <p className="logo">
          <img className="myLogo" src={'http://logos.textgiraffe.com/custom-design/logo-name/Romeo-designstyle-colors-m.png'} alt={'logo'} />
        </p>
      </Link>
      <div className="admin">
        <img className="image" src={'https://github.com/dmalvia/React_Redux_ToolKit_Movie_App/blob/master/src/images/user.png?raw=true'} alt={'user'}/>
      </div>

      {width > breakpoint && (
        <nav className="navigation">
          <Link to="/" className="link-item">
            Home
          </Link>
          <Link to="/menu" className="link-item">
            Menu
          </Link>
          <Link to="/Categories" className="link-item">
            Categories
          </Link>
          <Link to="/login" className="link-item">
            Login
          </Link>
        </nav>
      )}
      <span onClick={openCheckOut} className="link-item cart-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="cart"
          fill="white"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        {!cartIsEmpty && itemInCart.length !== 0 && (
          <div>{itemInCart.length}</div>
        )}
      </span>
      {width < breakpoint && (
        <span
          className="mobile-menu"
          onClick={() => {
            setMobileNav(!mobileNav);
          }}
        >
          <HiMenu className="mob-view"/>{" "}
        </span>
      )}
      {mobileNav && width < breakpoint && (
        <nav className="navigation-mobile">
          <Link
            to="/"
            className="link-item"
            onClick={() => {
              setMobileNav(!mobileNav);
            }}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="link-item"
            onClick={() => {
              setMobileNav(!mobileNav);
            }}
          >
            Menu
          </Link>
          <Link
            to="/Categories"
            className="link-item"
            onClick={() => {
              setMobileNav(!mobileNav);
            }}
          >
            Categories
          </Link>
          <Link
            to=""
            className="link-item"
            onClick={() => {
              setMobileNav(!mobileNav);
            }}
          >
            Login
          </Link>
        </nav>
      )}

      {modalState && (
        <CheckOutModal
          cartIsEmpty={cartIsEmpty}
          itemInCartState={itemInCartState}
        />
      )}
    </header>
  );
};

export default Header;
