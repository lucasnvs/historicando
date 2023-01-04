import PeopleCard from '../../components/PeopleCard';
import styles from './About.module.css';
import gabriel from '../../imgs/gabriel-umann.jpeg';
import lucas from '../../imgs/lucas-neves.jpeg';

const About = () => {
    return (
        <div className={styles.aboutContainer}>
           <div>
                <h2>Sobre nós</h2>
                <p>Este site foi criado para um trabalho de História, onde buscamos trazer a história de uma maneira mais simples e compreensível para qualquer público que se interesse!</p>
                <p>Todos os materiais são de nossa autoria e caso for abordado conteúdos de terceiros estará referenciado logo ao final do Post.</p>
           </div>
        <div>
            <h2>Autores</h2>
            <PeopleCard 
                name='Lucas Neves'
                sub='Desenvolvedor e roteirista'
                image={lucas}
                />
                <br></br>
                <PeopleCard 
                name='Gabriel Umann'
                sub='Roteirista e designer'
                image={gabriel}
                />
        </div>
        </div>
    )
}

export default About;