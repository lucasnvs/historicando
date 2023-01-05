import styles from './Article.module.css';
import CardPost from '../../components/CardPost';
import posts from '../../json/posts.json';

const Article = () => {
    return (     
        <div className={styles.conteudoArticle}>
            <section>
                <h1>Então você escolheu Revolução Francesa!</h1>
                <h2>Isso é oque temos disponível para você</h2>
            </section>
            <section className={styles.content}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center'}}>
                    {posts.map( post => (
                        <CardPost
                        key={post.id}
                        props={post}
                        border={2}
                    />
                    ))}
                </div>
            </section>

        </div>
    )
}
    
export default Article;