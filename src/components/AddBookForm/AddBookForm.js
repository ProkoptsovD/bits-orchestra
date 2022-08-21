import { useEffect, useState } from "react";
import { GENRES } from "constants";
import { booksApi } from "services/booksApi";
import InputWithLabel from "components/common/InputWithLabel";
import Select from "components/common/Select";
import TextButton from "components/common/TextButton";
import styles from './AddBookForm.module.scss';

const AddBookForm = ({ editBook, book, ...restProps }) => {
    const [ id, setId ] = useState();
    const [ title, setTitle ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ category, setCategory ] = useState('');
    const [ ISBN, setISBN] = useState('');
    const [ options, setOptions] = useState(GENRES);

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

    }, [editBook, book]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const book = { title, author, category, ISBN };
        editBook
            ? booksApi.updateBook(id, book).then(console.log).catch()
            : booksApi.createBook(book).then(console.log).catch()
    }
    function handleSuccess() {
        
    }
    function handleError() {

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