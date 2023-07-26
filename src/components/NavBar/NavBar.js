import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';

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
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/favorite">Favorite</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );
    };


export default NavBar;