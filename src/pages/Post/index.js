import styles from './Post.module.css';
import CardPost from '../../components/CardPost';
import { useParams } from 'react-router';
import posts from '../../json/revolucao-francesa/posts.json'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const Post = () => {
    const params = useParams();

    const post = posts.find( post => {
        return post.id === Number(params.id)
    })
    console.log(params)
    return (
            <section className={styles.conteudoPost}>
                <h2>
                    {post.title}
                </h2>
                <p className={styles.reference}>
                    <span>{post.theme}</span> | Autor: Gabriel Umann
                </p>
                <img 
                    className={styles.banner} 
                    src={`/assets/posts/${post.id}/main.jpg`} 
                    alt='Imagem sobre o tema Convenção Nacional' 
                />
                
            <div className={styles.text}>
                <ReactMarkdown>
                    {post.text}
                </ReactMarkdown>
            </div>
            

                <h2>Mais conteúdos sobre Revolução Francesa</h2>
                <div style={{ width: 'fit-content', display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center'}}>
                {posts.filter( post => post.id !== Number(params.id)).map( post => (
                    <CardPost
                    key={post.id}
                    props={post}
                />))}
                </div>
            
            </section>
    )
}

export default Post;