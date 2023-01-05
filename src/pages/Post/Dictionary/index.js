import { useState } from 'react';
import styles from './Dictionary.module.css';

const Dictionary = ({data}) => {

    const [termSearch, setTermSearch] = useState('');

    return (
        <div className={styles.Dictionary}>
            <div className={styles.DictionaryHeader}>
                <h2>Nosso <span>dicionário</span></h2>
                <input onChange={ (e) => {
                    setTermSearch(e.target.value);
                }} value={termSearch} placeholder='Buscar termo...' />
            </div>
            <div>
            {data.filter( item => item.word.toLowerCase().includes(termSearch.toLowerCase())).map(item => (
                <span key={item.word}>
                    <h5>{item.word}</h5>
                    <p>{item.text}</p>
                </span>
            ))}
            </div>
        </div>
    )
}

export default Dictionary;