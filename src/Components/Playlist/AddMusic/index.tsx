import {  Container, InputContainer, InputFile, LoadingMessage, PlusCircleButton, SendSongButton, SpaceToAddMusic, Title } from "./styles";
import {  ArrowUUpLeft, MusicNotes, ArrowFatLineRight} from "phosphor-react";
import { useContext, useState } from "react";
import { MusicTrack } from "../MusicTrack";
import { useQuery } from "@tanstack/react-query";
import { PlaylistEmptyAlert } from "../EmptyPlaylist/PlaylistEmptyAlert";
import { api } from "../../../lib/axios";
import { Music } from "../../Home/MusicLibrary";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "../../Authenticate/styles";
import { useQueryClient } from '@tanstack/react-query';
import Amplitude from "amplitudejs";
import { MusicContext } from "../../../Contexts/MusicContext";
export function AddMusic(){
       const queryClient = useQueryClient();
       const { data: Musics = [] } = useQuery<Music[]>({
              queryKey: ['userMusics'],
              queryFn: async () => {
                const response = await api.get(`/users`)
                return response.data.Music
              },
            }
          )

      const [returnToPlaylist, setReturnToPlaylist] = useState(false)
      const [isLoading, setIsLoading] = useState(false)
      const { setStartFirstSong} = useContext(MusicContext)

      const addMusicFormConfig = zod.object({
       musicFile: zod.string().url({message: 'Envie uma URL compativel'})
      })

       type addMusicFormConfigType = zod.infer<typeof addMusicFormConfig>
       const {register, handleSubmit, watch,formState: {errors}, setError} = useForm<addMusicFormConfigType>({
          resolver: zodResolver(addMusicFormConfig),
       })
       
        const inputData = watch('musicFile')

        async function handleAddMusic(data: addMusicFormConfigType){
          console.log(Musics)
          setIsLoading(true)
          try {
             await api.post('/music',{
              url:data.musicFile
            })
           
            queryClient.removeQueries({ queryKey: ['userMusics'] });
            setReturnToPlaylist(true)
          } catch (error: unknown) {
            if (error instanceof Error && (error as import('axios').AxiosError)?.response?.status === 404) {
           setError('musicFile', { message: 'Ocorreu um erro , tente novamente mais tarde' })
            }else{
             setError('musicFile', { message: 'Ocorreu um erro , tente novamente mais tarde' })
            }
          }
          setIsLoading(false)
        }
       
       if(returnToPlaylist === false){
        Amplitude.pause()
        setStartFirstSong(false)
       }
       
    return(
         <>
         {returnToPlaylist === false ? 
           <Container>
           <PlusCircleButton onClick={()=>{setReturnToPlaylist(true)}}><ArrowUUpLeft size={40} color="#000000" weight="fill"/></PlusCircleButton>
           <SpaceToAddMusic>
                 <Title>
                  Adicione através de um aqruivo mp3
                  <MusicNotes size={40} color="#000000" />
                 </Title>
                  <InputContainer>
                  <form onSubmit={handleSubmit(handleAddMusic)}>
                  <InputFile 
                  type="text"
                  {...register('musicFile', {required: true})}
                  />
                  <SendSongButton type="submit" disabled={!inputData}><ArrowFatLineRight size={20} /></SendSongButton>
                  </form>
                  {errors.musicFile && <ErrorMessage>{errors.musicFile.message}</ErrorMessage> }
                  {isLoading && <LoadingMessage>Carregando...</LoadingMessage> }
                  </InputContainer>
           </SpaceToAddMusic>
         </Container>
         : Musics.length === 0 ? <PlaylistEmptyAlert/> : <MusicTrack/>}
         </>
    )
}