import React from 'react';
import styled from 'styled-components'

const changeColor = () => {
    var colors = [`#21CE99`, `#F45531`];
    return colors[Math.round(Math.random() * (1 - 0) + 0)]
}

const color = changeColor();

const changeContainerColor = () => {
    if (color === `#21CE99`) {
        return `rgb(33, 206, 153, .1)`
    } else {
        return `rgb(244, 85, 49, .1)`
    }
}

const containerColor = changeContainerColor();



const Wrapper = styled.div`
padding: 4em;
background: #1B1B1D;
display: grid;
`;

const CollectionsTitle = styled.div`
float: left;
color: #ffffff;
font-family: 'DINPro-Medium';
font-size: 24px;
`

const LineBreak = styled.hr`
display: block;
height: 1px;
border: 0;
border-top: 1px solid black;
margin: 1em 0;
margin-bottom: 25px;
padding: 0;
`;

const CollectionContainter = styled.div`
border-radius: 25px;
background: ${containerColor};
padding: 8px; 
text-align:center;
height: 15px;
width: 100px
`;

const Collection = styled.div`
color: ${color};
font-family: 'DINPro-Medium';
font-size: 13px;
`;


class Collections extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return (
          <Wrapper>
              <CollectionsTitle>Collections</CollectionsTitle>
              <LineBreak />
              <CollectionContainter><Collection>Social Media</Collection></CollectionContainter>
          </Wrapper>
      )
  }
}

export default Collections;