import styled from 'styled-components'

const CollectionStyle = {};

CollectionStyle.Wrapper = styled.div`
padding: 4em;
background: #1B1B1D;
display: grid;
`;

CollectionStyle.CollectionsTitle = styled.div`
float: left;
color: #ffffff;
font-family: 'DINPro-Medium';
font-size: 24px;
`

CollectionStyle.LineBreak = styled.hr`
display: block;
height: 1px;
border: 0;
border-top: 1px solid black;
margin: 1em 0;
margin-bottom: 25px;
padding: 0;
`;

CollectionStyle.CollectionContainer = styled.div`
display: inline-block;
`;

CollectionStyle.Collection = styled.span`
display:inline-block;
border-radius: 25px;
padding: 8px; 
text-align: center;
height: 15px;
width: fit-content;
margin-bottom: 10px;
margin-left: 8px;
margin-right: 8px;
font-family: 'DINPro-Medium';
font-size: 13px;
`;


export default CollectionStyle;