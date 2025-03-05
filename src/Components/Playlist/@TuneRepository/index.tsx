import { IconButtons, MainMusicTrack, MusicData, MusicTrackImage, MusicTrackName, ConfigButtons } from "./styles";
import {  ShuffleAngular, Trash, Play } from "phosphor-react";

interface TuneRepositoryData{
 name: string;
 Img: string;
}

export function TuneRepository({name, Img} : TuneRepositoryData){
    return(
        <>
         <MainMusicTrack>
            <MusicData>
                <MusicTrackImage src={Img} alt="Imagem da capa da musica"/>
                <MusicTrackName>{name}</MusicTrackName>
            </MusicData>

            <ConfigButtons>
                <IconButtons><Trash size={25} color="#000000" weight="fill"/></IconButtons>
                <IconButtons><ShuffleAngular size={25} color="#000000" weight="fill"/></IconButtons>
                <IconButtons><Play size={25} color="#000000" weight="fill"/></IconButtons>
            </ConfigButtons>
         </MainMusicTrack>
        </>
    )
}