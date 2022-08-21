import TextButton from "components/common/TextButton";
import styles from './BookShelfTable.module.scss';

const BookShelfTable = ({
    books,
    columnNames,
    tableStyles = '',
}) => {
    // styles
    const tableCss = `${styles.table} ${tableStyles}`;

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
                {books.map(({ bookId, title, author, category, ISBN }) => (
                    <tr
                        key={ bookId }
                    >
                        <td>{ title }</td>
                        <td>{ author }</td>
                        <td
                            className={ styles.cat_td }
                        >
                            { category.join(', ') }
                        </td>
                        <td
                            className={ styles.ibsn }
                        >
                            { ISBN }
                        </td>
                        <td className={ styles.btns }>
                            <TextButton text="Edit" />
                            <TextButton text="Delete" />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default BookShelfTable;