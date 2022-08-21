import styles from './Select.module.scss';

const Select = ({
    options,
    value,
    onChange,
    id,
    label,
    selectStyles = '',
    wrapperStyles = ''
}) => {

    const selectCss = `${styles.select} ${selectStyles}`;
    const wrapperCss = `${styles.wrapper} ${wrapperStyles}`

    return (
        <div className={ wrapperCss }>
            {
                label &&    <label
                                className={ styles.label }
                                htmlFor={ id }
                            >
                                { label }
                            </label>
            }
            <select
                id={ id }
                name={ id }
                onChange={ onChange }
                value={ value }
                className={ selectCss }
            >
                {
                    options && options.map(option => (
                        <option
                            key={ option }
                            value={ option }
                        >
                            {option}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default Select;