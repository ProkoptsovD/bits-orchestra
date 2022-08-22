import BookShelfTable from "components/BookShelfTable";
import NavigateButton from "components/common/NavigateButton";
import ScrollContainer from "components/common/ScrollContainer";
import Section from "components/common/Section";
import styles from './Dashboard.module.scss';
import { ROUTES } from "constants";
import { useContext, useEffect, useState } from "react";
import { booksApi } from "services/booksApi";
import { ToasterContext } from "components/App";
import { prepareToast } from "utils/prepareToast";

const columns = ['Book title', 'Author name', 'Category', 'ISBN', 'Actions'];

const Dashboard = () => {
    const [ books, setBooks] = useState([]);
    const { createToast } = useContext(ToasterContext);

    useEffect(() => {
        booksApi.fetchAllBooks()
            .then((books) => setBooks(books))
            .catch(() => createToast(prepareToast('error')))

    }, [createToast]);

    return (
        <Section sectionStyles={ styles.section }>
            <NavigateButton
                to={ ROUTES.ADD_BOOK }
                text="Add book"
                className={ styles.add_book }
            />
            <ScrollContainer>
                <BookShelfTable books={ books } columnNames={ columns }/>
            </ScrollContainer>
        </Section>
    )
}

export default Dashboard;