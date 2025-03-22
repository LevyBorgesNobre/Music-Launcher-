import { useQueryClient } from "@tanstack/react-query";
import { api } from "../../../lib/axios";
import { IconButtons, MainMusicTrack, MusicData, MusicTrackImage, MusicTrackName, ConfigButtons } from "./styles";
import {  ShuffleAngular, Trash, Play } from "phosphor-react";

interface TuneRepositoryData{
 name: string;
 Img: string;
 id: number
}

export function TuneRepository({name, Img, id} : TuneRepositoryData){
    const queryClient = useQueryClient();
    async function deleteMusicFromUser(){
        try {
            await api.delete('/music', {
                data: { id },
            })
            queryClient.invalidateQueries({ queryKey: ['userMusics'] });
            console.log('foi')
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <>
         <MainMusicTrack>
            <MusicData>
                <MusicTrackImage src={Img} alt="Imagem da capa da musica"/>
                <MusicTrackName>{name}</MusicTrackName>
            </MusicData>
            <ConfigButtons>
                <IconButtons onClick={async() => {
                    await deleteMusicFromUser()
                }}><Trash size={25} color="#000000" weight="fill"/></IconButtons>
                <IconButtons><ShuffleAngular size={25} color="#000000" weight="fill"/></IconButtons>
                <IconButtons><Play size={25} color="#000000" weight="fill"/></IconButtons>
            </ConfigButtons>
         </MainMusicTrack>
        </>
    )
}