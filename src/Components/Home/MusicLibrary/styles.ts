import styled from "styled-components";

export const Container  = styled.div`
display: grid;
height: 100%;
margin-top: 4rem;
grid-template-columns: repeat(7, 206px);
row-gap: 4rem;
justify-content: space-around;
`;

export const Music = styled.img`
 background-color: ${props=> props.theme['white']};
 border-radius:50%;
 position: relative;
`;

export const Div = styled.div`
display: flex;
flex-direction: column;
`;

export const MusicName = styled.div`
    margin: auto;
    font-family: "Baloo 2", serif;
    font-style: normal;
    font-size:1rem;
    line-height: 1rem;
    color: ${props=> props.theme['white']};
    transition: opacity 0.2s ease-in-out;
    opacity: 0;

    &:hover{
    opacity: 1;
    }
`

export const Icon = styled.div`
margin-left:8rem;
margin-top:-4rem;
position: absolute;
transition: opacity 0.2s ease-in-out;
opacity: 0;

&:hover{
    opacity: 1;
}
`;

export const Span = styled.span`
display: flex;
`;

export const P = styled.p`
  display: flex;
  color:#FFA500;
  margin-left: 1rem;
  font-size: 2.5rem;
  font-family: "Baloo 2", serif;
  font-weight:bold;
  text-shadow: 2px 2px 4px rgb(137, 106, 47); 
`;

 export const TrackContainer = styled.div`
 display: flex;
 flex-direction: column;
 `;