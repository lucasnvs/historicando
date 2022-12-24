import { Link } from 'react-router-dom';
import Logo from '../Logo';
import styles from './Header.module.css';


const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <ul>
                <li><Link to='/'>Início</Link></li>
                <li><Link to='/post'>Sobre</Link></li>
                <li>Contato</li>
            </ul>
        </header>
    )
}

export default Header;