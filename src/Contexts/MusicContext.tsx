import { createContext, useState } from "react";

export interface MusicContextType{
    setStartSong: (value: boolean) => void;
    loop: boolean;
    startSong: boolean;
    setLoop: (value: boolean) => void;
    startFirstSong: boolean;
    setStartFirstSong: (value: boolean) => void;
  
}

export const MusicContext = createContext<MusicContextType>({
  setStartSong: () => {},
  loop: false,
  startSong: true,
  setLoop: () => {},
  startFirstSong: false,
  setStartFirstSong:() => {},
});

export function MusicProvider({ children }: { children: React.ReactNode }) {
 const [startFirstSong, setStartFirstSong] = useState(false);
 const [startSong, setStartSong] = useState(true); 
 const [loop, setLoop] = useState(false)
  return (
    <MusicContext.Provider value={{
      startFirstSong,
      setStartFirstSong,
      startSong,
      setStartSong,
      loop, 
      setLoop
    }}>
      {children}
    </MusicContext.Provider>
  );
}
