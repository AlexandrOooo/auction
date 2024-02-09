import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import style from "./Header.module.scss";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/user/selectors";

const Header: React.FC = () => {
  const { isAuth } = useSelector(selectUser);

  return (
    <header className={style.root}>
      <div className={style.leftSide}>
        <Link to="/">
          <h3>AUUU!</h3>
        </Link>
      </div>
      <div className={style.rightSide}>
        {isAuth ? (
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
