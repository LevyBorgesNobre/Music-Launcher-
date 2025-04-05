import { useQuery } from "@tanstack/react-query";
import { api } from "../../../lib/axios";
import { TuneRepository } from "../@TuneRepository";
import { IconsContainer, PlaylistContainer, TuneContainer } from "./styles";
import { Icons, IconButtons } from "./styles";
import { PlusCircle, PlayCircle, ShuffleAngular } from "phosphor-react";
import { Music } from "../../Home/MusicLibrary";
import { useState } from "react";
import { AddMusic } from "../AddMusic";
import Sortable from "sortablejs";
import { useRef, useEffect } from "react";    
import Amplitude from "amplitudejs";

export function MusicTrack(){
    const { data: Musics = [] } = useQuery<Music[]>({
        queryKey: ['userMusics'],
        queryFn: async () => {
          const response = await api.get(`/users`)
          return response.data.Music
        },
      }
    )
    const [isChecked, setIsChecked] = useState(false)

    const ReverseMusic = Musics.slice(0).reverse()
    const AmplitudePlaylist = ReverseMusic.map(music => ({
      id: music.id,
      title: music.title,
      thumbnailUrl: music.thumbnailUrl,
      url: music.cloudinaryUrl,
    }))
    console.log(AmplitudePlaylist[0].url)
    useEffect(() => {
      if (!Amplitude.getSongs().length) {
        Amplitude.init({
          songs: AmplitudePlaylist,
        });
      }
    }, [AmplitudePlaylist]);

    const handleRepeat = (index: number) => {
      Amplitude.playSongAtIndex(index)
      Amplitude.setRepeat(true)
    };
    
    const playMusic = () =>{
      Amplitude.play()
    }

    const pauseMusic = ()=>{
      Amplitude.pause()
    }

    const activeIndex = () => {
       return Amplitude.getActiveIndex();
    }
    
    const stopMusic = () =>{
      Amplitude.stop()
    }

    const listRef = useRef(null);

        useEffect(() => {
          if (listRef.current) {
            new Sortable(listRef.current, {
              animation: 150,
              ghostClass: "ghost",
            });
          }
        }, []);

        const MusicIndex= Array.from({ length: Amplitude.getSongs().length }, (_, i) => i);
        
    return(
        <>
        { isChecked === false? 
        <PlaylistContainer>
        <IconsContainer>
        <Icons>
            <IconButtons onClick={()=>{setIsChecked(true)}}><PlusCircle size={40} color="#000000" weight="fill"/></IconButtons>
            <IconButtons><PlayCircle size={40} color="#000000" weight="fill"/></IconButtons>
            <IconButtons><ShuffleAngular size={40} color="#000000" weight="fill"/></IconButtons>
        </Icons>
        </IconsContainer>
        <TuneContainer ref={listRef}>
        {Amplitude.getSongs().map((music: Music, index: number) => {
            return(
                <TuneRepository
                playSongAtIndex={() => {
                  Amplitude.playSongAtIndex(index)
                }} 
                index={MusicIndex.indexOf(index)}
                handleRepeatMusic={() => handleRepeat(index)}
                playMusic={()=> playMusic()}
                pauseMusic={() => pauseMusic()}
                activeIndex={() => activeIndex()}
                stopMusic={() => stopMusic()}
                id={music.id}
                key={music.id}
                name={music.title}
                Img={music.thumbnailUrl}
                />
            )
        })}
        </TuneContainer>
        </PlaylistContainer>
        : <AddMusic
        />}
        </>
    )
}