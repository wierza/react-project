import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favorites = () => {
    return (
      <div className={styles.favorite}>
        <PageTitle>Favorite</PageTitle>
        <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                In aliquam imperdiet leo, at ultrices ante tempus quis.</p>
      </div>
    );
  };

  export default Favorites;