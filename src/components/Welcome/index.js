import styles from './Welcome.module.css';
import people from '../../imgs/people.png';

const Welcome = () => {
    return (
        <section className={styles.welcomeContainer}>
        <div>
            <h1>Bem vindo ao <span>Historicando</span></h1>
            <p><strong>Sua plataforma on-line sobre história</strong></p>
            <p>Esperamos que nosso conteúdo possa lhe 
            ajudar e prover as informações necessárias 
            em sua pesquisa, trabalho ou curiosidade sobre história...</p>
            <p>Boa leitura!</p>
        </div>
            <img src={people} alt='Pessoa estudando' />
      </section>
    )
}

export default Welcome;