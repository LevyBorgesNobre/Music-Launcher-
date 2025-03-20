import { api } from "../../../lib/axios";
import {  Music,Div, Icon, Span, MusicName} from "./styles";
import { PlusCircle } from "phosphor-react";

 export interface MusicData{
  Img:string;
  Name:string
  id: number
 }

export function MusicCard({Img, Name, id} : MusicData){
async function linkMusicWithUser(){
try{
    await api.put('/music',{
        musicId: id
       })
}catch(e){
    console.log(e)
}
 
}
 return(
          <Div>
          <Music src={Img} alt="Capa da Musica"/>
          <Span><MusicName className={'element-hover'}>{Name}</MusicName> <Icon className={'element-hover'} onClick={async () => {
          await linkMusicWithUser()
          }}><PlusCircle size={45} color="#FFA500" weight="fill"/></Icon></Span> 
          </Div>
 )
}