import { useQuery } from "@tanstack/react-query";
import { api } from "../../../lib/axios";
import { TuneRepository } from "../@TuneRepository";
import {
  IconsContainer,
  PlaylistContainer,
  TuneContainer,
  Icons,
  IconButtons,
} from "./styles";
import {
  PlusCircle,
  PlayCircle,
  ShuffleAngular,
  PauseCircle,
} from "phosphor-react";
import { Music } from "../../Home/MusicLibrary";
import { useState, useEffect, useRef } from "react";
import { AddMusic } from "../AddMusic";
import Sortable from "sortablejs";
import Amplitude from "amplitudejs";
import { SoundControll } from "./SoundControl";
import { MusicContext } from "../../../Contexts/MusicContext";
import { useContext } from "react";

export function MusicTrack() {
  const { data: Musics = [] } = useQuery<Music[]>({
    queryKey: ["userMusics"],
    queryFn: async () => {
      const response = await api.get(`/users`);
      return response.data.Music;
    },
  });

  const { setStartSong, loop, setLoop, startFirstSong, setStartFirstSong } = useContext(MusicContext);
  const ReverseMusic = Musics.slice(0).reverse();
  const [isChecked, setIsChecked] = useState(false);
  const [activeMusicIndex, setActiveMusicIndex] = useState<number | null>(null);
  const startLoop = useRef(false)
  const startLoopRef = useRef(loop)
  const hasInitialized = useRef(false);
  const listRef = useRef(null);
  const indexZero = Amplitude.getActiveIndex()

 function changedMusicSymbol(){
  if(indexZero === indexZero || indexZero !== 0){
    setStartSong(false)
    setStartFirstSong(false)
    console.log("teste de index")
  }
  }

   useEffect(()=>{
   startLoopRef.current = loop
   },[loop])

   function handleLoopMusic(){
      const currentTime = Amplitude.getSongPlayedSeconds();
      const duration = Amplitude.getSongDuration();
  
      const remaining = duration - currentTime;
      const time = remaining < 2 && remaining > 1.5 
  
      if (time && startLoopRef.current && !startLoop.current) {
        console.log('A música está quase no fim!');
        Amplitude.playSongAtIndex(Amplitude.getActiveIndex())
      }
   }

   function handleCapturePlayMusic(){
    console.log("Capture initial event ")
   }

  useEffect(() => {
    if (Musics.length) {
      const AmplitudePlaylist = ReverseMusic.map((music) => ({
        id: music.id,
        title: music.title,
        thumbnailUrl: music.thumbnailUrl,
        url: music.cloudinaryUrl,
      }));

      Amplitude.init({ 
        songs: AmplitudePlaylist ,
        continue_next: true,
        callbacks: {
          ended: () =>{
            changedMusicSymbol();
          },
          song_change: () =>{
           changedMusicSymbol()
          },
          play: () => {
            handleCapturePlayMusic()
          },
          timeupdate: () => {
              handleLoopMusic()
          }
        },
       
      });
      hasInitialized.current = true;
    }
  }, [Musics]);
   
  const handlePlaySongAtIndexZero = (index: number) => {
    Amplitude.playSongAtIndex(index);
    setActiveMusicIndex(index);
    setStartFirstSong(true);
  };
  
  const handleStartMusicWithIndex = (index: number) =>{
    Amplitude.playSongAtIndex(index);
    setActiveMusicIndex(index);
  }

  const playMusicAtIndexZero = () => {
        Amplitude.play();
      setStartFirstSong(true);
  };

  const pauseMusicAtIndexZero = () => {
      Amplitude.pause();
      setStartFirstSong(false)
  };
  
  const playMusic = () => {
   Amplitude.play() 
  }
   
  const pauseMusic = () => {
    Amplitude.pause()
  }

  const handleRepeat = () => {
    setLoop(true);
  };

  const handleRandomizeMusic = () => {
    const randomIndex = Math.floor(Math.random() * Musics.length);
    handlePlaySongAtIndexZero(randomIndex);
  };

  useEffect(() => {
    if (listRef.current) {
      new Sortable(listRef.current, {
        animation: 150,
        ghostClass: "ghost",
      });
    }
  }, []);


  return isChecked ? (
    <AddMusic />
   ) : (
    <PlaylistContainer >
          <IconsContainer>
            <SoundControll/>
        <Icons>
        { 
     (startFirstSong ? 
     <IconButtons
      onClick={() => {
          pauseMusic();
          console.log("Pause song")
          setStartFirstSong(false)
      }}
      >
      <PauseCircle 
      size={40} color="#0d0d0d" weight="fill" 
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
        const activeIndex = Amplitude.getActiveIndex();
        console.log("header button : Start song whith index zero")
        if (activeIndex ===  0) {
          playMusic();
        } else {
          Amplitude.playSongAtIndex(0);
        }
        console.log(Amplitude.getActiveIndex())
        setStartFirstSong(true);
      }}
      >
      <PlayCircle 
      size={40} color="#0d0d0d" weight="fill" 
      style={{
        transition: 'transform 0.1s ease, color 0.1s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      />
     </IconButtons>)
      }
          
          <IconButtons onClick={() => setIsChecked(true)}>
            <PlusCircle 
            size={40} color="#0d0d0d" weight="fill" 
            style={{
              transition: 'transform 0.1s ease, color 0.1s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            />
          </IconButtons>
           
          <IconButtons onClick={handleRandomizeMusic}>
            <ShuffleAngular 
            size={40} color="#0d0d0d" weight="fill" 
            style={{
              transition: 'transform 0.1s ease, color 0.1s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            />
          </IconButtons>
        </Icons>
      </IconsContainer>

      <TuneContainer ref={listRef}>
        {ReverseMusic.map((music: Music, index: number) => (
          <TuneRepository
            key={music.id}
            id={music.id}
            index={index}
            name={music.title}
            Img={music.thumbnailUrl}
            playSongAtIndex={() => handlePlaySongAtIndexZero(index)}
            handleStartMusicWithIndex={() => handleStartMusicWithIndex(index)}
            playMusicAtIndex={playMusicAtIndexZero}
            pauseMusicAtIndex={pauseMusicAtIndexZero}
            playMusic={playMusic}
            pauseMusic={pauseMusic}
            handleRepeatMusic={() => handleRepeat()}
            activeIndex={activeMusicIndex}
          />
        ))}
      </TuneContainer>
    </PlaylistContainer>
  );
}
