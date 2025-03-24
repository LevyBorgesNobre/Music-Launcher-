import { AddMusicButton, Container, InputContainer, InputFile, Label, PlusCircleButton, SpaceToAddMusic, Title } from "./styles";
import { PlusCircle, YoutubeLogo } from "phosphor-react";
import { Input } from "./styles";
import { useState } from "react";
import { MusicTrack } from "../MusicTrack";
import { useQuery } from "@tanstack/react-query";
import { PlaylistEmptyAlert } from "../EmptyPlaylist/PlaylistEmptyAlert";
import { api } from "../../../lib/axios";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "../../Authenticate/styles";

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
      
      const addMusicFormConfig = zod.object({
        musicUrl : zod.string()
        .nonempty({message: 'Campo obrigatório'})
        .url({message: 'Link inválido'})
      })

       type addMusicFormConfigType = zod.infer<typeof addMusicFormConfig>
       const {register, handleSubmit, reset, setError, formState: {errors}} = useForm<addMusicFormConfigType>({
          resolver: zodResolver(addMusicFormConfig)
       })
       
        async function handleAddMusic(data: addMusicFormConfigType){
          try {
           await api.post('/musics',{
              url:data.musicUrl
            })
            reset({
              musicUrl: ''
            })
            setReturnToPlaylist(true)
          } catch (error: any) {
            if(error.response.status === 404){
              setError(
                'musicUrl',
                 {message: 'Ocorreu um erro, tente nnovamente mais tarde'})
            }
          }
        }
       
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
                  <InputContainer>
                  <Input 
                  type="text"
                  placeholder="Link aqui"
                  {...register('musicUrl')}
                  />
                  {errors.musicUrl && <ErrorMessage>{errors.musicUrl.message}</ErrorMessage> }
                  </InputContainer>

                    <AddMusicButton onClick={handleSubmit(handleAddMusic)}>
                    <p>Adicionar Musica</p>
                    </AddMusicButton>
           </SpaceToAddMusic>
         </Container>
         : Musics.length === 0 ? <PlaylistEmptyAlert/> : <MusicTrack/>}
         </>
    )
}