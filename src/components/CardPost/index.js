import { Link } from 'react-router-dom';
import styles from './CardPost.module.css';

const CardPost = ({props, sizePX, border}) => {

    return (
        <Link className={styles.link}to={`/post/${props.id}`}>
            <div className={styles.cardBody} style={{ borderRadius: border, width: sizePX, height: sizePX}}>
                <div style={{ backgroundImage: `url('/assets/posts/${props.id}/main.jpg')`, borderTopLeftRadius: border, borderTopRightRadius: border, borderBottomRightRadius: 0, borderBottomLeftRadius: 0}}>
                </div>
                <div>
                    <h3>{props.title}</h3>
                    <h6>{props.date}</h6>
                    <p>{props.text}</p>
                </div>
            </div>
        </Link>
    )
}

export default CardPost;