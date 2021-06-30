import './index.css';

function SearchFormView({value, onChange, onSubmit}) {
    return (
        <form className="SearchForm"
            onSubmit={onSubmit}
            >
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    value={value}
                    onChange={onChange}
                />
        </form>
    )
}

export default SearchFormView