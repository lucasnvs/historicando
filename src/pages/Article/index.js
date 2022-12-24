import styles from './Article.module.css';
import CardPost from '../../components/CardPost';
import posts from '../../json/revolucao-francesa/posts.json';

const Article = () => {
    return (     
        <div className={styles.conteudoArticle}>
            <h1>Então você escolheu Revolução Francesa!</h1>
            <h2>Isso é oque temos disponível para você</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center'}}>
                {posts.map( post => (
                    <CardPost
                    key={post.id}
                    id={post.id}
                    sizePX={420}
                    border={2} 
                    title={post.title}
                    date={post.date} 
                    text={post.text}
                />
                ))}
                <CardPost
                    sizePX={420}
                    border={2} 
                    title='Convenção Nacional'
                    date='1793 - 1795' 
                    text='Logo após a morte do principe de persia, essa epoca 
                    que marcou tanto se inicia um dos piores períodos da história francesa'
                />
            <CardPost
                sizePX={420}
                border={2} 
                title='Diretório'
                date='1795 - 1799' 
                text='Logo após a morte do principe de persia, essa epoca 
                que marcou tanto se inicia um dos piores períodos da história francesa'
            />
            </div>

        </div>
    )
}

export default Article;