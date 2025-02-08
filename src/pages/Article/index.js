import styles from './Article.module.css';
import CardPost from '../../components/CardPost';
import posts from '../../json/posts.json';

const Article = () => {
    return (
        <div className={styles.ArticleContent}>
            <section className={styles.Heading}>
                <h1>Então você escolheu Revolução Francesa!</h1>
                <h2>Isso é oque temos disponível para você</h2>
            </section>
            <section className={styles.PostList}>
                {posts.map(post => (
                    <CardPost
                        key={post.id}
                        props={post}
                        border={2}
                    />
                ))}
            </section>

        </div>
    )
}

export default Article;