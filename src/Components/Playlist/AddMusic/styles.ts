import styled from "styled-components";

export const Container = styled.div`
 min-height:6.5rem;
 width:60rem;
 display: flex;
 flex-direction:column;
 margin: auto;
 margin-top:5rem;
 gap: 5rem;
`

export const PlusCircleButton = styled.button`
background:transparent;
border: transparent;
margin-left:55rem;
`
export const SpaceToAddMusic = styled.div`
 height: 15rem;
 width:25rem;
 display: flex;
 flex-direction: column;
 margin: auto;
 gap: 2rem;
`;

export const Title = styled.p`
 height: 2.5rem;
 width: 24rem;
 font-size: 1.7rem;
 font-family: "Baloo 2", serif;
 color: ${props=> props.theme['white']};
 display: flex;
 gap: 0.5rem;
`;

export const Input  = styled.input`
 height: 2.9rem;
 width: 22rem;
 background-color: ${props=> props.theme['white']};
 border-radius:10px;
 padding-left:0.7rem;
 border: transparent;
 display: flex;

 &::placeholder{
    font-family: "Baloo 2", serif;
    font-size: 1rem;
    color: ${props=> props.theme['text-default']};
 }
`;

export const Label = styled.label`
 height: 2.9rem;
 width:22rem;
 background-color: ${props=> props.theme['white']};
 border-radius:10px;
 font-family: "Baloo 2", serif;
 display: flex;
 padding-left:0.7rem;
 white-space: nowrap;
 
 p{
    display: flex;
    align-items: center;
    color: ${props=> props.theme['text-default']};
 }
`;

export const InputFile = styled.input`
 height: 1rem;
 width: 10rem;
 border: transparent;
 background-color: ${props=> props.theme['white']};
 opacity: 0;
`;



 