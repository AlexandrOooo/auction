import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import styles from "./Header.module.scss";
import { selectUser } from "../../redux/slices/user/selectors";
const Header: React.FC = () => {
  const { isAuth } = useSelector(selectUser);

  return (
    <header className={styles.root}>
      <div>
        <Link to="/">
          <h3>AUUU!</h3>
        </Link>
      </div>
      <div className={styles["right-side"]}>
        {!isAuth && (
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
