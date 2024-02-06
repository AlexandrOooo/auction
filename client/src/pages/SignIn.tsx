import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./styles/SignUp.module.scss";

const SignIn: React.FC = () => {
  const onSubmit = () => {
    console.log("submit");
  };

  return (
    <div className={styles.root}>
      <h1>Sign In</h1>
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
        If you are not registered, just <Link to="/sign-up">sign up</Link>
      </p>
    </div>
  );
};

export default SignIn;
