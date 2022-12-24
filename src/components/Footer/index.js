import Logo from '../Logo';
import styles from './Footer.module.css';
import facebook from './FCBK.svg';
import twitter from './TWT.svg';
import instagram from './IG.svg';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Logo />
            <div className={styles.mid}>
                <p>Empowered by Lucas Neves and Gabriel Umann</p>
                <p>©2022 por Historicando.com</p>
            </div>
            <div className={styles.socialmedia}>
                <img src={facebook} alt='Logo do Facebook'/>
                <img src={twitter} alt='Logo do Twitter'/>
                <img src={instagram} alt='Logo do Instagram'/>
            </div>
        </footer>
    )
}

export default Footer;