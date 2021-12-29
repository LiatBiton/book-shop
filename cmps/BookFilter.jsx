

export class BookFilter extends React.Component {
    state = {
        filterBy: {
            name: '',
            minPrice: '',
            maxPrice:'',
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }

    onSubmitFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
        this.cleanForm()
    }

    cleanForm = () => {
        this.setState({ filterBy: { name: '', minPrice: '', maxPrice: '' } })
    }



//     <div class="range-slider">
//     <span>from <input type="number" value="25000" min="0" max="100000" step="500"> to <input type="number" value="75000" min="0" max="100000" step="500"></span>
//     <input value="25000" min="0" max="100000" step="500" type="range">
//     <input value="50000" min="0" max="100000" step="500" type="range">
//     <svg width="100%" height="24">
//         <line x1="4" y1="0" x2="480" y2="0" stroke="#444" stroke-width="12" stroke-dasharray="1 28"></line>
//     </svg>
// </div>

    render() {
        const { filterBy: { name, minPrice , maxPrice } } = this.state
        return (
            <form className="book-filter" onSubmit={this.onSubmitFilter}>
                <label
                    htmlFor="by-name">By Name:</label>
                <input
                    placeholder="Enter book name"
                    type="text"
                    id="by-name"
                    name="name"
                    value={name}
                    onChange={this.handleChange} />
                <label htmlFor="by-price">Price from:</label>
                <input
                    placeholder="Enter Minimum Price"
                    type="number"
                    min="0"
                    id="by-min-Price"
                    name="minPrice"
                    value={minPrice}
                    onChange={this.handleChange} />
                <label
                    htmlFor="by-max-Price">Max Price:</label>
                <input
                    placeholder="Enter maximum Price"
                    type="number"
                    min="0"
                    id="by-max-Price"
                    name="maxPrice"
                    value={maxPrice}
                    onChange={this.handleChange} />
                <button>Filter</button>
            </form>
        )
    }
}