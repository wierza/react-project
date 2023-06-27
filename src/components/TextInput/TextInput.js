import styles from './TextInput.module.scss';
import 'font-awesome/css/font-awesome.min.css';

const TextInput = props => {
    return (<input className={styles.input} placeholder={props.placeholder} type="text" />);
};

export default TextInput;