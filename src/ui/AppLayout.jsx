import {Outlet} from "react-router-dom";
import MainNavigation from "./MainNavigation";
import classes from "./MainNavigation.module.css";
import {Container} from "react-bootstrap";

function AppLayout() {
  return (
    <div>
      <Container fluid>
        <MainNavigation />
        <main className={classes.main}>
          <Outlet />
        </main>
      </Container>
    </div>
  );
}
export default AppLayout;
