import { EmptyPlaylistContainer, EmptyPlaylistMessage, IconButtons } from "./styles";
import { PlusCircle } from "phosphor-react";

export function EmptyPlaylist(){
    return(
        <EmptyPlaylistContainer>
       <IconButtons><PlusCircle size={40} color="#000000" weight="fill"/></IconButtons>
       <EmptyPlaylistMessage>
        Sua Playlist Está Vazia, Que Tal Adicionar Algumas Músicas!
       </EmptyPlaylistMessage>
        </EmptyPlaylistContainer>
    )
}