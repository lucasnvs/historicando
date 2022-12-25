import { Link } from 'react-router-dom';
import styles from './ContentBanner.module.css';
import locked from './locked.png';

const ContentBanner = (props) => {

    return (
        <div className={styles.bannerContainer}>

            {props.locked ? 
            <div className={styles.locked}>
                <h2>Conteúdo Indisponível no momento</h2>
                <img src={locked}  alt='Indisponível' />      
            </div> : null}
                <img className={styles.img} src={props.background} alt='fundo' />
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
                <Link to={props.linkTo}>
                    <button>Acessar Conteúdo</button>
                </Link>
                
        </div>
    )
}

export default ContentBanner;