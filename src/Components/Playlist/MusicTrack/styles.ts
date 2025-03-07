import styled from "styled-components";

export const PlaylistContainer = styled.div`
min-height:3rem;
min-width:90vw;
display: flex;
flex-direction:column;
margin-top:4rem;
gap: 2rem;
display: flex;
justify-content: center;
align-items: center;

overflow-y: auto; 

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    background: transparent;
  }
-ms-overflow-style: none; 
scrollbar-width: none; 
`;

export const Icons = styled.div`
height: 3rem;
width: 10rem;
display: flex;
align-self:end;
margin-right:6rem;
gap: 1rem;
`
export const IconButtons = styled.button`
background:transparent;
border: transparent;
`