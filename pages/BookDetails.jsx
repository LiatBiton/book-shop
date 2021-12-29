import {LongText} from "../cmps/LongText.jsx"
import {ReviewAdd} from "../cmps/ReviewAdd.jsx"
import { bookService } from "../services/books.service.js"

const { Link } = ReactRouterDOM
export class BookDetails extends React.Component {
    state = {
        book: this.props.book,
        showReviewModal: false
    }

    onToggleReviewModal = () => {
        this.setState({
            ...this.state,
            showReviewModal: !this.state.showReviewModal
        })
        console.log(this.state.showReviewModal)
    }

    reloadBook = () => {
        bookService.getBookById(this.state.book.id).then((data)=>{
            this.setState({
                book: data
            })
        })
                  
    }
 
    render() {
        const { book , showReviewModal } = this.state;
        
        var pageCountDescription = 
        book.pageCount>500 ? 'Long reading' : 
            book.pageCount>=200 ? 'Decent Reading' : 
                book.pageCount<=100 ? 'Light Reading' : ''

        var publicheDescription =
            book.publishedDate >= 10 ? 'Veteran Book' :
            book.publishedDate<1 ? 'New!' :
            ''

        var priceColor = 
            book.listPrice.amount>150 ? 'red' :
            book.listPrice.amount<20 ? 'green' :
            ''

        var isOnSale = 
            book.listPrice.isOnSale ? 'on SALE! 🤑' : ''

        var reviews = 
            book.reviews !== undefined ? book.reviews : []
            console.log(reviews)    

        return(
            <section className="details-section">
                <div className="book-details">
                <div className="img-container"><img src={`${book.thumbnail}`} alt="" /></div>
                <div className="details-container">
                    <div className="head-discription">
                        <h4 className="title">{book.title}</h4>
                        <h4 className="Subtitle">{book.subtitle}</h4>
                        <h4 className="Authors">{book.authors}</h4>
                        <button onClick={this.props.onBack}>Go back</button>
                        <button onClick={() => this.props.onUnSelectBook(book.id)}>Remove book</button>
                    </div>
                    <h4>Published Date: {book.publishedDate}<span>-{publicheDescription}</span></h4>
                    <h4>Page Count: {book.pageCount}<span>-{pageCountDescription}</span></h4>
                    <h4>language: {book.language}</h4>
                    <h4>Categories: {book.categories}</h4>
                
                    <h4 className={priceColor}>Price: {book.listPrice.amount} <span>{book.listPrice.currencyCode}</span><span> {isOnSale}</span></h4>
                    
                    <div>Description:
                        <LongText text = {book.description} isLongtxtShown = {book.description.length > 100 ? true : false} maxLength = '100'/>
                    </div>
                    <button onClick = {this.onToggleReviewModal}>Add review</button>
                    {showReviewModal && 
                        <ReviewAdd bookId={book.id}
                            onAdded={this.reloadBook}
                            onToggleReviewModal={this.onToggleReviewModal} />
                    }
                    
                    
                </div>
                </div>
                <div className="review-container">
                    {/* <ReviewList reviews={this.state.book.reviews} onRemoveReview={this.onRemoveReview}/> */}
                    {reviews.map((review, idx) => (
                        <div key={idx} className="review-details">
                            <h4>{review.full_name}</h4>
                            <button className="btn-remove-review" >×</button>
                            <h5 className="gray">{review.date}</h5>
                            <p>{review.comment}</p>
                        </div>
                    ))}
                </div>
            </section>
        )
    }
}



