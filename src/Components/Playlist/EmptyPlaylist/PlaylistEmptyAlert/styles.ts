import styled from "styled-components";

export const EmptyPlaylistMessage  = styled.p`
  min-height: 12rem;
  width:56rem;
  margin:auto;
  margin-top:4rem;
  display: flex;
  flex-direction:column;
  gap: 2rem;
  font-size: 4rem;
  line-height: 100%;
  font-family: 'baloo 2', cursive;
  justify-content: center;
  text-align: center;
  color: ${props => props.theme['white']};
`;

export const IconButtons = styled.button`
background:transparent;
border: transparent;
margin-left: auto;
`

export const  EmptyPlaylistContainer = styled.div`
  min-height: 12rem;
  width:56rem;
  margin:auto;
  margin-top:4rem;
  display: flex;
  align-content: center;
  flex-direction:column;
`;




