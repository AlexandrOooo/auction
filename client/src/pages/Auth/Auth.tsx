import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { AuthType } from "../../@types/types";
import { signIn, signUp } from "../../redux/slices/user/requests";
import { UseAppDispatch } from "../../redux/store";
import styles from "./Auth.module.scss";

interface AuthProps {
  type: AuthType;
}

const Auth: React.FC<AuthProps> = ({ type }) => {
  const dispatch = UseAppDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSignIn = (event: any) => {
    event.preventDefault();

    dispatch(signIn({ username, password }));
    navigate("/");
  };

  const onSignUp = (event: any) => {
    event.preventDefault();

    dispatch(signUp({ username, password }));
    navigate("/");
  };

  if (type === AuthType.signIn) {
    return (
      <div className={styles.root}>
        <h1>Sign In</h1>
        <form onSubmit={onSignIn}>
          <TextField
            label="@username"
            variant="outlined"
            className={styles.textField}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            type="password"
            label="password"
            variant="outlined"
            className={styles.textField}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            disabled={!username || !password}
            type="submit"
          >
            Submit
          </Button>
        </form>
        <p>
          If you are not registered, just <Link to="/sign-up">sign up</Link>
        </p>
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <h1>Sign Up</h1>
      <form onSubmit={onSignUp}>
        <TextField
          label="@username"
          variant="outlined"
          className={styles.textField}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          type="password"
          label="password"
          variant="outlined"
          className={styles.textField}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          disabled={!username || !password}
          type="submit"
        >
          Submit
        </Button>
      </form>
      <p>
        If you are already registered, just <Link to="/sign-in">sign in</Link>
      </p>
    </div>
  );
};

export default Auth;
