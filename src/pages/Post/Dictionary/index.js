import styles from './Dictionary.module.css';

const Dictionary = ({data}) => {

    return (
        <div className={styles.Dictionary}>
            <div className={styles.DictionaryHeader}>
                <h2>Nosso <span>dicionário</span></h2>
            </div>
            <div>
            {data.map(item => (
                <>
                    <h5>{item.word}</h5>
                    <p>{item.text}</p>
                </>
            ))}
            </div>
        </div>
    )
}

export default Dictionary;