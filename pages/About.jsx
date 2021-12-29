const { NavLink, Route} = ReactRouterDOM

export function About(){
    return (
        <section className = "about">
            <p className='about-p'>Our book shop is a leading international book retailer with a unique offer -- over 20 million books and free delivery worldwide (with no minimum spend).

                We ship thousands of books every day from our fulfillment centres in Gloucester, United Kingdom, and Melbourne, Australia, to more than 130 countries across the world -- displaying prices in 37 different local currencies.

                Our vision is to provide “All Books Available to All” by improving selection, access and affordability of books.
            </p>
            <img className ="about-img" src='../assets/img/team.jpg' />
        </section>
    )
}