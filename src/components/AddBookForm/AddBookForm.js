import InputWithLabel from "components/common/InputWithLabel";
import Select from "components/common/Select";
import TextButton from "components/common/TextButton";
import styles from './AddBookForm.module.scss';

const AddBookForm = ({ editBook, book, ...restProps }) => {
    return (
        <form
            className={ styles.form }
            { ...restProps }
        >
            <InputWithLabel
                id="Book title"
                label="Book title"
                required
                type="text"
                labelStyles={ styles.label }
            />
            <InputWithLabel
                id="Author name"
                label="Author name"
                required
                type="text"
                labelStyles={ styles.label }
            />
            <Select
                options={ ['fantasy', 'historic', 'adventure'] }
                id="Genre"
                label="Pick up a genre..."
            />
            <InputWithLabel
                id="ISBN"
                label="International Standard Book Number (ISBN)"
                required
                type="number"
                labelStyles={ styles.label }
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