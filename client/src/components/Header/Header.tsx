import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import style from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={style.root}>
      <div className={style.leftSide}>
        <Link to="/">
          <h3>AUUU!</h3>
        </Link>
      </div>
      <div className={style.rightSide}>
        {window.localStorage.getItem("token") ? (
          <>
            <Button variant="contained">Create lot</Button>
          </>
        ) : (
          <>
            <Button variant="contained">
              <Link to="/sign-in">Sign In</Link>
            </Button>
            <Button variant="contained">
              <Link to="/sign-up">Sign Up</Link>
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
