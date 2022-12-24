import styles from './ContentsArea.module.css';
import ContentBanner from "../../components/ContentBanner";
import background from '../../imgs/revolucao-francesa.png';
import background2 from '../../imgs/revolucao-industrial.jpg';
import background3 from '../../imgs/segunda-guerra-mundial.png';

const ContentsArea = () => {
    return (
        <section className={styles.contentsArea}>
            <h2>Conteúdos disponíveis</h2>
            <p>Aqui você encontra os mais diversos temas que temos disponíveis!</p>
            <ContentBanner
            linkTo='/article'
            title='Revolução Francesa'
            subtitle='Período Histórico marcado por grandes revoltas e mudança política na organização francesa'
            background={background}
            />
            <ContentBanner 
            locked={true} 
            title='Revolução Industrial'
            subtitle='Período Histórico marcado por grandes revoltas e mudança política na organização francesa'
            background={background2}
            />
            <ContentBanner 
            locked={true} 
            title='Segunda Guerra Mundial'
            subtitle='Período Histórico marcado por grandes revoltas e mudança política na organização francesa'
            background={background3}
            />  
      </section>
    )
}

export default ContentsArea;