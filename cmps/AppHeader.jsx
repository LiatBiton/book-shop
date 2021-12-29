
const { NavLink, withRouter } = ReactRouterDOM


class _AppHeader extends React.Component {

    render(){
        return(
        <header className="main-header">
          <h1 onClick={() => this.props.history.push('/')}>Book Store</h1>
                {/* <span>Books to show: {carsCount}</span> */}
                <nav className="main-nav">
                    <NavLink activeClassName="my-active" exact to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/books">Our books</NavLink>
                </nav>
        </header>
        )
    }
    
}


export const AppHeader = withRouter(_AppHeader)


