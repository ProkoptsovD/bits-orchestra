import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import AddBookForm from "components/AddBookForm"
import NavigateButton from "components/common/NavigateButton";
import Section from "components/common/Section";
import styles from './AddBookLayout.module.scss';
import { ROUTES } from "constants";
import { BOOK_MODES } from 'constants';
import { booksApi } from 'services/booksApi';
import { sanitaizeMode } from 'utils/sanitizeMode';

const AddBookLayout = () => {
    const [ book, setBook ] = useState(null);
    const location = useLocation();
    const { bookId } = useParams();
    const goBackHref = location.state?.from ?? ROUTES.HOME;
    const mode = location.pathname ?? sanitaizeMode(location.pathname);
    const isEditMode = mode === BOOK_MODES.EDIT;
    const titleText = isEditMode ? 'Edit book' : 'Add book';
 

    useEffect(() => {
        if(isEditMode) {
            booksApi.fetchBookById(bookId)
                .then(book => setBook(book))
                .catch(console.log);
        }

    }, [bookId, isEditMode]);
    
    return (
        <Section
            component="h2"
            title={ titleText }
            titleStyles={ styles.title }
            sectionStyles={ styles.section }
        >
            <NavigateButton
                to={ goBackHref }
                text="Go back"
                className={ styles.navigate_btn }
            />
            <AddBookForm
                editBook={ isEditMode }
                book={ book }
            />
        </Section>
    )
}

export default AddBookLayout;