import styled from "styled-components";

export const Music = styled.img`
height:13rem;
width: 13rem;
 background-color: ${props=> props.theme['white']};
 border-radius:50%;
 object-fit: cover;
position: relative;
`;
export const Div = styled.div`
display: flex;
flex-direction: column;

&:hover .element-hover{
     opacity: 1;
     transition: 0.3s
}
`;

export const MusicName = styled.p`
    margin: auto;
    margin-top:0.5rem;
    font-family: "Baloo 2", serif;
    font-style: normal;
    font-size:1rem;
    line-height: 1rem;
    color: ${props=> props.theme['white']};
    opacity: 0;
`

export const Icon = styled.button`
margin-left:8rem;
margin-top:-4rem;
position: absolute;
opacity: 0;
background:transparent;
border: transparent;
`;

export const Span = styled.span`
display: flex;
`;