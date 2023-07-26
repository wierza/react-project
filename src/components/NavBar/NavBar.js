import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <Container className={styles.navcont}>
                <a href="/" className={styles.navicon}>
                    <i className={'fa fa-tasks'}>
                    </i>
                </a>
                <ul className={styles.navlinks}>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/favorite">Favorite</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul>
            </Container>
        </nav>
    );
    };


export default NavBar;