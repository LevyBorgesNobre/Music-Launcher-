import {EmptyPlaylistContainer, EmptyPlaylistMessage} from './styles'
import { IconButtons } from './styles'
import { PlusCircle } from 'phosphor-react' 
import { useState } from 'react'
import { AddMusic } from '../../AddMusic'

export function PlaylistEmptyAlert(){

    const [isChecked , setIsChecked] = useState(false)

    return(
        <div>
        { isChecked === false ? <EmptyPlaylistContainer>
        <IconButtons onClick={()=>{setIsChecked(true)}}><PlusCircle size={40} color="#000000" weight="fill"/></IconButtons>
        <EmptyPlaylistMessage>
        Sua Playlist Está Vazia, Que Tal Adicionar Algumas Músicas!
       </EmptyPlaylistMessage>
        </EmptyPlaylistContainer> 
         : <AddMusic/>}
        </div>
       
    )
}
