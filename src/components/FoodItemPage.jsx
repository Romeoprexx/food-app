import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionTypes } from "../redux/action/actiontype";

const FoodItemPage = () => {
  const params = useParams();
  const [cartItem, setCartItem] = useState([]);

  const data = useSelector((state) => state.product.data);

  let getFood = (no) => {
    return data && data.find((item) => item.id === no);
  };

  const oneFoodItem = getFood(params.foodId);

  const dispatch = useDispatch();
  cartItem && dispatch({ type: actionTypes.ADD_TO_CART, payload: cartItem });
  return (
    <div className="menu">
      <div className="holder">
        <div className="foodMan">
          {" "}
          <img src={oneFoodItem.img} alt="" />{" "}
        </div>
        <div className="fooditem">
          {" "}
          <h2>{oneFoodItem.name}</h2>
          <p className="dsc">{oneFoodItem.dsc}</p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum,
            necessitatibus?<br/> Non corporis ea iusto rem modi. Amet velit quia
            incidunt dolor placeat.<br/> Provident, magni numquam?
          </p>
          <div className="foodSingular">
            <button className="btn-btn"
              onClick={() => {
                const filteredItems =
                  cartItem.length !== 0 &&
                  cartItem.filter((it) => {
                    return oneFoodItem.id === it.itemId;
                  });
                console.log(filteredItems);

                filteredItems.length > 0
                  ? setCartItem([...cartItem])
                  : setCartItem((prev) => [
                      ...prev,
                      {
                        name: oneFoodItem.dsc,
                        image: oneFoodItem.img,
                        itemPrice: oneFoodItem.price,
                        itemQuantity: 0,
                        productId: 0,
                        itemId: oneFoodItem.id,
                      },
                    ]);
              }}
            >
              Add to Cart 
            </button>{" "}
            <span>{`£${oneFoodItem.price}`}</span>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default FoodItemPage;