import styles from './Input.module.css';

const Input = (props) => {
    return (
            <input className={styles.Input}
            placeholder={props.placeholder}
            onChange={props.onChange}
            onBlur={props.onBlur}
            />   
    )
}

export default Input;