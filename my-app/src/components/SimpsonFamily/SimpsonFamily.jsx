import styles from './SimpsonFamily.module.css'
const SimpsonFamily = (props) => {
    const  {name, lastname, age, gender, photo } = props;
    return (
        <div className={styles.box}>
            <div>
                <p>{name}</p>
                <p>{lastname}</p>
                <p>{age}</p>
                <p>{gender}</p>
            </div>
            <div>
                <img src={photo} alt="photo"/>
            </div>

        </div>
    )

}
export default SimpsonFamily;