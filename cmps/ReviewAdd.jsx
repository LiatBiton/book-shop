import { bookService } from '../services/books.service.js'


export class ReviewAdd extends React.Component {
    state = {}


    handleChange = (event) => {
        this.setState({
            review : {
                ...this.state.review,
                [event.target.name] : event.target.value
            }
        })
    }

    onSubmitReview = (event) => {
        event.preventDefault();
        console.log(this.props.bookId , this.state.review)
        bookService.addReview(this.props.bookId , this.state.review).then(()=> {
            this.props.onToggleReviewModal()
            this.props.onAdded()
        })
        
    }

    render(){
        console.log(this.state.review)
        return(
            <section className="modal-container">
                <div className="modal">
                    <h1>Tell us about the book </h1>
                    <button className = "btn close-modal" onClick = {()=> this.props.onToggleReviewModal()}>x</button>
                    
                    <form onSubmit={this.onSubmitReview} className = "review-form">
                        <label htmlFor="by-fullname">Full name</label>
                        <input type="text" id="by-fullname" name="full_name" placeholder="Books Reader" onChange={this.handleChange}/>
                        <label htmlFor="by-date">Date:</label>
                        <input type="date" id="by-date" name="date" onChange={this.handleChange}/>
                        <label htmlFor="review">Review:</label>
                        <textarea type="text" cols="30" rows="10" name="comment" onChange={this.handleChange}/>
                        <button className="submit-btn"> Add review</button>
                    </form> 
                </div>
            </section>
            
        )
    }

}