import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/cardsReducer';
import { removeCard } from '../../redux/cardsReducer';

const Card = props => {
    
    const dispatch = useDispatch();
    const clickHandler = () => {
        dispatch(toggleFavorite(props.cardId));
    };

    const removeHandler = () => {
        dispatch(removeCard(props.cardId));
    }


    return (
        <li className={styles.card}>{props.title}
            <i className={clsx('fa', 'fa-star-o', styles.favoriteIcon, props.isFavorite && styles.active)} onClick={clickHandler}></i>
            <i className={clsx('fa fa-trash', styles.removeIcon)} onClick={removeHandler}></i>
        </li>
    );
};

export default Card;