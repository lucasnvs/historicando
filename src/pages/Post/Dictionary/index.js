import styles from './Dictionary.module.css';

const Dictionary = () => {
    return (
        <div className={styles.Dictionary}>
            <div className={styles.DictionaryHeader}>
                <h2>Nosso <span>dicionário</span></h2>
            </div>
            <h5>nerfado</h5>
            <p>enfraquecido, impossibilitado</p>
        </div>
    )
}

export default Dictionary;