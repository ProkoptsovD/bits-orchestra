import { Link } from 'react-router-dom';
import styles from 'components/common/TextButton/TextButton.module.scss';

const NavigateButton = ({ text, className = '', ...restProps }) => {
    const css = `${styles.button} ${className}`;
    
    return (
        <Link
            className={ css }
            { ...restProps }
        >
            { text }
        </Link>
    )
}

export default NavigateButton;