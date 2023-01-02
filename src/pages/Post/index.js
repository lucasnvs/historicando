import styles from './Post.module.css';
import CardPost from '../../components/CardPost';
import { useParams } from 'react-router';
import posts from '../../json/posts.json'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import NotFound from '../NotFound';
import Dictionary from './Dictionary';

import gabriel from '../../imgs/gabriel-umann.jpeg'

const authors = [gabriel, ''];

const Post = () => {
    const params = useParams();

    const post = posts.find(post => {
        return post.id === Number(params.id)
    })

    if (!post) {
        return <NotFound />;
    }
    return (
        <>
            <div className={styles.bannerPrincipal}>
                <h2>
                    {post.title}
                </h2>
                <p>{post.date}</p>
                <div className={styles.author}>
                    <img src={authors[post.author.image]} alt={`Foto do autor do texto ${post.author.name}`} />
                    <p>{post.author.name}</p>
                </div>
                    <span>{post.theme}</span>
                <img
                    className={styles.banner}
                    src={`/assets/posts/${post.id}/main.jpg`}
                    alt='Imagem sobre o tema Convenção Nacional'
                />
            </div>
            <section className={styles.conteudoPost}>
                <div className={styles.text}>
                    <ReactMarkdown>
                        {post.text}
                    </ReactMarkdown>
                </div>
                <Dictionary />
            </section>
            <h2>Mais conteúdos sobre Revolução Francesa</h2>
            <div style={{ width: 'fit-content', display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
                    {posts.filter(post => post.id !== Number(params.id)).map(post => (
                        <CardPost
                            key={post.id}
                            props={post}
                        />))}
            </div>
        </>
    )
}

export default Post;