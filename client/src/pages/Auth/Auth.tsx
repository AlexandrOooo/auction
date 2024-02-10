import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Auth.module.scss";

type AuthType = {
  type: "sign-in" | "sign-up";
};

const Auth: React.FC<AuthType> = ({ type }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = (data: any) => {
    console.log(data);
  };

  const onSignUp = (data: any) => {
    console.log(data);
  };

  /* SIGN IN */
  if (type === "sign-in") {
    return (
      <div className={styles.root}>
        <h1>Sign In</h1>
        <form onSubmit={onSignIn}>
          <TextField
            id="outlined-basic"
            label="@username"
            variant="outlined"
            className={styles.textField}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            type="password"
            label="password"
            variant="outlined"
            className={styles.textField}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" disabled={!username || !password}>
            <Link to="/">Submit</Link>
          </Button>
        </form>
        <p>
          If you are not registered, just <Link to="/sign-up">sign up</Link>
        </p>
      </div>
    );
  }

  /* SIGN UP */
  return (
    <div className={styles.root}>
      <h1>Sign Up</h1>
      <form onSubmit={onSignUp}>
        <TextField
          id="outlined-basic"
          label="@username"
          variant="outlined"
          className={styles.textField}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          type="password"
          label="password"
          variant="outlined"
          className={styles.textField}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" disabled={!username || !password}>
          <Link to="/">Submit</Link>
        </Button>
      </form>
      <p>
        If you are already registered, just <Link to="/sign-in">sign in</Link>
      </p>
    </div>
  );
};

export default Auth;
