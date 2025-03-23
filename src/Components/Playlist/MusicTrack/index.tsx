import { useQuery } from "@tanstack/react-query";
import { api } from "../../../lib/axios";
import { TuneRepository } from "../@TuneRepository";
import { IconsContainer, PlaylistContainer, TuneContainer } from "./styles";
import { Icons, IconButtons } from "./styles";
import { PlusCircle, PlayCircle, ShuffleAngular } from "phosphor-react";
import { Music } from "../../Home/MusicLibrary";
import { useState } from "react";
import { AddMusic } from "../AddMusic";

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
        <TuneContainer>
        {Musics.map((music) => {
            return(
                <TuneRepository
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