import { bookService } from '../services/books.service.js'
import { BookList } from '../cmps/BookList.jsx'
import { BookFilter } from '../cmps/BookFilter.jsx'
import { BookDetails } from './BookDetails.jsx'
import { BookAdd } from '../cmps/BookAdd.jsx'


const { Link } = ReactRouterDOM

export class BookApp extends React.Component {

    state = {
        books: [],
        filterBy: null,
        selectedBook: null,
        showBookAddModal: false
    }

    componentDidMount() {
        this.loadBooks()
    }


    loadBooks = () => {
        const { filterBy } = this.state
        bookService.query(filterBy).then(books => {
            this.setState({ books })
        })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadBooks)
    }

    onSelectBook = (selectedBook) => {
        this.setState({ selectedBook })
    }


    onUnSelectBook = (bookId) => {
        bookService.removeBook(bookId).then(() => {
            const newBooks = this.state.books.filter(book => book.id !== bookId)
            this.setState({ books: newBooks }, this.onBack)
        })
    }

    onBack = () => {
        console.log('enterd onBack')
        this.setState({ selectedBook: null })
    }

    onToggleReviewModal = () => {
        this.setState({
            ...this.state,
            showBookAddModal: !this.state.showBookAddModal
        })
        console.log(this.state.showBookAddModal)
    }

    render() {
        console.log(this.state.selectedBook)
        const { books, selectedBook,showBookAddModal } = this.state
        // if (!cars.length) return <div>Loading...</div>
        return (
            <section className="book-app">
                {!selectedBook ?
                    <React.Fragment>
                        <BookFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter}/>
                        <button onClick = {this.onToggleReviewModal}>Add Book</button>
                        {showBookAddModal && <BookAdd/>}
                        <BookList onSelectBook={this.onSelectBook} books={books} />
                    </React.Fragment>
                : <BookDetails book={selectedBook} onUnSelectBook={this.onUnSelectBook} onBack={this.onBack}/>}
            </section>
        )
    }
}
