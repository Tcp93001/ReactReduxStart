import React, { Component } from 'react';



class SearchBar extends Component{

    constructor(props) {
        super(props); /// super es el método que constructor utiliza para inicializar este estado en este componente

        this.state={ term:''};
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                value = {this.state.term}
                onChange={event => this.onInputChange(event.target.value)} /> 
            </div>
    );
    }

    onInputChange (term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }


}


export default SearchBar;

