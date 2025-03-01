import styled from "styled-components";

export const Container = styled.div`
 height: 48rem;
 width:100%;
 gap: 10px;
 border-top: 1px solid ${props=> props.theme['white']};
 border-bottom: 1px solid ${props=> props.theme['white']};
 background: radial-gradient(circle, #343330, #595857);
 display: flex;
 align-items: center;
 justify-content: center;
`;

export const LoginContainer = styled.div`
 height: 24rem;
 width: 35rem;
 background-color: #E5E5E5;
 border-radius:10px;
 display: flex;
 flex-direction: column;
 align-items: center;
`;

export const InputContainer = styled.div`
 height: 4rem;
 width:29rem;
 display: flex;
 flex-direction: column;
 gap: 0.2rem;
 margin-top:2rem;

 p{
    font-family: "Baloo 2", serif;
    font-style: normal;
    font-size:medium;
    color: ${props=> props.theme['text-default']};
} 
`;

export const Input = styled.input`
height: 2.5rem;
width:29rem;
padding:0.5rem;
border-radius:5px;
border:1px ${props=> props.theme['#595857']};
`;

export const ValidationContainer = styled.div`
 height: 4rem;
 width:29rem;
 display: flex;
 flex-direction: column;
 gap: 0.5rem;
 margin-top:2rem;
 p{
    font-family: "Baloo 2", serif;
    font-style: normal;
    font-size:medium;
    color: ${props=> props.theme['blue']};
} 
`;

export const ValidationButton = styled.button`
 height: 2.5rem;
 width:29rem;
 padding:0.6rem;
 border-radius:5px;
 background-color: ${props=> props.theme['base-button']};
 border: transparent;
 color: ${props=> props.theme['white']};
`