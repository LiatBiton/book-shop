

export function BookPreview({ book, onSelectBook}) {
    return (
        <article onClick={() => onSelectBook(book)} className="book-preview">
            <img src={`${book.thumbnail}`} alt="" />
            <h4>Name: {book.title}</h4>
            <h4>Authors: {book.authors}</h4>
            <h4>Price: {book.listPrice.amount} <span>{book.listPrice.currencyCode}</span></h4>
        </article>
    )
}