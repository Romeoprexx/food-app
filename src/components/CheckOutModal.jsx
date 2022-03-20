import { useDispatch } from "react-redux";
import { actionTypes } from "../redux/action/actiontype";
import { MdDeleteForever } from 'react-icons/md'
import { SiMastercard } from 'react-icons/si'
import { FaApplePay, FaGooglePay, FaPaypal, FaBitcoin,FaEthereum } from 'react-icons/fa'

const CheckOutModal = ({ cartIsEmpty, itemInCartState }) => {
  const itemInCart = itemInCartState.checkoutItems;
  const payOutForm = itemInCartState.payButtonClicked;
  console.log(itemInCart, itemInCartState);

  const dispatch = useDispatch();
  const totalAmountForEachItem = itemInCart.map((item) => {
    return item.itemQuantity * item.itemPrice;
  });

  const namesOfItemICart = itemInCart.map((item) => {
    return item.name;
  });
  let finalAmount = 0;
  totalAmountForEachItem.forEach((item) => {
    finalAmount += item;
  });

  console.log(
    totalAmountForEachItem,
    finalAmount,
    namesOfItemICart,
    payOutForm
  );
  
  const AlertMsg = () => {
    alert('Your Package have been dispatched for delivery')
  }
  const randomOrderNumber = Math.floor(Math.random() * 100000000);

  return (
    <div className="checkout">
      <div className="checkoutHolder">
        {payOutForm && (
          <div className="checkoutSection">
            <div className="messageSect">
              <h2>Thanks for your Patronage!</h2>
              <p className="pay">
                Your Order has been Proccessed.
                 Please Proceed to Payment
              </p>
            </div>
            <div className="helloElla" style={{color:'#DA2C94'}}>
              <p className="hiElla" style={{color:'#DA2C94'}}>Item Purchased</p>
              <p style={{color:'#DA2C94'}}>Price</p>
              <p style={{color:'#DA2C94'}}>Quantity</p>
              <p style={{color:'#DA2C94'}}>Total Amount</p>
            </div>
            {itemInCart.map((item) => {
              return (
                <div key={item.itemId} className="checkout-item-details">
                  <p className="checkout-item-name">{item.name}</p>
                  <p className="city">£{item.itemPrice.toFixed(2)}</p>
                  <p className="city">{item.itemQuantity}</p>
                  <p className="amount">
                  £{(item.itemPrice * item.itemQuantity).toFixed(2)}
                  </p>
                </div>
              );
            })}

            <h3 className="finalTotal">
              Total Amount : <span>£{finalAmount.toFixed(2)}</span>
            </h3>
            <button className="btn-btn"
              onClick={() => {
                dispatch({ type: actionTypes.CLEAR_RECEIPT });
              }}
            >
              Clear Cart
            </button>
            <button className="btn-btn" onClick={AlertMsg}>Purchase</button>
            <div>
              <h5 className="payoption">We Accept the Following Payment Option</h5>
              <div className="options">
                 <span className="creditCards"><SiMastercard className="haniwa" /></span>
                 <span className="creditCards"><FaApplePay className="haniwa" /></span>
                 <span className="creditCards"><FaGooglePay className="haniwa" /></span>
                 <span className="creditCards"><FaPaypal className="haniwa" /></span>
                 <span className="creditCards"><FaEthereum className="haniwa" /></span>
                 <span className="creditCards"><FaBitcoin className="haniwa" /></span>
              </div>
            </div>
          </div>
          
        )}
      </div>
      <div className="cartSummary">
        <h2>Cart Summary</h2>
      </div>

      {itemInCart &&
        itemInCart.map((item, index) => {
          return (
            <div className="keyItem" key={index}>
              <div className="itemImage">
                <img src={item.image} alt="Product" />
              </div>
              <div className="ItemNames">{item.name}</div>
              <div className="itemPrices">£{item.itemPrice.toFixed(2)}</div>
              <div className="itemQuantity">
                Quantity:{" "}
                <span>
                  <input
                    type="number"
                    onChange={(event) => {
                      dispatch({
                        type: actionTypes.UPDATE_QUANTITY,
                        payload: {
                          value: event.target.value,
                          productId: item.productId,
                        },
                      });
                    }}
                    min="1"
                  />
                </span>
              </div>
              <div
                className="trash"
                onClick={(event) => {
                  dispatch({
                    type: actionTypes.DELETE_AN_ITEM_FROM_CART,
                    payload: {
                      value: event.target.value,
                      deleteId: item.productId,
                    },
                  });
                }}
              >
                <MdDeleteForever className="delete" />
              </div>
            </div>
          );
        })}

      {!cartIsEmpty && itemInCart.length > 0 ? (
        <div className="proceed">
          <h3>Total Amount </h3>{" "}
          <span className="total"> £{finalAmount.toFixed(2)}</span>
          <button className="btn-btn"
            onClick={() => {
              dispatch({
                type: actionTypes.PAY_BUTTON,
                payload: {
                  purchasedItems: itemInCart,
                  purchaseId: randomOrderNumber,
                },
              });
            }}
          >
            Proceed To Checkout
          </button>
        </div>
      ) : (
        <h2 className="empty">Opps Your Cart is Empty!</h2>
      )}
    </div>
  );
};

export default CheckOutModal;
