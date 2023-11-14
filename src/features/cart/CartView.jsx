import Modal from "react-bootstrap/Modal";
import classes from "./CartView.module.css";
import CartItem from "./CartItem";
import {useSelector} from "react-redux";

function CartView({onShown}) {
  const cart = useSelector((state) => state.cart.cart);
  const emptyCart = cart.length === 0;

  return (
    <div className={classes.modal}>
      <Modal.Dialog className={classes.dialog}>
        <Modal.Header className={classes.header}>
          <Modal.Title className={classes.title}>Cart</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {!emptyCart && (
            <>
              {cart.map((item) => (
                <CartItem
                  price={Number(item.price)}
                  key={item.quantity}
                  name={item.name}
                  quantity={item.quantity}
                  id={item.id}
                />
              ))}
            </>
          )}
          {emptyCart && (
            <div className={classes.empty}>Your cart is empty!</div>
          )}
        </Modal.Body>

        {!emptyCart && (
          <button
            className={classes.checkoutBtn}
            onClick={() => onShown((isShow) => !isShow)}
          >
            Checkout
          </button>
        )}
      </Modal.Dialog>
    </div>
  );
}

export default CartView;
