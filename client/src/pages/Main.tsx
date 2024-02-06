import { Link } from "react-router-dom"

import Button from '@mui/material/Button';
import styles from './styles/Main.module.scss';

const Main : React.FC = () => {
  return (
    <div className={styles.root}>
      <header>
        <Button variant="contained"><Link to="/sign-in">Sign In</Link></Button>
        <Button variant="contained"><Link to="/sign-up">Sign Up</Link></Button>
      </header>
    </div>)
}

export default Main
