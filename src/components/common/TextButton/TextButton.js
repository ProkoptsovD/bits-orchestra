import styles from './TextButton.module.scss';

const TextButton = ({ text, className = '', ...restProps }) => {
    const css = `${styles.button} ${className}`;

    return (
        <button
            className={ css }
            { ...restProps }
        >
            { text }
        </button>
    )
}

export default TextButton;