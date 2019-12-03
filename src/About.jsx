import React from 'react';
import Collections from './Collections.jsx';
import axios from 'axios';
import styled from 'styled-components'

const changeColor = () => {
    var colors = [`#21CE99`, `#F45531`];
    return colors[Math.round(Math.random() * (1 - 0) + 0)]
}

const color = changeColor();

const Wrapper = styled.div`
padding: 4em;
background: #1B1B1D;
display: grid;
`;

const GridContainer = styled.div`
display: grid;
grid-template-columns: auto auto auto auto;
`;

const GridItem = styled.div`
border: 1px;
`;

const InfoTitle = styled.div`
display: inline-block;
color: #ffffff;
font-family: 'DINPro-Medium';
font-size: 13px;
`;

const InfoText = styled.div`
margin-right: 10px;
margin-bottom: 10px;
color: #ffffff;
font-family: 'DINPro-Regular';
font-size: 13px;
`;

const InfoTextCEO = styled.div`
margin-right: 10px;
margin-bottom: 10px;
color: ${color};
font-family: 'DINPro-Medium';
font-size: 13px;
`;

const AboutTitle = styled.div`
float: left;
color: #ffffff;
font-family: 'DINPro-Medium';
font-size: 24px;
`
const Show = styled.div`
float: right;
padding-top: 10px;
color: ${color};
font-family: 'DINPro-Medium';
font-size: 13px;
`;

const LineBreak = styled.hr`
display: block;
height: 1px;
border: 0;
border-top: 1px solid black;
margin: 1em 0;
margin-bottom: 25px;
padding: 0;
`;

const AboutText = styled.div`
margin-bottom: 40px;
color: #ffffff;
font-family: 'DINPro-Regular';
font-size: 16px;
`;

const Read = styled.span`
font-family: 'DINPro-Medium';
font-size: 13px;
color: ${color};
`;

class About extends React.Component {
  constructor() {
      super();
      this.state = {
          readMore: false,
          showMore: false,
          currentData: {},
          color: color
      }
      this.showClicked = this.showClicked.bind(this);
      this.readClicked = this.readClicked.bind(this);
  }

  componentDidMount() {
      console.log(this.state.color)
    axios.get('/about/5de6414ac440ca30bd517220').then((response) => {
        response.data.adjectives = JSON.parse(response.data.adjectives);
        this.setState({currentData: response.data})
        console.log(response.data)
        console.log(response.data.description)
    }).catch((err) => {
        console.log(err)
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
                <AboutText>{this.state.currentData.description.split('.').splice(0,5).join('.')}.<Read onClick={this.readClicked}> Read More</Read></AboutText>
              )
          } else {
              return(
                  null
              )
          }
      } else {
          return(
            <AboutText>{this.state.currentData.description}<Read onClick={this.readClicked}> Read Less</Read></AboutText>
          )
      }
  }
  show() {
    
      if (!this.state.showMore) {
          return (
              <div>
                  <Wrapper>
                   <span><AboutTitle>About</AboutTitle> <Show onClick={this.showClicked}>Show More</Show></span>
                   <LineBreak />
                   {this.read()}
                   <GridContainer>
                   <GridItem><InfoTitle>CEO</InfoTitle><InfoTextCEO>{this.state.currentData.CEO}</InfoTextCEO></GridItem>
                   <GridItem><InfoTitle>Employees</InfoTitle><InfoText>{this.state.currentData.EmployeeCount}</InfoText></GridItem>
                   <GridItem><InfoTitle>Headquarters</InfoTitle><InfoText>{this.state.currentData.Headquarters}</InfoText></GridItem>
                   <GridItem><InfoTitle>Founded</InfoTitle><InfoText>{this.state.currentData.Founded}</InfoText></GridItem>
                   <GridItem><InfoTitle>Market Cap</InfoTitle><InfoText>{this.state.currentData.MarketCap}</InfoText></GridItem>
                   <GridItem><InfoTitle>Price-Earnings Ratio</InfoTitle><InfoText>{this.state.currentData.EarningsRatio}</InfoText></GridItem>
                   <GridItem><InfoTitle>Dividend Yield</InfoTitle><InfoText>{this.state.currentData.DividendYield}</InfoText></GridItem>
                   <GridItem><InfoTitle>Average Volume</InfoTitle><InfoText>{this.state.currentData.AvgVolume}</InfoText></GridItem>
                   </GridContainer>
                   </Wrapper>
                   <Collections color={this.state.color} adj={this.state.currentData.adjectives}/>
              </div>
          )
      } else {
        return (
        <div>
            <Wrapper>
            <span><AboutTitle>About</AboutTitle> <Show onClick={this.showClicked}>Show Less</Show></span>
            <LineBreak />
            {this.read()}
            <GridContainer>
            <GridItem><InfoTitle>CEO</InfoTitle><InfoTextCEO>{this.state.currentData.CEO}</InfoTextCEO></GridItem>
            <GridItem><InfoTitle>Employees</InfoTitle><InfoText>{this.state.currentData.EmployeeCount}</InfoText></GridItem>
            <GridItem><InfoTitle>Headquarters</InfoTitle><InfoText>{this.state.currentData.Headquarters}</InfoText></GridItem>
            <GridItem><InfoTitle>Founded</InfoTitle><InfoText>{this.state.currentData.Founded}</InfoText></GridItem>
            <GridItem><InfoTitle>Market Cap</InfoTitle><InfoText>{this.state.currentData.MarketCap}</InfoText></GridItem>
            <GridItem><InfoTitle>Price-Earnings Ratio</InfoTitle><InfoText>{this.state.currentData.EarningsRatio}</InfoText></GridItem>
            <GridItem><InfoTitle>Dividend Yield</InfoTitle><InfoText>{this.state.currentData.DividendYield}</InfoText></GridItem>
            <GridItem><InfoTitle>Average Volume</InfoTitle><InfoText>{this.state.currentData.AvgVolume}</InfoText></GridItem>
            <GridItem><InfoTitle>High Today</InfoTitle><InfoText>{this.state.currentData.HighToday}</InfoText></GridItem>
            <GridItem><InfoTitle>Low Today</InfoTitle><InfoText>{this.state.currentData.LowToday}</InfoText></GridItem>
            <GridItem><InfoTitle>Open Price</InfoTitle><InfoText>{this.state.currentData.OpenPrice}</InfoText></GridItem>
            <GridItem><InfoTitle>Volume</InfoTitle><InfoText>{this.state.currentData.Volume}</InfoText></GridItem>
            <GridItem><InfoTitle>52 Week High</InfoTitle><InfoText>{this.state.currentData.HighYear}</InfoText></GridItem>
            <GridItem><InfoTitle>52 Week Low</InfoTitle><InfoText>{this.state.currentData.LowYear}</InfoText></GridItem>
            </GridContainer>
            </Wrapper>
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
