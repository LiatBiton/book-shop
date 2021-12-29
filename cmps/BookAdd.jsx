import { BookDetails } from '../pages/BookDetails.jsx'
import { bookService } from '../services/books.service.js'

const SEARCH_URL = 'https://www.googleapis.com/books/v1/volumes?printType=books&q='

export class BookAdd extends React.Component {
    state = {}


    handleChange = (event) => {
        console.log('change')
        this.setState({
            ...this.state,
            input : event.target.value
        })
    }

    onSearchBook = (event) => {
        event.preventDefault();
        console.log('book added')
        axios.get(`${SEARCH_URL}${this.state.input}`).then(res => {
            this.setState({
                ...this.state,
                searchResponse: res.data
            })
        }).catch(err=>{
            throw err
        })       
        
    }


    render(){
        console.log('render add book modal')
        return(
            <section className="modal-container">
                <div className="modal add-book">
                    <h1>Add a new book </h1>
                    <button className = "btn close-modal" onClick = {()=> BookDetails.onToggleReviewModal()}>x</button>
                    
                    <form onSubmit={this.onSearchBook} className = "review-form">
                        <label htmlFor="search-book">Find and Add new Books:</label>
                        <input type="text" id="serch-box" name="full_name" placeholder="Search for a book" onChange={this.handleChange}/>
                        
                        <button className="submit-btn">search</button>
                    </form> 

                    <div className="search-results">
                        {this.state.searchResponse && this.state.searchResponse.items.map((book)=>(
                            <div className="result" key={book.id}>
                                <div>{book.volumeInfo.title},<span className="publish-date">{book.volumeInfo.publishedDate}</span></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}