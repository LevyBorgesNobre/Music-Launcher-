import styled from "styled-components";

export const IconButtons = styled.button`
background:transparent;
border: transparent;
`

export const MainMusicTrack = styled.div`
height: 5rem;
width:90vw;
background-color: #595857;
border-radius:5px;
display: flex;
justify-content: space-between;
`;

export const MusicData = styled.div`
height:10rem;
width:10rem;
display: flex;
gap: 1rem;
margin-top:0.5rem;
justify-content:center;
`;

export const MusicTrackImage = styled.img`
 height: 4rem;
 width:4rem;
 background-color: #E3E3E3;
 border-radius:5px;
`;

export const MusicTrackName = styled.p`
font-family: "Baloo 2", serif;
font-style: normal;
color: #000000;
font-size:1rem;
max-width: 7ch;
white-space: nowrap; 
overflow: hidden; 
text-overflow: ellipsis; 
margin-top:1.2rem;
`
export const ConfigButtons  = styled.div`
height: 5rem;
width:10rem;
display: flex;
justify-content: center;
gap: 1rem;
`