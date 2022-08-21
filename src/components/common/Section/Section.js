import Container from '../Container';
import styles from './Section.module.scss';

const Section = ({
    children, title, titleStyles = '',
    containerStyles = '', sectionStyles = ''
}) => {
    return (
        <section
            className={ `${styles.section} ${sectionStyles}` }
        >
            <Container
                className={ containerStyles }
            >
                {
                    title && <h1 className={ `${styles.title} ${titleStyles}` }>
                                {title}
                            </h1>
                }
                {children}
            </Container>
        </section>
    )
}

export default Section;