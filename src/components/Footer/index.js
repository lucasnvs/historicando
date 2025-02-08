import Logo from '../Logo';
import styles from './Footer.module.css';
import facebook from './FCBK.svg';
import twitter from './TWT.svg';
import instagram from './IG.svg';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.Container}>
                <p><b>©2025 por Historicando.com</b></p>
            </div>
            <div className={styles.Container}>
                <Logo />
            </div>
            <div className={styles.Container}>
                <img src={facebook} alt='Logo do Facebook'/>
                <img src={twitter} alt='Logo do Twitter'/>
                <img src={instagram} alt='Logo do Instagram'/>
            </div>
        </footer>
    )
}

export default Footer;