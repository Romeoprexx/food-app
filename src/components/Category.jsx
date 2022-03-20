import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { actionTypes } from "../redux/action/actiontype";
import useFetch from "../useFetch";
import { FaHamburger, FaHeart, FaShoppingBag } from "react-icons/fa"
import { FiHeart } from "react-icons/fi"

const Category = () => {
  let params = useParams();
  const catLink = params.categoryId;
  console.log(catLink);
  const itemInCart = useSelector((state) => state.checkOut.checkOutItems);
  console.log(itemInCart);
  const [cartItem, setCartItem] = useState([]);
  console.log(cartItem);

  const [data, loading, error] = useFetch(
    `https://ig-food-menus.herokuapp.com/${catLink}`
  );

  const dispatch = useDispatch();
  cartItem && dispatch({ type: actionTypes.ADD_TO_CART, payload: cartItem });

  const handleClick = (e) => {
    console.log("this is working fine");
    e.preventDefault();
    e.target.style.color = 'red'
    console.log(e.target);
  }
  return (
    <div className="menu">
      <h1>{catLink}</h1>
      <div className="menuWrapper">
        {loading ? (
          <h2 className="loadingState">Please Wait...<span><FaHamburger /></span></h2>
        ) : (
          data &&
          data.map((item, index) => {
            return (
              <div className="menuList" key={index}>
                <Link to={`/menu/${item.id}`} className="menuItems">
                  <div>
                    <img src={item.img} alt="" />
                    <p className="featured"> Spend £25, Save £3</p>
                    <span><FiHeart onClick={handleClick}
                      className="like" />
                    </span>
                    <h3>{item.name}</h3>
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
                  {" "}
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
      {error && <h2 className="loadingState">Check your internet Connection: Network Failure</h2>}
    </div>
  );
};

export default Category;
