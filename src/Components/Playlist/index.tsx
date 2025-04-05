import { MusicTrack } from "./MusicTrack"
import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/axios";
import { EmptyPlaylist } from "./EmptyPlaylist";
import { Music } from "../Home/MusicLibrary";

export function PlayList(){

    const { data: Musics = [] } = useQuery<Music[]>({
        queryKey: ['userMusics'],
        queryFn: async () => {
          const response = await api.get(`/users`)
          return response.data.Music
        },
      }
    )

    return(
        <>
    {Musics.length === 0 ? <EmptyPlaylist/> : <MusicTrack/>}
        </>
    )
}