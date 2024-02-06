import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./styles/SignUp.module.scss";

const SignUp: React.FC = () => {
  const onSubmit = () => {
    console.log("submit");
  };
  return (
    <div className={styles.root}>
      <h1>Sing Up</h1>
      <form onSubmit={onSubmit}>
        <TextField
          id="outlined-basic"
          label="@username"
          variant="outlined"
          className={styles.textField}
        />
        <TextField
          id="outlined-basic"
          type="password"
          label="password"
          variant="outlined"
          className={styles.textField}
        />
      </form>
      <p>
        If you are already registered, just <Link to="/sign-in">sign in</Link>
      </p>
    </div>
  );
};

export default SignUp;
