import styles from './Button.module.css';
import {ReactComponent as Arrow} from './arrow.svg';

const Button = (props) => {
    return (
        <button className={styles.Button} onClick={props.onClick}>
            {props.children}
            <Arrow className={styles.arrow} />
        </button>
    )
}

export default Button;