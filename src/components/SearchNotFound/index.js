import styles from './SearchNotFound.module.css';
import {ReactComponent as Ban} from './ban.svg';

const SearchNotFound = () => {
    return (
        <section className={styles.SearchNotFound}>
            <h2>Não encontramos resultados para sua pesquisa...</h2>
            <Ban className={styles.img} />
        </section>
    )
}

export default SearchNotFound;