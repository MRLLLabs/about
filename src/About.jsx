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
            someCurrentData: {},
            currentData: {},
            color: '',
            containerColor: '',
        }
        this.pointer = this.pointer.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
        this.showClicked = this.showClicked.bind(this);
        this.readClicked = this.readClicked.bind(this);
    }

    pointer(e) {
        e.target.style.cursor = 'pointer';
        if (e.target.innerHTML === 'Show More') {
            if (this.state.color === `#21CE99`) {
                e.target.style.color = '#31f7bb'
            } else {
                e.target.style.color = '#ff6b4a'
            }
        } 
    }

    mouseOut(e) {
        e.target.style.color = this.state.color
    }

    changeColor() {
        var colors = [`#21CE99`, `#F45531`];
        var color = colors[Math.round(Math.random() * (1 - 0) + 0)];
        this.setState({ color: color });
        if (color === `#21CE99`) {
            this.setState({ containerColor: `rgb(33, 206, 153, .1)` })
        } else {
            this.setState({ containerColor: `rgb(244, 85, 49, .1)` })
        }
    }


    componentDidMount() {
        this.changeColor();
        axios.get('/about/5de6414ac440ca30bd517220').then((response) => {
            response.data.adjectives = JSON.parse(response.data.adjectives);
            const someData = {};

            someData['CEO'] = response.data.CEO
            someData['Employees'] = response.data.EmployeeCount
            someData['Headquarters'] = response.data.Headquarters
            someData['Founded'] = response.data.Founded
            someData['Market Cap'] = response.data.MarketCap
            someData['Price-Earnings Ratio'] = response.data.EarningsRatio
            someData['Dividend Yield'] = response.data.DividendYield
            someData['Average Volume'] = response.data.AvgVolume

            const data = {};
            for (var key in someData) {
                data[key] = someData[key]
            }
            data['High Today'] = response.data.HighToday
            data['Low Today'] = response.data.LowToday
            data['Open Price'] = response.data.OpenPrice
            data['Volume'] = response.data.Volume
            data['52 Week High'] = response.data.HighYear
            data['52 Week Low'] = response.data.LowYear
            data.description = response.data.description
            data.adjectives = response.data.adjectives

            this.setState({ someCurrentData: someData, currentData: data })

        }).catch((err) => {

        })
    }

    showClicked() {
        this.setState({ showMore: !this.state.showMore })
    }

    readClicked() {
        this.setState({ readMore: !this.state.readMore })
    }

    mapObject(obj) {
        return Object.keys(obj).map((key) => {
            if (key === 'CEO') {
                return <AboutStyle.GridItem><AboutStyle.InfoTitle>{key}</AboutStyle.InfoTitle><AboutStyle.InfoTextCEO onMouseOver={this.pointer} style={{ color: this.state.color }}>{obj.CEO}</AboutStyle.InfoTextCEO></AboutStyle.GridItem>
            } else if (key !== '_id' && key !== 'description' && key !== 'adjectives' && key !== '__v') {
                return <AboutStyle.GridItem><AboutStyle.InfoTitle>{key}</AboutStyle.InfoTitle><AboutStyle.InfoText>{obj[key]}</AboutStyle.InfoText></AboutStyle.GridItem>
            }
        })
    }

    read() {
        if (!this.state.readMore) {
            if (this.state.currentData.description) {
                return (
                    <AboutStyle.AboutText>{this.state.currentData.description.split('.').splice(0, 5).join('.')}. <AboutStyle.Read onClick={this.readClicked} onMouseOver={this.pointer} style={{ color: this.state.color }}>Read More</AboutStyle.Read></AboutStyle.AboutText>
                )
            } else {
                return (
                    null
                )
            }
        } else {
            return (
                <AboutStyle.AboutText>{this.state.currentData.description}<AboutStyle.Read onClick={this.readClicked} onMouseOver={this.pointer} style={{ color: this.state.color }}> Read Less</AboutStyle.Read></AboutStyle.AboutText>
            )
        }
    }
    show() {
        var data;
        if (!this.state.showMore) {
            data = this.state.someCurrentData;
        } else {
            data = this.state.currentData
        }

        return (
            <div>
                <AboutStyle.Wrapper>
                    <span><AboutStyle.AboutTitle>About</AboutStyle.AboutTitle> <AboutStyle.Show onClick={this.showClicked} onMouseOver={this.pointer} onMouseOut={this.mouseOut} style={{ color: this.state.color }}>Show More</AboutStyle.Show></span>
                    <AboutStyle.LineBreak />
                    {this.read()}
                    <AboutStyle.GridContainer>
                        {this.mapObject(data)}
                    </AboutStyle.GridContainer>
                </AboutStyle.Wrapper>
                <Collections color={this.state.color} container={this.state.containerColor} adj={this.state.currentData.adjectives} />
            </div>
        )
    }

    render() {
        return (
            this.show()
        )
    }
}


export default About;
