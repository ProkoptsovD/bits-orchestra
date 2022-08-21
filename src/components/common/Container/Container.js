import styles from './Container.module.scss';

const Container = ({ children, className, ...restProps }) => {
    return (
        <div
            className={`${styles.container} ${className}` }
            { ...restProps }
        >
            { children }
        </div>
    )
}

export default Container;