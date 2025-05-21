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

export const InputContainer = styled.div`
 height:3rem ;
 flex-direction: column;

 form{
   display: flex;
   gap: 5px;
 };
`;

export const InputFile = styled.input`
 height: 2.9rem;
 width: 22rem;
 border: transparent;
 background-color: ${props=> props.theme['white']};
 opacity: 1;
 border-radius:10px;
 padding-left:1rem;
`;

export const SendSongButton = styled.button`
 width:5rem;
 height: 2.9rem;
 border-radius:10px;
 background-color: orange;
 outline: 0;
 border: transparent;
 `
export const LoadingMessage = styled.p`
 font-family: "Baloo 2", serif;
 font-style: normal;
 font-size:1.5rem;
 color: orange
 `
export const ButtonSendSong = styled.button`
 height: 2.9rem;
 width: 24rem;
 display: flex;
 align-items: center;
 padding-left:0.7rem;
 margin-top:1rem;
 border-radius:10px;
  font-family: "Baloo 2", serif;
  background-color:#FFA500;
  font-size:1.1rem;

`
 