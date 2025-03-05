import styled from "styled-components";

export const  EmptyPlaylistContainer = styled.div`
  min-height: 12rem;
  width:56rem;
  margin:auto;
  margin-top:4rem;
  display: flex;
  flex-direction:column;
  gap: 6rem;
`;

export const IconButtons = styled.button`
background:transparent;
border: transparent;
margin-left:53rem;
`
export const EmptyPlaylistMessage = styled.p`
height:6.5rem;
width:46.25rem;
font-family: "Baloo 2", serif;
font-size: 3.5rem;
display: flex;
align-items: center;
justify-content: center;
color: ${props=> props.theme['white']};
line-height: 3.5rem;
white-space: pre-line;
margin-inline:auto;
text-align: center;
`;