import { Level } from "../../helpers/imc";
import styles from './GridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
    item: Level
}

export const GridItem = ({item}: Props) => {

    return (
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                <img src={item.icon === 'up' ? upImage : downImage} alt="Símbolo de positivo ou negativo" width="30" />
            </div>
            <div className={styles.gridTitle}>{item.title}</div>
            {item.yourImc &&
                <div className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m²</div>
            }
            <div className={styles.gridInfo}>
                <>
                    IMC entre {item.imc[0]} e {item.imc[1]}
                </>
            </div>
        </div>
    )
}