import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
    return (
      <div className={styles.about}>
        <PageTitle>About</PageTitle>
        <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                In aliquam imperdiet leo, at ultrices ante tempus quis.</p>
      </div>
    );
  };

  export default About;