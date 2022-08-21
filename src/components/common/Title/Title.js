import styles from './Title.module.scss';

const Title = ({ text, component, className = '', ...restProps }) => {
    const css = `${styles.title} ${className}`;
    let hTagLevel = <h1 className={ css } {...restProps}>{ text }</h1>;
    
    switch(component) {
        case 'h2':
            hTagLevel = <h2 className={ css } {...restProps}>{ text }</h2>;
            break;
        case 'h3':
            hTagLevel = <h3 className={ css } {...restProps}>{ text }</h3>;
            break;
        case 'h4':
            hTagLevel = <h4 className={ css } {...restProps}>{ text }</h4>;
            break;
        case 'h5':
            hTagLevel = <h5 className={ css } {...restProps}>{ text }</h5>;
            break;
        case 'h6':
            hTagLevel = <h6 className={ css } {...restProps}>{ text }</h6>;
            break;
        default:
            return hTagLevel;
    }

    return hTagLevel;
}

export default Title;