import BookShelfTable from "components/BookShelfTable";
import NavigateButton from "components/common/NavigateButton";
import ScrollContainer from "components/common/ScrollContainer";
import Section from "components/common/Section";
import styles from './Dashboard.module.scss';
import { ROUTES } from "constants";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { booksApi } from "services/booksApi";
import { ToasterContext } from "components/App";
import { prepareToast } from "utils/prepareToast";

const columns = ['Book title', 'Author name', 'Category', 'ISBN', 'Actions'];

export const BooksContext = createContext(null);

const Dashboard = () => {
    const [ books, setBooks] = useState([]);
    const [ shouldRefetch, setShouldRefetch ] = useState(false);
    const isFirstRender = useRef(true);
    const { createToast } = useContext(ToasterContext);

    useEffect(() => {
        if(isFirstRender.current) {
            booksApi.fetchAllBooks()
            .then((books) => setBooks(books))
            .catch(() => createToast(prepareToast('error')));
            
            isFirstRender.current = false;
        }
        if(shouldRefetch) {
            booksApi.fetchAllBooks()
            .then((data) => {
                setBooks(data);
                setShouldRefetch(false)
            })
            .catch(() => createToast(prepareToast('error')));
        }

    }, [createToast, shouldRefetch]);

    return (
        <BooksContext.Provider value={ setShouldRefetch }>
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
        </BooksContext.Provider>
    )
}

export default Dashboard;