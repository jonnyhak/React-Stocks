import React, { Component } from 'react';

class SearchBar extends Component {

  state = {
    value: ''
  }
  
  localSortBy = (e) => {
    this.setState({value: e.target.value})
    this.props.toggleRadio(e.target.value)
    // console.log(e.target)
  }

  localFilter = (e) => {
    this.props.changeFilter(e.target.value)
  }

  render() {
    return (
      <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={this.state.value === "Alphabetically"} onChange={this.localSortBy}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={this.state.value === "Price"} onChange={this.localSortBy}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={this.localFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>

    </div>
  );
  }
}


export default SearchBar;
