import AddBookForm from "components/AddBookForm"
import Section from "components/common/Section";
import styles from './AddBookLayout.module.scss';

const AddBookLayout = ({ editBook }) => {
    const title = editBook ? 'Edit book' : 'Add book';
    
    return (
        <Section
            component="h2"
            title={ title }
            titleStyles={ styles.title }
        >
            <AddBookForm editBook />
        </Section>
    )
}

export default AddBookLayout;