import { useQueryClient } from "@tanstack/react-query";
import { api } from "../../../lib/axios";
import { IconButtons, MainMusicTrack, MusicData, MusicTrackImage, MusicTrackName, ConfigButtons } from "./styles";
import {  ShuffleAngular, Trash, Play, Pause } from "phosphor-react";
import { useState } from "react";


interface TuneRepositoryData{
 name: string;
 Img: string;
 id: number
 playSongAtIndex: (index: number) => void
 handleRepeatMusic: () => void
 playMusic: () => void
 pauseMusic:() => void
activeIndex: () => number
 stopMusic: () => void
 index: number
}
  
  
export function TuneRepository({name, Img, id, playSongAtIndex, handleRepeatMusic, pauseMusic, playMusic, activeIndex, index} : TuneRepositoryData){
    const [isActive, setIsActive] = useState(false)
    console.log(index)
    const queryClient = useQueryClient();
    async function deleteMusicFromUser(){
        try {
            await api.delete('/music', {
                data: { id },
            })
            queryClient.invalidateQueries({ queryKey: ['userMusics'] });
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
            <IconButtons
            onClick={() => {
             const currentIndex = activeIndex();
              console.log(index)
            if (isActive) {
               pauseMusic();
               setIsActive(false);
               } else {
                 if (currentIndex === index) {
                 playMusic(); 
               } else {
                 playSongAtIndex(index); 
                }
                 setIsActive(true);}
             }}>
           {isActive ? (
           <Pause size={25} color="#000000" weight="fill" />
           ) : (
           <Play size={25} color="#000000" weight="fill" />
           )}
            </IconButtons>
                <IconButtons onClick={handleRepeatMusic}><ShuffleAngular size={25} color="#000000" weight="fill"/></IconButtons>
                <IconButtons onClick={async() => {
                    await deleteMusicFromUser()
                }}><Trash size={25} color="#000000" weight="fill"/></IconButtons>
            </ConfigButtons>
         </MainMusicTrack>
        </>
    )
}

