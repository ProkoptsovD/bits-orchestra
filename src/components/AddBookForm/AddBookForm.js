import { useContext, useEffect, useState } from "react";
import { GENRES } from "constants";
import { booksApi } from "services/booksApi";
import InputWithLabel from "components/common/InputWithLabel";
import Select from "components/common/Select";
import TextButton from "components/common/TextButton";
import styles from './AddBookForm.module.scss';
import { ToasterContext } from "components/App";
import { prepareToast } from "utils/prepareToast";
import { validateISBN } from "utils/validateISBN";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "constants";

const AddBookForm = ({ editBook, book, ...restProps }) => {
    const [ id, setId ] = useState();
    const [ title, setTitle ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ category, setCategory ] = useState(GENRES[0]);
    const [ ISBN, setISBN] = useState('');
    const [ options, setOptions] = useState(GENRES);
    const [ shouldRedirect, setShouldRedirect ] = useState(false);
    const [ timoutId, setTimoutId ] = useState(0);

    const { clearAllToasts } = useContext(ToasterContext);
    const navigate = useNavigate();

    const { createToast } = useContext(ToasterContext);

    useEffect(() => {
        if(editBook && book) {
            const { id, title, author, category, ISBN } = book;
            
            setId(id);
            setTitle(title);
            setAuthor(author);
            setCategory(category?.[0]);
            setISBN(ISBN);
            setOptions([...category, ...GENRES]);
        }

        if(shouldRedirect) {
            clearAllToasts();
            navigate(ROUTES.HOME);
        }

        return () => clearTimeout(timoutId);

    }, [editBook, book, shouldRedirect, navigate, timoutId, clearAllToasts]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const isAllFilledIn = title && author && category && ISBN;
        const isISBNofNeededLenght = validateISBN(+ISBN);

        if(!isAllFilledIn) {
            createToast(prepareToast(null, 'All fields must be filled in'));
            return;
        }
        if(!isISBNofNeededLenght) {
            createToast(prepareToast(null, `ISBN length is ${ISBN.toString().length}. Needed 13 digits`));
            return;
        }

        const book = { title, author, category, ISBN: +ISBN };
        editBook
            ? booksApi.updateBook(id, book).then(handleSuccess).catch(handleError)
            : booksApi.createBook(book).then(handleSuccess).catch(handleError);
    }
    function handleSuccess() {
        createToast(prepareToast('success'));
        setTitle('');
        setAuthor('');
        setISBN('');
        
        setTimoutId(setTimeout(() => setShouldRedirect(true), 2000));
    }
    function handleError() {
        createToast(prepareToast('error'));
    }

    return (
        <form
            className={ styles.form }
            onSubmit={ handleSubmit }
            { ...restProps }
        >
            <InputWithLabel
                id="Book title"
                label="Book title"
                required
                type="text"
                labelStyles={ styles.label }
                onChange={(e) => setTitle(e.target.value)}
                value={ title }
            />
            <InputWithLabel
                id="Author name"
                label="Author name"
                required
                type="text"
                labelStyles={ styles.label }
                onChange={(e) => setAuthor(e.target.value)}
                value={ author }
            />
            <Select
                id="Genre"
                label="Pick up a genre..."
                onChange={(e) => setCategory(e.target.value)}
                value={ category }
                options={ options }
            />
            <InputWithLabel
                id="ISBN"
                label="International Standard Book Number (ISBN)"
                required
                type="number"
                labelStyles={ styles.label }
                onChange={(e) => setISBN(e.target.value)}
                value={ ISBN }
                
            />
            <TextButton
                type="submit"
                text={ editBook ? 'Save changes' : 'Add book' }
                className={ styles.add_book }
            />
        </form>
    )
}

export default AddBookForm;