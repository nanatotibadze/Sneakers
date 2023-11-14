import {useSelector} from "react-redux/es/hooks/useSelector";
import classes from "./Products.module.css";
import Buttons from "./Buttons";

function Products({onShown, isShow}) {
  const item = useSelector((state) => state.product);

  const {name, description, price} = item;
  return (
    <div className={`${classes.info} ${isShow ? classes.inactive : ""}`}>
      <article>sneaker company</article>
      <h1>{name}</h1>
      <p className={classes.description}>{description}</p>
      <p className={classes.price}>
        ${price.toFixed(2)} <span className={classes.per}>50 %</span>
      </p>

      <p className={classes.prev}>$250.00</p>
      <Buttons item={item} isShow={isShow} />
    </div>
  );
}

export default Products;
