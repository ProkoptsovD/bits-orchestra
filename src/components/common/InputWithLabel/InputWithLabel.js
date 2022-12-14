import styles from './InputWithLabel.module.scss';

const InputWithLabel = ({
    label,
    labelStyles = '',
    inputStyles = '',
    wrapperStyles = '',
    required,
    value,
    onChange,
    ...restProps
}) => {
    // styles
    const requieredCss = required ? styles.required : '';
    const labelCss = `${styles.label} ${labelStyles} ${requieredCss}`;
    const inputCss = `${styles.input} ${inputStyles}`;
    const wrapperCss = `${wrapperStyles}`;

    return (
        <div className={ wrapperCss }>
            { label && <label
                            className={ labelCss }
                        >
                            { label }
                        </label>
            }
            <input
                className={ inputCss }
                value={ value }
                onChange={ onChange }
                required={ required }
                { ...restProps }
            />
        </div>
    )
}

export default InputWithLabel;