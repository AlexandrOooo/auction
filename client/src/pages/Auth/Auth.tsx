import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthType } from "../../@types/types";
import { signIn, signUp } from "../../redux/slices/user/requests";
import { UseAppDispatch } from "../../redux/store";
import styles from "./Auth.module.scss";

interface AuthProps {
  type: AuthType;
}

const Auth: React.FC<AuthProps> = ({ type }) => {
  const dispatch = UseAppDispatch();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSignIn = () => {
    dispatch(signIn({ username, password }));
  };

  const onSignUp = (event: any) => {
    event.preventDefault();
    
    console.log("dispatch...");
    dispatch(signUp({ username, password }));
  };

  if (type === AuthType.signIn) {
    return (
      <div className={styles.root}>
        <h1>Sign In</h1>
        <form onSubmit={onSignIn}>
          <TextField
            // id="outlined-basic"
            label="@username"
            variant="outlined"
            className={styles.textField}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            // id="outlined-basic"
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

  return (
    <div className={styles.root}>
      <h1>Sign Up</h1>
      <form onSubmit={onSignUp}>
        <TextField
          // id="outlined-basic"
          label="@username"
          variant="outlined"
          className={styles.textField}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          // id="outlined-basic"
          type="password"
          label="password"
          variant="outlined"
          className={styles.textField}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" disabled={!username || !password} type="submit">
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
