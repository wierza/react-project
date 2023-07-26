import styles from './Container.module.scss';

const Container = props => {
    return (
        <div classnNme={`${styles.container} ${props.className}`}>{props.children}</div>
    );
};

export default Container;