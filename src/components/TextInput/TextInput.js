import styles from './TextInput.module.scss';
import 'font-awesome/css/font-awesome.min.css';

const TextInput = props => {
    return (<input className={styles.input} value={props.value} onChange={props.onChange} placeholder={props.placeholder} type="text" />);
};

export default TextInput;