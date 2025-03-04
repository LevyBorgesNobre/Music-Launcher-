import { Container, Music,Div, Icon, Span, MusicName} from "./styles";
import { PlusCircle } from "phosphor-react";

 interface MusicData{
  Img:string;
  Name:string
 }

export function MusicLibrary({Img, Name} : MusicData){
 return(
    <Container>
      <Div>
      <Music src={Img} alt="Capa da Musica"/>
     <Span><MusicName>{Name}</MusicName> <Icon><PlusCircle size={45} color="#FFA500" weight="fill"/></Icon></Span> 
      </Div>
    </Container>
 )
}