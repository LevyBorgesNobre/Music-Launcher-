import styled from "styled-components";

export const Container  = styled.div`
min-height: 40rem;
width:100%;
margin: auto;
margin-top:4rem;
display: grid;
grid-template-columns: repeat(7, 1fr);
gap: 1rem;
justify-content: center;
align-items: center;
box-sizing: border-box;
place-items: center;
`;

export const Music = styled.img`
height:13rem;
 width:13rem;
 background-color: ${props=> props.theme['white']};
 border-radius:50%;
position: relative;
`;

export const Div = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;

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