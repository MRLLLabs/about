import React from 'react';
import Collections from './Collections.jsx';
import axios from 'axios';
import AboutStyle from './styled-components/About-style';

class About extends React.Component {
  constructor() {
      super();
      this.state = {
          readMore: false,
          showMore: false,
          currentData: {},
          color: AboutStyle.color
      }
      this.showClicked = this.showClicked.bind(this);
      this.readClicked = this.readClicked.bind(this);
  }

  componentDidMount() {
    axios.get('/about/5de6414ac440ca30bd517220').then((response) => {
        response.data.adjectives = JSON.parse(response.data.adjectives);
        this.setState({currentData: response.data})
    }).catch((err) => {
        
    })
  }

  showClicked() {
    this.setState({showMore: !this.state.showMore})
  }
  
  readClicked() {
    this.setState({readMore: !this.state.readMore})
  }

  read() {
      if(!this.state.readMore) {
          if(this.state.currentData.description) {
              return(
                <AboutStyle.AboutText>{this.state.currentData.description.split('.').splice(0,5).join('.')}. <AboutStyle.Read onClick={this.readClicked}>Read More</AboutStyle.Read></AboutStyle.AboutText>
              )
          } else {
              return(
                  null
              )
          }
      } else {
          return(
            <AboutStyle.AboutText>{this.state.currentData.description}<AboutStyle.Read onClick={this.readClicked}> Read Less</AboutStyle.Read></AboutStyle.AboutText>
          )
      }
  }
  show() {
    
      if (!this.state.showMore) {
          return (
              <div>
                  <AboutStyle.Wrapper>
                   <span><AboutStyle.AboutTitle>About</AboutStyle.AboutTitle> <AboutStyle.Show onClick={this.showClicked}>Show More</AboutStyle.Show></span>
                   <AboutStyle.LineBreak />
                   {this.read()}
                   <AboutStyle.GridContainer>
                   <AboutStyle.GridItem><AboutStyle.InfoTitle>CEO</AboutStyle.InfoTitle><AboutStyle.InfoTextCEO>{this.state.currentData.CEO}</AboutStyle.InfoTextCEO></AboutStyle.GridItem>
                   <AboutStyle.GridItem><AboutStyle.InfoTitle>Employees</AboutStyle.InfoTitle><AboutStyle.InfoText>{this.state.currentData.EmployeeCount}</AboutStyle.InfoText></AboutStyle.GridItem>
                   <AboutStyle.GridItem><AboutStyle.InfoTitle>Headquarters</AboutStyle.InfoTitle><AboutStyle.InfoText>{this.state.currentData.Headquarters}</AboutStyle.InfoText></AboutStyle.GridItem>
                   <AboutStyle.GridItem><AboutStyle.InfoTitle>Founded</AboutStyle.InfoTitle><AboutStyle.InfoText>{this.state.currentData.Founded}</AboutStyle.InfoText></AboutStyle.GridItem>
                   <AboutStyle.GridItem><AboutStyle.InfoTitle>Market Cap</AboutStyle.InfoTitle><AboutStyle.InfoText>{this.state.currentData.MarketCap}</AboutStyle.InfoText></AboutStyle.GridItem>
                   <AboutStyle.GridItem><AboutStyle.InfoTitle>Price-Earnings Ratio</AboutStyle.InfoTitle><AboutStyle.InfoText>{this.state.currentData.EarningsRatio}</AboutStyle.InfoText></AboutStyle.GridItem>
                   <AboutStyle.GridItem><AboutStyle.InfoTitle>Dividend Yield</AboutStyle.InfoTitle><AboutStyle.InfoText>{this.state.currentData.DividendYield}</AboutStyle.InfoText></AboutStyle.GridItem>
                   <AboutStyle.GridItem><AboutStyle.InfoTitle>Average Volume</AboutStyle.InfoTitle><AboutStyle.InfoText>{this.state.currentData.AvgVolume}</AboutStyle.InfoText></AboutStyle.GridItem>
                   </AboutStyle.GridContainer>
                   </AboutStyle.Wrapper>
                   <Collections color={this.state.color} adj={this.state.currentData.adjectives}/>
              </div>
          )
      } else {
        return (
        <div>
            <AboutStyle.Wrapper>
            <span><AboutStyle.AboutTitle>About</AboutStyle.AboutTitle> <AboutStyle.Show onClick={this.showClicked}>Show Less</AboutStyle.Show></span>
            <AboutStyle.LineBreak />
            {this.read()}
            <AboutStyle.GridContainer>
            <AboutStyle.GridItem><AboutStyle.InfoTitle>CEO</AboutStyle.InfoTitle><AboutStyle.InfoTextCEO>{this.state.currentData.CEO}</AboutStyle.InfoTextCEO></AboutStyle.GridItem>
            <AboutStyle.GridItem><AboutStyle.InfoTitle>Employees</AboutStyle.InfoTitle><AboutStyle.InfoText>{this.state.currentData.EmployeeCount}</AboutStyle.InfoText></AboutStyle.GridItem>
            <AboutStyle.GridItem><AboutStyle.InfoTitle>Headquarters</AboutStyle.InfoTitle><AboutStyle.InfoText>{this.state.currentData.Headquarters}</AboutStyle.InfoText></AboutStyle.GridItem>
            <AboutStyle.GridItem><AboutStyle.InfoTitle>Founded</AboutStyle.InfoTitle><AboutStyle.InfoText>{this.state.currentData.Founded}</AboutStyle.InfoText></AboutStyle.GridItem>
            <AboutStyle.GridItem><AboutStyle.InfoTitle>Market Cap</AboutStyle.InfoTitle><AboutStyle.InfoText>{this.state.currentData.MarketCap}</AboutStyle.InfoText></AboutStyle.GridItem>
            <AboutStyle.GridItem><AboutStyle.InfoTitle>Price-Earnings Ratio</AboutStyle.InfoTitle><AboutStyle.InfoText>{this.state.currentData.EarningsRatio}</AboutStyle.InfoText></AboutStyle.GridItem>
            <AboutStyle.GridItem><AboutStyle.InfoTitle>Dividend Yield</AboutStyle.InfoTitle><AboutStyle.InfoText>{this.state.currentData.DividendYield}</AboutStyle.InfoText></AboutStyle.GridItem>
            <AboutStyle.GridItem><AboutStyle.InfoTitle>Average Volume</AboutStyle.InfoTitle><AboutStyle.InfoText>{this.state.currentData.AvgVolume}</AboutStyle.InfoText></AboutStyle.GridItem>
            <AboutStyle.GridItem><AboutStyle.InfoTitle>High Today</AboutStyle.InfoTitle><AboutStyle.InfoText>{this.state.currentData.HighToday}</AboutStyle.InfoText></AboutStyle.GridItem>
            <AboutStyle.GridItem><AboutStyle.InfoTitle>Low Today</AboutStyle.InfoTitle><AboutStyle.InfoText>{this.state.currentData.LowToday}</AboutStyle.InfoText></AboutStyle.GridItem>
            <AboutStyle.GridItem><AboutStyle.InfoTitle>Open Price</AboutStyle.InfoTitle><AboutStyle.InfoText>{this.state.currentData.OpenPrice}</AboutStyle.InfoText></AboutStyle.GridItem>
            <AboutStyle.GridItem><AboutStyle.InfoTitle>Volume</AboutStyle.InfoTitle><AboutStyle.InfoText>{this.state.currentData.Volume}</AboutStyle.InfoText></AboutStyle.GridItem>
            <AboutStyle.GridItem><AboutStyle.InfoTitle>52 Week High</AboutStyle.InfoTitle><AboutStyle.InfoText>{this.state.currentData.HighYear}</AboutStyle.InfoText></AboutStyle.GridItem>
            <AboutStyle.GridItem><AboutStyle.InfoTitle>52 Week Low</AboutStyle.InfoTitle><AboutStyle.InfoText>{this.state.currentData.LowYear}</AboutStyle.InfoText></AboutStyle.GridItem>
            </AboutStyle.GridContainer>
            </AboutStyle.Wrapper>
            <Collections color={this.state.color} adj={this.state.currentData.adjectives}/>
        </div>
        )
      }
  }

  render() {
      return(
          this.show()
      )
  }
}


export default About;
