import { useNavigate } from 'react-router';
import styles from './NotFound.module.css';

const NotFound = () => {

    const navigate = useNavigate();
    return (
        <div className={styles.container404}>
            <h2>Opss...</h2>
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <p>Você tem certeza da URL acima?</p>
            <p>Talvez algo de errado tenha acontecido ou está 
                página está em manutenção no momento!</p>
            <div>
                <button onClick={()=> navigate(-1)}>Voltar</button>
                <button onClick={()=> navigate('/')}>Ir para o início</button>
            </div>
        </div>
    )
}

export default NotFound;