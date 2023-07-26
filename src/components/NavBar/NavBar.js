import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <Container className={styles.navcont}>
                <Link to="/" className={styles.navicon}>
                    <i className={'fa fa-tasks'}>
                    </i>
                </Link>
                <ul className={styles.navlinks}>
                    <li>
                    <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
to="/">Home</NavLink>
                    </li>
                    <li>
                    <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
to="/favorite">Favorite</NavLink>
                    </li>
                    <li>
                    <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
to="/about">About</NavLink>
                    </li>
                </ul>
            </Container>
        </nav>
    );
    };


export default NavBar;