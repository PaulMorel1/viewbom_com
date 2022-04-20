import { Link } from 'react-router-dom';
import HeaderNavStyles from './HeaderNav.module.css';

export default function HeaderNav() {
  return (
    <nav className={HeaderNavStyles.navigation}>
      <Link to="/" className={HeaderNavStyles.link}>Home</Link>
      <Link to="/faq" className={HeaderNavStyles.link}>FAQ</Link>
    </nav>
  );
}