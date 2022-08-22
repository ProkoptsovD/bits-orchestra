import { useEffect, useState, useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import AddBookForm from "components/AddBookForm"
import NavigateButton from "components/common/NavigateButton";
import Section from "components/common/Section";
import styles from './AddBookLayout.module.scss';
import { ROUTES } from "constants";
import { BOOK_MODES } from 'constants';
import { booksApi } from 'services/booksApi';
import { sanitaizeMode } from 'utils/sanitizeMode';
import { ToasterContext } from 'components/App';
import { prepareToast } from 'utils/prepareToast';

const AddBookLayout = () => {
    const [ book, setBook ] = useState(null);
    const location = useLocation();
    const { bookId } = useParams();
    const goBackHref = location.state?.from ?? ROUTES.HOME;
    const mode = sanitaizeMode(location.pathname);
    const isEditMode = mode === BOOK_MODES.EDIT;
    const titleText = isEditMode ? 'Edit book' : 'Add book';

    const { createToast } = useContext(ToasterContext);

    useEffect(() => {
        if(isEditMode) {
            booksApi.fetchBookById(bookId)
                .then(book => setBook(book))
                .catch(() => createToast(prepareToast('error')));
        }

    }, [bookId, isEditMode, createToast]);
    
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