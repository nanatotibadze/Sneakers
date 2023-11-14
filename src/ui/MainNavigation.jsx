import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import classes from "./MainNavigation.module.css";
import logo from "../assets/images/logo.svg";
import cart from "../assets/images/icon-cart.svg";
import user from "../assets/images/image-avatar.png";
import {useSelector} from "react-redux";
import {getTotalCartQuantity} from "../features/cart/cartSlice";
import CartView from "../features/cart/CartView";

function MainNavigation({onShown, isShow}) {
  const total = useSelector(getTotalCartQuantity);

  return (
    <Navbar className={classes.navbar}>
      <Container fluid>
        <Navbar.Brand>
          <img src={logo} />
        </Navbar.Brand>
        <Nav>
          <Nav.Link className={classes.cart}>
            <button onClick={() => onShown((isShow) => !isShow)}>
              <img src={cart} className={classes.cartImg} />

              <span className={classes.quantity}>{total}</span>
            </button>{" "}
            <button onClick={() => onShown((isShow) => !isShow)}>
              <img src={user} className={classes.userImg} />
            </button>
          </Nav.Link>
        </Nav>
      </Container>
      {isShow && <CartView onShown={onShown} isShow={isShow} />}
    </Navbar>
  );
}

export default MainNavigation;
