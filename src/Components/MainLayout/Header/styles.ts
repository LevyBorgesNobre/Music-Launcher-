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

export const ButtonsContainer = styled.div`
margin-right:4rem;
display: flex;
gap: 1rem;
`

export const HeaderButton = styled.button`
max-width: 10rem;
min-width:4rem;
border: transparent;
background-color:${props=> props.theme['white']};
border-radius:5px;
font-family: "Baloo 2", serif;
font-size:medium;
padding: 2px;
white-space: nowrap;
`

export const LogoutButton = styled.button`
max-width: 10rem;
min-width:4rem;
color: red;
border: transparent;
color: black;
background-color:${props=> props.theme['white']};
border-radius:5px;
font-family: "Baloo 2", serif;
font-size:medium;
padding: 2px;
white-space: nowrap;
`;