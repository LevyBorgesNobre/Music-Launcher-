import styled from "styled-components";

export const LoginPageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const LoginContainer = styled.div`
 height: 22rem;
 margin-top: 10rem;
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
border: transparent;

&::placeholder {
    font-size: 0.9rem;
    padding-left: 10px; 
    transition: all 0.3s ease; 
  }

  &:focus {
    outline: 1px solid ${(props) => props.theme['base-text']};
    transition:0.5s;
  }

  
`;

export const ValidationContainer = styled.div`
 height: 4rem;
 width:29rem;
 display: flex;
 flex-direction: column;
 gap: 1rem;
 margin-top:2rem;
`;

export const ChangeMethodButton = styled.button`
    font-family: "Baloo 2", serif;
    font-style: normal;
    font-size:medium;
    color: ${props=> props.theme['blue']};
    background:transparent;
    border: transparent;
    display: flex;
    justify-content: flex-start;
`

export const ValidationButton = styled.button`
 height: 2.5rem;
 width:29rem;
 padding:0.6rem;
 border-radius:5px;
 background-color: ${props=> props.theme['base-button']};
 border: transparent;
 color: ${props=> props.theme['white']};
`