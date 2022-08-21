import Container from 'components/common/Container';
import styles from './Header.module.scss';

const Header = ({ children, stylesHeader = '', stylesContainer = '' }) => {
    const headerCss = `${styles.header} ${stylesHeader}`;
    const containerCss = `${styles.container} ${stylesContainer}`;
    
    return (
        <header
            className={ headerCss }
        >
            <Container
                className={ containerCss }
            >
                { children }
            </Container>
        </header>
    )
}

export default Header;