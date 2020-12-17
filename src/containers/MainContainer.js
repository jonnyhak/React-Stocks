import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

let allStocks = []

class MainContainer extends Component {

  

  state = {
    stocks: [],
    portfolio: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then(response => {
        return response.json()
      })
      .then(arr => {
        allStocks = arr
        this.setState({
          stocks: arr
        })
      })
  }

  handleClick = (stockObj) => {
    if (!this.state.portfolio.includes(stockObj)) {
      this.setState({
        portfolio: [...this.state.portfolio, stockObj]
      })
    } else {
      let portfolioCopy = [...this.state.portfolio]
      let filteredPortfolioCopy = portfolioCopy.filter(stock => stock !== stockObj)
      this.setState({
        portfolio: filteredPortfolioCopy
      })
    }
  }

  changeFilter = (filterValue) => {
    let stocksCopy = allStocks
    let filteredStocksCopy = stocksCopy.filter(stock => stock.type === filterValue)
    this.setState({
      stocks: filteredStocksCopy
    })
  }


  toggleRadio = (value) => {
    let stocksCopy = [...this.state.stocks]
    let sortedStocks = []
    if (value === "Alphabetically") {
      console.log(value)
      sortedStocks = stocksCopy.sort((a, b) => {
        if(a.ticker < b.ticker) { return -1; }
        if(a.ticker > b.ticker) { return 1; }
        return 0;
      })
    } 
    if (value === "Price") {
      console.log(value)
      sortedStocks = stocksCopy.sort((a, b) => {
        return a.price - b.price
      })
    }
    this.setState({
      stocks: sortedStocks
    })
  }
  
  render() {
    // console.log(this.state.portfolio)
    return (
      <div>
        <SearchBar
          toggleRadio={this.toggleRadio}
          changeFilter={this.changeFilter}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
                stocks={this.state.stocks}
                handleClick={this.handleClick}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
                portfolio={this.state.portfolio}
                handleClick={this.handleClick}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
