import styles from './Logo.module.css';
import logo from './logo.png'

const Logo = () => {
    return (
        <div className={styles.logoContainer}>
            <img src={logo} alt='Logo do Historicando' />
            <p>Historicando</p>
        </div>
    )
}

export default Logo;
