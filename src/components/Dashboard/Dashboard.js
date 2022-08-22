import BookShelfTable from "components/BookShelfTable";
import NavigateButton from "components/common/NavigateButton";
import ScrollContainer from "components/common/ScrollContainer";
import Section from "components/common/Section";
import styles from './Dashboard.module.scss';
import { ROUTES } from "constants";

const someBook = [{	
        id: 1,
        title: "Nausea",
        author: "Jean-Paul Sartre",
        category: ["psychology", "philosophy"],
        ISBN: '0811201880'
	},
]

const columns = ['Book title', 'Author name', 'Category', 'ISBN', 'Actions'];

const Dashboard = () => {
    return (
        <Section sectionStyles={ styles.section }>
            <NavigateButton
                to={ ROUTES.ADD_BOOK }
                text="Add book"
                className={ styles.add_book }
            />
            <ScrollContainer>
                <BookShelfTable books={ someBook } columnNames={ columns }/>
            </ScrollContainer>
        </Section>
    )
}

export default Dashboard;