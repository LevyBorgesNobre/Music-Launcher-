import { MusicLibrary } from "./MusicLibrary";

export function Home(){
  const jwt = localStorage.getItem('jwt')
  if(jwt){
    console.log('Está Logado')
  }
  return(
    <>
    <MusicLibrary/>
    </>
  )
}