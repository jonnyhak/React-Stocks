import React, { Component } from 'react';

class Stock extends Component {
  
  localClickHandler = () => {
    // console.log(this.props.stock)
    this.props.handleClick(this.props.stock)
  }


  render(){
  
    return (
      <div>
        <div className="card" onClick={this.localClickHandler}>
          <div className="card-body">
            <h5 className="card-title">{
              this.props.stock.name
              }</h5>
            <p className="card-text">{
              this.props.stock.ticker + " " + this.props.stock.price
              }</p>
          </div>
        </div>
      </div>
    )
  }
};

export default Stock
