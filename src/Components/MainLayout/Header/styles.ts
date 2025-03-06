import styled from "styled-components";

export const Div = styled.div`
height: 7rem;
width: 100%;
background-color:#343330;
display: flex;
align-items: center;
border-bottom: 3px solid white;
justify-content: space-between;
`;

export const HeaderButton = styled.button`
max-width: 7rem;
border: transparent;
background-color:${props=> props.theme['white']};
margin-right:4rem;
border-radius:5px;
font-family: "Baloo 2", serif;
font-size:medium;
padding: 5px;
white-space: nowrap;
`