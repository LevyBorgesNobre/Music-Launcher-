import { api } from "../../../lib/axios";
import {
  IconButtons,
  MainMusicTrack,
  MusicData,
  MusicTrackImage,
  MusicTrackName,
  ConfigButtons,
} from "./styles";
import { Trash, Play, Pause, Repeat } from "phosphor-react";
import { useQueryClient } from "@tanstack/react-query";
import { ProgressBar } from "./ProgressBar";

interface TuneRepositoryData {
  name: string;
  Img: string;
  id: number;
  playSongAtIndex: (index: number) => void;
  handleRepeatMusic: () => void;
  playMusic: () => void;
  pauseMusic: () => void;
  stopMusic: () => void;
  activeIndex: number | null;
  index: number;
  isPlaying: boolean;
}

export function TuneRepository({
  name,
  Img,
  id,
  playSongAtIndex,
  handleRepeatMusic,
  pauseMusic,
  playMusic,
  activeIndex,
  index,
  isPlaying,
}: TuneRepositoryData) {
  const queryClient = useQueryClient();
  const isActive = activeIndex === index;

  async function deleteMusicFromUser() {
    try {
      await api.delete("/music", {
        data: { id },
      });
      queryClient.invalidateQueries({ queryKey: ["userMusics"] });
      pauseMusic();
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

      <ProgressBar index={index} />

      <ConfigButtons>
        <IconButtons
          onClick={() => {
            if (isActive) {
              void (isPlaying ? pauseMusic() : playMusic());
            } else {
              playSongAtIndex(index);
            }
          }}
        >
          {isActive && isPlaying ? (
            <Pause size={25} color="#000000" weight="fill" />
          ) : (
            <Play size={25} color="#000000" weight="fill" />
          )}
        </IconButtons>

        <IconButtons onClick={handleRepeatMusic}>
          <Repeat size={28} color="#000000" weight="fill" />
        </IconButtons>

        <IconButtons onClick={async () => await deleteMusicFromUser()}>
          <Trash size={25} color="#000000" weight="fill" />
        </IconButtons>
      </ConfigButtons>
    </MainMusicTrack>
  );
}
