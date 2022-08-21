import Container from '../Container';
import Title from '../Title';
import styles from './Section.module.scss';

const Section = ({
    children, title, titleStyles = '',
    containerStyles = '', sectionStyles = '',
    component
}) => {
    return (
        <section
            className={ `${styles.section} ${sectionStyles}` }
        >
            <Container
                className={ containerStyles }
            >
                {
                    title && <Title
                                text={ title }
                                component={ component }
                                className={ `${styles.title} ${titleStyles}` }
                            />
                }
                {children}
            </Container>
        </section>
    )
}

export default Section;