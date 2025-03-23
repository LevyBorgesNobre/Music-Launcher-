import { Container, InputFile, Label, PlusCircleButton, SpaceToAddMusic, Title } from "./styles";
import { PlusCircle, YoutubeLogo } from "phosphor-react";
import { Input } from "./styles";
import { useState } from "react";
import { MusicTrack } from "../MusicTrack";
import { useQuery } from "@tanstack/react-query";
import { PlaylistEmptyAlert } from "../EmptyPlaylist/PlaylistEmptyAlert";
import { api } from "../../../lib/axios";

export function AddMusic(){
       const { data: Musics = [] } = useQuery<Music[]>({
              queryKey: ['userMusics'],
              queryFn: async () => {
                const response = await api.get(`/users`)
                return response.data.Music
              },
            }
          )
      const [returnToPlaylist, setReturnToPlaylist] = useState(false)

    return(
         <>
         {returnToPlaylist === false ? 
           <Container>
           <PlusCircleButton onClick={()=>{setReturnToPlaylist(true)}}><PlusCircle size={40} color="#000000" weight="fill"/></PlusCircleButton>
           <SpaceToAddMusic>
                 <Title>
                  Adicione através do Youtube
                  <YoutubeLogo size={40} color="#000000" weight="fill"/>
                 </Title>
  
                  <Input 
                  type="text"
                  placeholder="Link aqui"
                  />
                 
                  <Label>
                 <p>Upload de seus arquivos de áudio</p> 
                  <InputFile 
                  type="file"
                  placeholder="Upload de seus arquivos de áudio"
                  />
                  </Label>
           </SpaceToAddMusic>
         </Container>
         : Musics.length === 0 ? <PlaylistEmptyAlert/> : <MusicTrack/>}
         </>
    )
}