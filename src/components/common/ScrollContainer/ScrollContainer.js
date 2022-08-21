import styles from './ScrollContainer.module.scss';

const Container = ({ children, className, ...restProps }) => {
    return (
        <div
            className={`${styles.scroll_container} ${className}` }
            { ...restProps }
        >
            { children }
        </div>
    )
}

export default Container;