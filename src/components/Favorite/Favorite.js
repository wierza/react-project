import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCard } from '../../redux/cardsReducer';
import Card from '../Card/Card';

const Favorite = () => {

  const favoriteCards = useSelector(getFavoriteCard);

    if (favoriteCards.length === 0) {
      return (
        <section className={styles.favorite}>
          <PageTitle>Favorite</PageTitle>
          <p className={styles.noCards}>No cards...</p>
        </section>
      )
    }

    return (
      <section className={styles.favorite}>
        <PageTitle>Favorite</PageTitle>
          <article className={styles.column}>
            <ul className={styles.card}>
              {favoriteCards.map((card) =>
              (<Card key={card.id} title={card.title} cardId={card.id} isFavorite={card.isFavorite} />)
              )}
            </ul>
          </article>
      </section>
    );
  };

  export default Favorite;