import { Link } from 'react-router-dom';
import styles from './CardPost.module.css';

const CardPost = (props) => {

    return (
        <Link to={`/post/${props.id}`}>
            <div className={styles.cardBody} style={{ borderRadius: props.border, width: props.sizePX, height: props.sizePX}}>
                <div style={{ backgroundImage: `url('/assets/posts/${props.id}/main.jpg')`, borderTopLeftRadius: props.border, borderTopRightRadius: props.border, borderBottomRightRadius: 0, borderBottomLeftRadius: 0}}>
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