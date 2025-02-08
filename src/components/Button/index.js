import styles from './Button.module.css';
import {ReactComponent as Arrow} from './arrow.svg';

const Button = (props) => {
    return (
        <button className={styles.Button} style={{ width: props.width }} onClick={props.onClick}>
            {props.children}
            <span className={styles.arrow}>
                <Arrow className={styles.icon} />
            </span>
        </button>
    )
}

export default Button;