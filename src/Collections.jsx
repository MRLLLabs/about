import React from 'react';
import CollectionStyle from './styled-components/Collections-style'


class Collections extends React.Component {
  constructor(props) {
      super(props);
  }

  collectionList() {
      if (this.props.adj) {
        return this.props.adj.map((word) => {
            return (
              <CollectionStyle.Collection>{word}</CollectionStyle.Collection>
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