import { api } from "../../../lib/axios";
import {
  IconButtons,
  MainMusicTrack,
  MusicData,
  MusicTrackImage,
  MusicTrackName,
  ConfigButtons,
} from "./styles";

import { Trash, Play, Pause, Repeat,  RepeatOnce } from "phosphor-react";
import { useQueryClient } from "@tanstack/react-query";
import { ProgressBar } from "./ProgressBar";
import  { useContext,  useState } from "react";
import { MusicContext } from "../../../Contexts/MusicContext";

interface TuneRepositoryData {
  name: string;
  Img: string;
  id: number;
  playSongAtIndex: (index: number) => void;
  handleStartMusicWithIndex: (index: number) => void;
  handleRepeatMusic: () => void;
  playMusicAtIndex: () => void;
  pauseMusicAtIndex: () => void;
  playMusic: () => void;
  pauseMusic: () => void;
  activeIndex: number | null;
  index: number;
  startFirstSong: boolean,
}

export function TuneRepository({
  name,
  Img,
  id,
  playSongAtIndex,
  handleRepeatMusic,
  pauseMusic,
  playMusic,
  pauseMusicAtIndex,
  playMusicAtIndex,
  activeIndex,
  index,
  startFirstSong,
  handleStartMusicWithIndex,
}: TuneRepositoryData) {
  const queryClient = useQueryClient();
  const isActive = activeIndex === index;
  const {startSong, setStartSong, setLoop, loop } = useContext(MusicContext)
  const [loopControl, setLoopControl] = useState(false)
  
  async function deleteMusicFromUser() {
    try {
      await api.delete("/music", {
        data: { id },
      });
      pauseMusic()
      console.log(index)
      queryClient.invalidateQueries({ queryKey: ["userMusics"] });
    } catch (error) {
      console.log(error);
    } 
  }

  return (
    <MainMusicTrack>
      <MusicData>
        <MusicTrackImage src={Img} alt="Imagem da capa da musica" />
        <MusicTrackName>{name}</MusicTrackName>
      </MusicData>
      <ProgressBar 
      index={index} 
      />
      <ConfigButtons>
        {index === 0?
     ( startFirstSong ? 
       <IconButtons
        onClick={() => {
          console.log("Pause song whith index zero ")
        pauseMusicAtIndex();       
      }}
     >
      <Pause 
      size={25} color="#4d4d4d" weight="fill" 
      style={{
        transition: 'transform 0.1s ease, color 0.1s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      />
      </IconButtons>
     :
    <IconButtons
    onClick={() => { 
      console.log("Start song whith index zero")
      if (isActive) {
        playMusicAtIndex();
      } 
      else {
      playSongAtIndex(0);
      }
    }}
   >
    <Play 
    size={25} color="#4d4d4d" weight="fill"
    style={{
      transition: 'transform 0.1s ease, color 0.1s ease',
    }}
    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    />
  </IconButtons>
)
  :
  (startSong && isActive?
   <IconButtons
   onClick={() => {
   pauseMusic(); 
   setStartSong(false)
  }}
  >
  <Pause 
  size={25} color="#4d4d4d" weight="fill" 
   style={{
    transition: 'transform 0.1s ease, color 0.1s ease',
  }}
  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
  />
 </IconButtons>
  :
     <IconButtons
     onClick={() => {
      if (isActive) {
      playMusic();
      } else {
       handleStartMusicWithIndex(index); //Trecho que estava sendo reponsavel pela alateracao do simbolo da musica com index 0
      }
      setStartSong(true)
     }}
     >
     <Play size={25} color="#4d4d4d" weight="fill"
      style={{
        transition: 'transform 0.1s ease, color 0.1s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
     />
        </IconButtons>
    )
     }

     {
       loopControl === false   ?
       <IconButtons onClick={()=> {
        handleRepeatMusic();
        setLoopControl(true)
        console.log("loopControl ativo")
       }}>
       <Repeat size={28}
        color="#4d4d4d" weight="fill"
        style={{
          transition: 'transform 0.1s ease, color 0.1s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        />
     </IconButtons>
     :
     <IconButtons onClick={()=> {
      setLoop(false)
      setLoopControl(false)
      console.log("loopControl desativado", loop)
     }}>
     <RepeatOnce 
     size={28} color="#4d4d4d" weight="fill"
      style={{
        transition: 'transform 0.1s ease, color 0.1s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
     />
   </IconButtons>
     }
        
      <IconButtons onClick={async () => await deleteMusicFromUser()}>
       <Trash
       size={25}
       weight="fill"
       style={{
       transition: 'transform 0.1s ease, color 0.1s ease',
       color: '#4d4d4d', 
       cursor: 'pointer',
     }}
      onMouseEnter={e => {
      e.currentTarget.style.transform = 'scale(1.3)';
      e.currentTarget.style.color = '#8b0000';
     }}
     onMouseLeave={e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.color = '#4d4d4d';
     }}
     />
      </IconButtons>
      </ConfigButtons>
    </MainMusicTrack>
  );
}
