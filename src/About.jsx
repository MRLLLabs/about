import React from 'react';
import axios from 'axios';

class About extends React.Component {
  constructor() {
      super();
      this.state = {
          readMore: false,
          showMore: false,
          currentData: {}
      }
      this.getCompanyData = this.getCompanyData.bind(this);
  }

  getCompanyData() {
      //id number will be dynamic
      axios.get('/about/5de3822446d826141529bb01').then((response) => {
          this.setState({currentData: response.data})
          console.log(response.data)
      }).catch((err) => {
          console.log(err)
      })
  }

  render() {
      return (
         <div>
             <div>About</div><div>{this.state.currentData.description}</div>
             <div>CEO </div><div>{this.state.currentData.CEO}</div>
             <div>Employees </div><div>{this.state.currentData.EmployeeCount}</div>
             <div>Headquarters </div><div>{this.state.currentData.Headquarters}</div>
             <div>Founded </div><div>{this.state.currentData.Founded}</div>
             <div>Market Cap </div><div>{this.state.currentData.MarketCap}</div>
             <div>Price-Earnings Ratio </div><div>{this.state.currentData.EarningsRatio}</div>
             <div>Dividend Yield </div><div>{this.state.currentData.DividentYield}</div>
             <div>Average Volume </div><div>{this.state.currentData.AvgVolume}</div>
             <button onClick={this.getCompanyData}>Get Data</button>
         </div> 
      )
  }
}


export default About;