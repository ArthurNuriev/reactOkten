import styles from "./RickandMorty.module.css";
const RickandMorty = (props) => {

    const {id, name, status, species, gender, image} = props.element;

    return (
        <div className={styles.box}>
            <div>
                <p>{id}</p>
                <p>{name}</p>
                <p>{status}</p>
                <p>{species}</p>
                <p>{gender}</p>
            </div>
            <div>
                <img src={image} alt="photo"/>
            </div>

        </div>
    )
}
export default RickandMorty;