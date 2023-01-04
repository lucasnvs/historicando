import styles from './Dictionary.module.css';

const Dictionary = () => {

    const wordsList = [
        {
            word: 'tiozão',
            text: 'Figura de poder.'
        },
        {
            word: 'patrão',
            text: 'Senhor feudal detentor das terras.'
        },
        {
            word: 'homens de Deus',
            text: 'Homens que faziam parte da organização da igreja como padres, bispos, papa.'
        },
        {
            word: 'povão',
            text: 'Formado pela maioria do povo, sem direitos, predominantemente pobre.'
        },
        {
            word: 'nerfado',
            text: 'Enfraquecido, impossibilitado.'
        },
    ]
    return (
        <div className={styles.Dictionary}>
            <div className={styles.DictionaryHeader}>
                <h2>Nosso <span>dicionário</span></h2>
            </div>
            {wordsList.map(item => (
                <>
                    <h5>{item.word}</h5>
                    <p>{item.text}</p>
                </>
            ))}
        </div>
    )
}

export default Dictionary;