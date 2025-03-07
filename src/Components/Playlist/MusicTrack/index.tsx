import { TuneRepository } from "../@TuneRepository";
import { PlaylistContainer } from "./styles";
import { Icons, IconButtons } from "./styles";
import { PlusCircle, PlayCircle, ShuffleAngular } from "phosphor-react";


export function MusicTrack(){
    return(
        <>
        <PlaylistContainer>
        <Icons>
            <IconButtons><PlusCircle size={40} color="#000000" weight="fill"/></IconButtons>
            <IconButtons><PlayCircle size={40} color="#000000" weight="fill"/></IconButtons>
            <IconButtons><ShuffleAngular size={40} color="#000000" weight="fill"/></IconButtons>
        </Icons>

        <TuneRepository
        name="Rockstar"
        Img=""
        />
         <TuneRepository
        name="Animal I Have Become"
        Img=""
        />
         <TuneRepository
        name="Animal I Have Become"
        Img=""
        />
         <TuneRepository
        name="Animal I Have Become"
        Img=""
        />
         <TuneRepository
        name="Animal I Have Become"
        Img=""
        />
         <TuneRepository
        name="Animal I Have Become"
        Img=""
        />
        
        </PlaylistContainer>
        </>
    )
}