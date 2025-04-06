import { useQuery } from "@tanstack/react-query";
import { api } from "../../../lib/axios";
import { TuneRepository } from "../@TuneRepository";
import { IconsContainer, PlaylistContainer, TuneContainer } from "./styles";
import { Icons, IconButtons } from "./styles";
import { PlusCircle, PlayCircle, ShuffleAngular, PauseCircle} from "phosphor-react";
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
    const [isPaused, setIsPaused] = useState(true)
    
    const hasInitialized = useRef(false);

    useEffect(() => {
      if (!hasInitialized.current) {
        const AmplitudePlaylist = Musics.slice(0).reverse().map(music => ({
          id: music.id,
          title: music.title,
          thumbnailUrl: music.thumbnailUrl,
          url: music.cloudinaryUrl,
        }));
    
        Amplitude.init({
          songs: AmplitudePlaylist,
        });
    
        hasInitialized.current = true;
      }
    }, [Musics]);

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
        const hasStarted = useRef(false);
         return(
        <>
        { isChecked === false? 
        <PlaylistContainer>
        <IconsContainer>
        <Icons>
         {isPaused ? (
         <IconButtons
            onClick={() => {
            if (!hasStarted.current) {
            Amplitude.playSongAtIndex(0); 
            hasStarted.current = true;
           } else {
          Amplitude.play(); 
          }
        setIsPaused(false);
        }}>
        <PlayCircle size={40} color="#000000" weight="fill" />
        </IconButtons>
         ) : (
         <IconButtons
          onClick={() => {
          Amplitude.pause();
          setIsPaused(true);
          }}
          >
           <PauseCircle size={40} color="#000000" weight="fill" />
           </IconButtons>
          )}
            <IconButtons onClick={()=>{setIsChecked(true)}}><PlusCircle size={40} color="#000000" weight="fill"/></IconButtons>
            <IconButtons><ShuffleAngular size={40} color="#000000" weight="fill"/></IconButtons>
        </Icons>
        </IconsContainer>
        <TuneContainer ref={listRef}>
        {ReverseMusic.map((music: Music, index: number) => {
            return(
                <TuneRepository
                playSongAtIndex={() => {
                  Amplitude.playSongAtIndex(index)
                }} 
                index={index}
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