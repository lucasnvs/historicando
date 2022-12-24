import styles from './Post.module.css';
import CardPost from '../../components/CardPost';
import { useParams } from 'react-router';
import posts from '../../json/revolucao-francesa/posts.json'

const Post = () => {
    const params = useParams();

    const post = posts.find( post => {
        return post.id === Number(params.id)
    })

    console.log(post)
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
                    {post.text}
            </div>
            

                <h2>Mais conteúdos sobre Revolução Francesa</h2>
                <div style={{ width: 'fit-content', display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center'}}>
                    <CardPost 
                    title='Assembleia Nacional'
                    date='1789 - 1793' 
                    text='Logo após a morte do principe de persia, essa epoca 
                    que marcou tanto se inicia um dos piores períodos da história francesa'
                    />
                    <CardPost
                    title='Diretório'
                    date='1795 - 1799' 
                    text='Logo após a morte do principe de persia, essa epoca 
                    que marcou tanto se inicia um dos piores períodos da história francesa'
                    />
                </div>
            
            </section>
    )
}

export default Post;