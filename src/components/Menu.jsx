import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actionTypes } from "../redux/action/actiontype";
import { FaHamburger, FaHeart, FaShoppingBag } from "react-icons/fa"
import { FiHeart } from "react-icons/fi"

const Menu = () => {
  const data = useSelector((state) => state.product.data);
  const loadingState = useSelector((state) => state.product.isLoading);
  const productState = useSelector((state) => state.product);

  const [cartItem, setCartItem] = useState([]);
  console.log(data);
  console.log(cartItem);
  const dispatch = useDispatch();

  useEffect(() => {
    cartItem.length !== 0 &&
      dispatch({ type: actionTypes.ADD_TO_CART, payload: cartItem });
  }, [dispatch, cartItem]);

  const handleClick = (e) => {
    console.log("this is working fine");
    e.preventDefault();
    e.target.style.color = 'red'
    console.log(e.target);
  }
  return (
    <div className="menu">
      {" "}
      <h1>Explore Our Best Menu</h1>
      <div className="menuWrapper">
        {loadingState ? (
          <h2 className="loadingState">Please Wait...<span><FaHamburger /></span></h2>
        ) : (
          data.map((item, index) => {
            return (
              <div key={index} className="menuList">
                <Link to={`/menu/${item.id}`} className="menuItems">
                  <div>
                    <img src={item.img} alt="" />
                    <p className="featured">Popular Cuisines</p>
                    <span><FiHeart onClick={handleClick}
                      className="like" />
                    </span>
                    <h3 className="names">{item.name}</h3>
                    <div className="menuDec">
                  
                    </div>
                  </div>
                </Link>
                <button className="btn-btn"
                  onClick={() => {
                    const filteredItems =
                      cartItem.length !== 0 &&
                      cartItem.filter((it) => {
                        return item.id === it.itemId;
                      });
                    console.log(filteredItems);

                    filteredItems.length > 0
                      ? setCartItem([...cartItem])
                      : setCartItem((prev) => [
                        ...prev,
                        {
                          name: item.dsc,
                          image: item.img,
                          itemPrice: item.price,
                          itemQuantity: 0,
                          productId: index,
                          itemId: item.id,
                        },
                      ]);
                  }}
                >
                   Add to Cart <span><FaShoppingBag className="bag"/></span>
                </button>{" "}
                <span className="ItemPrice">{`£${item.price}`}</span>
                 <div>
                   <p className="villa">{item.country}<button className="rated">{item.rate}.0</button></p>
                 </div>
              </div>
            );
          })
        )}
      </div>
      {productState.isError && (
        <h3 className="loadingState">
          Data not found.404{productState.error}
        </h3>
      )}
    </div>
  );
};

export default Menu;
