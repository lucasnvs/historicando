import styles from './PeopleCard.module.css';

const PeopleCard = (props) => {
    return (
        <div className={styles.PeopleCard}>
            <img src={props.image} alt={`Foto de ${props.name}`}/>
            <div>
                <h3>{props.name}</h3>
                <h4>{props.sub}</h4>
            </div>

        </div>
    )
}

export default PeopleCard