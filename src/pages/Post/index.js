import styles from './Post.module.css';
import CardPost from '../../components/CardPost';
import { useParams } from 'react-router';
import posts from '../../json/posts.json'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import NotFound from '../NotFound';
import Dictionary from './Dictionary';

import lucas from '../../imgs/lucas-neves.jpeg';
import gabriel from '../../imgs/gabriel-umann.jpeg';
import { Link } from 'react-router-dom';

const authors = [gabriel, lucas];

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
                <div className={styles.allAuthor}>
                    {post.author.map(author => (
                        <div key={author.name} className={styles.author}>
                            <img src={authors[author.image]} alt={`Foto do autor do texto ${author.name}`} />
                            <p>{author.name}</p>
                        </div>
                    ))}

                </div>

                <Link
                    to='/article'
                    className={styles.themeLink}>{post.theme}
                </Link>
                <img
                    className={styles.banner}
                    src={`/assets/posts/${post.id}/main.jpg`}
                    alt='Imagem sobre o tema Convenção Nacional'
                />
            </div>
            <section className={styles.conteudoPost}>
                <div className={styles.text}>
                    <ReactMarkdown
                        linkTarget={{ link: props => <a rel="noreferrer" href={props.href} target="_blank">{props.children}</a> }}
                    >
                        {post.text}
                    </ReactMarkdown>
                    <h1>Referências:</h1>
                    <ul>
                        {post.ref.map(item => (
                            <li key={item.name}><a rel="noreferrer" href={item.link} target='_blank'>{item.name}</a></li>
                        ))}
                    </ul>
                </div>
                <Dictionary data={post.dic} />
            </section>
            <div className={styles.relatedContainer}>
                <h2>Mais conteúdos sobre Revolução Francesa</h2>
                <div className={styles.related}>
                    {posts.filter(post => post.id !== Number(params.id)).map(post => (
                        <CardPost
                            key={post.id}
                            props={post}
                            sizePX={320}
                        />))}
                </div>
            </div>

        </>
    )
}

export default Post;