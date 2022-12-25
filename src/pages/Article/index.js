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
                    props={post}
                    sizePX={420}
                    border={2}
                />
                ))}
            </div>

        </div>
    )
}

export default Article;