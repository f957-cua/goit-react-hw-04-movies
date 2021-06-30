import React, { Component } from 'react';
import SearchFormView from '../../component/SearchForm';

class SearchForm extends Component {
    state = {
        inputValue: '',
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.onSubmit(this.state.inputValue);

        this.setState({
            inputValue: ''
        })
    }

    onChange = (e) => {
        const value = e.target.value;
        this.setState({
          inputValue: value,  
        })
    }
    render() { 
        return (
            <SearchFormView
                value={this.state.inputValue}
                onChange={this.onChange}
                onSubmit={this.handleSubmit} />
         );
    }
}
 
export default SearchForm;