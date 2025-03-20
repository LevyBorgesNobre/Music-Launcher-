import { api } from "../../../lib/axios";
import { MusicCard } from "../MusicCard";
import { Container } from "./styles";
import { useQuery } from '@tanstack/react-query'
export interface Music{
		title: string,
		thumbnailUrl: string
		cloudinaryUrl: string
        id:number
}
export function MusicLibrary(){
    const { data: Musics = [] } = useQuery<Music[]>({
        queryKey: ['musics'],
        queryFn: async () => {
          const response = await api.get(`/music`)
          return response.data
        },
      }
    )
    const firstSixTeenMusics = Musics.slice(0 , 15)
    return(
        <Container>
            {
                firstSixTeenMusics.map(music => {
                    return(
                        <MusicCard Img={music.thumbnailUrl} Name={music.title} id={music.id}/>
                    )
                })
            }
        </Container>
    )
}