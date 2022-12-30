import styles from './Button.module.css';

const Button = (props) => {
    return (
        <button className={styles.Button} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button;