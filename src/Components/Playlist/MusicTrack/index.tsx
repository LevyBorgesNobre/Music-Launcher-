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

export function MusicTrack() {
  const { data: Musics = [] } = useQuery<Music[]>({
    queryKey: ["userMusics"],
    queryFn: async () => {
      const response = await api.get(`/users`);
      return response.data.Music;
    },
  });

  const ReverseMusic = Musics.slice(0).reverse();
  const [isChecked, setIsChecked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeMusicIndex, setActiveMusicIndex] = useState<number | null>(null);
  const hasInitialized = useRef(false);
  const hasStarted = useRef(false);
  const listRef = useRef(null);
  useEffect(() => {
    if (!hasInitialized.current) {
      const AmplitudePlaylist = ReverseMusic.map((music) => ({
        id: music.id,
        title: music.title,
        thumbnailUrl: music.thumbnailUrl,
        url: music.cloudinaryUrl,
      }));

      Amplitude.init({ songs: AmplitudePlaylist });
      hasInitialized.current = true;
    }
  }, [Musics]);

  const handlePlaySongAtIndex = (index: number) => {
    Amplitude.playSongAtIndex(index);
    setActiveMusicIndex(index);
    setIsPlaying(true);
  };

  const playMusic = () => {
    Amplitude.play();
    setIsPlaying(true);
  };

  const pauseMusic = () => {
    Amplitude.pause();
    setIsPlaying(false);
  };

  const stopMusic = () => {
    Amplitude.stop();
    setIsPlaying(false);
  };

  const handleRepeat = (index: number) => {
    Amplitude.playSongAtIndex(index);
    Amplitude.setRepeat(true);
    setActiveMusicIndex(index);
    setIsPlaying(true);
  };

  const handleRandomizeMusic = () => {
    const randomIndex = Math.floor(Math.random() * Musics.length);
    handlePlaySongAtIndex(randomIndex);
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
          <IconButtons
            onClick={() => {
              if (!hasStarted.current) {
                handlePlaySongAtIndex(0);
                hasStarted.current = true;
              } else {
                void (isPlaying ? pauseMusic() : playMusic());
              }
            }}
          >
            {isPlaying ? (
              <PauseCircle size={40} color="#000000" weight="fill" />
            ) : (
              <PlayCircle size={40} color="#000000" weight="fill" />
            )}
          </IconButtons>

          <IconButtons onClick={() => setIsChecked(true)}>
            <PlusCircle size={40} color="#000000" weight="fill" />
          </IconButtons>

          <IconButtons onClick={handleRandomizeMusic}>
            <ShuffleAngular size={40} color="#000000" weight="fill" />
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
            playSongAtIndex={() => handlePlaySongAtIndex(index)}
            playMusic={playMusic}
            pauseMusic={pauseMusic}
            stopMusic={stopMusic}
            handleRepeatMusic={() => handleRepeat(index)}
            activeIndex={activeMusicIndex}
            isPlaying={isPlaying}
          />
        ))}
      </TuneContainer>
    </PlaylistContainer>
  );
}
