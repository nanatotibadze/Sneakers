import {Container, Row, Col} from "react-bootstrap";
import MainNavigation from "./ui/MainNavigation";
import classes from "./App.module.css";
import Products from "./features/products/Products";
import {useState} from "react";

import Box from "./features/products/LightBox";
function App() {
  const [isShown, setIsShown] = useState(false);
  console.log(isShown);
  return (
    <main>
      <MainNavigation onShown={setIsShown} isShow={isShown} />
      <Container fluid className={classes.inactive}>
        <Row className={classes.main}>
          <Col lg='6' md='12' className={classes.imgContainer}>
            <Box />
          </Col>
          <Col lg='6' md='12' className={classes.infoContainer}>
            <Products onShown={setIsShown} isShow={isShown} />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default App;
