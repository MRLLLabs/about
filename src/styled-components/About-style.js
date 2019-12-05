import styled from 'styled-components'

const AboutStyle = {}

AboutStyle.Wrapper = styled.div`
padding: 4em;
background: #1B1B1D;
display: grid;
`;

AboutStyle.GridContainer = styled.div`
display: grid;
grid-template-columns: auto auto auto auto;
`;

AboutStyle.GridItem = styled.div`
border: 1px;
`;

AboutStyle.InfoTitle = styled.div`
display: inline-block;
color: #ffffff;
font-family: 'DINPro-Medium';
font-size: 13px;
`;

AboutStyle.InfoText = styled.div`
margin-right: 10px;
margin-bottom: 10px;
color: #ffffff;
font-family: 'DINPro-Regular';
font-size: 13px;
`;

AboutStyle.InfoTextCEO = styled.div`
margin-right: 10px;
margin-bottom: 10px;
font-family: 'DINPro-Medium';
font-size: 13px;
`;

AboutStyle.AboutTitle = styled.div`
float: left;
color: #ffffff;
font-family: 'DINPro-Medium';
font-size: 26px;
`
AboutStyle.Show = styled.div`
float: right;
padding-top: 10px;
font-family: 'DINPro-Medium';
font-size: 13px;
`;

AboutStyle.LineBreak = styled.hr`
display: block;
height: 1px;
border: 0;
border-top: 1px solid black;
margin: 1em 0;
margin-bottom: 25px;
padding: 0;
`;

AboutStyle.AboutText = styled.div`
margin-bottom: 40px;
color: #ffffff;
font-family: 'DINPro-Regular';
font-size: 16px;
`;

AboutStyle.Read = styled.span`
font-family: 'DINPro-Medium';
font-size: 13px;
`;

export default AboutStyle;