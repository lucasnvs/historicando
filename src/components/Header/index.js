import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo';
import styles from './Header.module.css';


const Header = () => {

    const local = useLocation();

    return (
        <header className={styles.header}>
            <Logo />
            <ul>
                <li><Link className={`
                ${styles.link}
                ${local.pathname === '/' ? styles.linkMarked : ''}
                `}
                to='/'>
                    Início
                </Link></li>
                <li><Link className={`
                ${styles.link}
                ${local.pathname === '/about' ? styles.linkMarked : ''}
                `}
                to='/about'>
                    Sobre
                </Link></li>
            </ul>
        </header>
    )
}

export default Header;