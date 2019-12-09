import React from 'react';
import CollectionStyle from './styled-components/Collections-style'


class Collections extends React.Component {
  constructor(props) {
    super(props);

    this.mouseOn = this.mouseOn.bind(this);
    this.mouseOff = this.mouseOff.bind(this);
  }

  mouseOn(e) {
    e.target.style.color = 'black';
    if (this.props.color === `#21CE99`) {
      e.target.style.background = `#21CE99`
    } else {
      e.target.style.background = `#F45531`
    }
  }

  mouseOff(e) {
    e.target.style.color = this.props.color;
    e.target.style.background = this.props.container
  }


  collectionList() {
    if (this.props.adj) {
      return this.props.adj.map((word) => {
        return (
          <CollectionStyle.Collection style={{ background: this.props.container, color: this.props.color }} onMouseOver={this.mouseOn} onMouseOut={this.mouseOff}>{word}</CollectionStyle.Collection>
        )
      })
    }
  }

  render() {
    return (
      <CollectionStyle.Wrapper>
        <CollectionStyle.CollectionsTitle>Collections</CollectionStyle.CollectionsTitle>
        <CollectionStyle.LineBreak />
        <CollectionStyle.CollectionContainer>{this.collectionList()}</CollectionStyle.CollectionContainer>
      </CollectionStyle.Wrapper>
    )
  }
}

export default Collections;