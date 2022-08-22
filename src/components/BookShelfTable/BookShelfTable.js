import { ToasterContext } from "components/App";
import NavigateButton from "components/common/NavigateButton";
import TextButton from "components/common/TextButton";
import { BooksContext } from "components/Dashboard/Dashboard";
import { ROUTES } from "constants";
import { useContext } from "react";
import { booksApi } from "services/booksApi";
import { prepareToast } from "utils/prepareToast";
import styles from './BookShelfTable.module.scss';

const BookShelfTable = ({
    books,
    columnNames,
    tableStyles = '',
}) => {
    const setShouldRefetch = useContext(BooksContext);
    const { createToast } = useContext(ToasterContext);
    // styles
    const tableCss = `${styles.table} ${tableStyles}`;
    const handleDeleteBtnClicked = (bookId) => {
        booksApi.deleteBook(bookId)
            .then(() => {
                createToast(prepareToast('success'));
                setShouldRefetch(true);
            })
            .catch(() => createToast(prepareToast('error')));
    }

    return (
        <table className={ tableCss }>
            <thead >
                <tr>
                    {columnNames?.map(columnName => (
                        <th
                            key={ columnName }
                        >
                            { columnName }
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {books.map(({ id, title, author, category, ISBN }) => (
                    <tr
                        key={ id }
                    >
                        <td>{ title }</td>
                        <td>{ author }</td>
                        <td
                            className={ styles.cat_td }
                        >
                            { category ? category?.join(', ') : '' }
                        </td>
                        <td
                            className={ styles.ibsn }
                        >
                            { ISBN }
                        </td>
                        <td className={ styles.btns }>
                            <NavigateButton
                                text="Edit"
                                to={ `/${ROUTES.EDIT_BOOK}/${id}` }
                            />
                            <TextButton text="Delete" onClick={() => handleDeleteBtnClicked(id) }/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default BookShelfTable;