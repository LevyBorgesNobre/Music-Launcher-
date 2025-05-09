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
 width: 27rem;
 font-size: 1.5rem;
 font-family: "Baloo 2", serif;
 color: ${props=> props.theme['white']};
 display: flex;
 gap: 0.5rem;
`;

export const Label  = styled.label`
 height: 2.9rem;
 width: 24rem;
 background-color: ${props=> props.theme['white']};
 color: black;
 border-radius:10px;
 padding-left:0.7rem;
 border: transparent;
 display: flex;
 font-family: "Baloo 2", serif;
 p{
    display: flex;
    align-items: center;
    white-space: nowrap;
    font-size: 1.1rem;
 }
`

export const InputContainer = styled.div`
 height:3rem ;
 flex-direction: column;
 gap: 0.2rem;
`;

export const InputFile = styled.input`
 height: 2.9rem;
 width: 22rem;
 border: transparent;
 background-color: ${props=> props.theme['white']};
 opacity: 0;
`;

export const LoadingMessage = styled.p`
 font-family: "Baloo 2", serif;
 font-style: normal;
 font-size:1.5rem;
 color: orange
 `


 