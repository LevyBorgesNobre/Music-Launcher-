import { createContext, useState } from "react";

export interface MusicContextType{
    setStartSong: (value: boolean) => void;
    loop: boolean;
    startSong: boolean;
    setLoop: (value: boolean) => void;
  
}

export const MusicContext = createContext<MusicContextType>({
  setStartSong: () => {},
  loop: false,
  startSong: true,
  setLoop: () => {},
});

export function MusicProvider({ children }: { children: React.ReactNode }) {

  const [startSong, setStartSong] = useState(true); // controla SE está tocando
const [loop, setLoop] = useState(false)
  return (
    <MusicContext.Provider value={{
      startSong,
      setStartSong,
      loop, 
      setLoop
    }}>
      {children}
    </MusicContext.Provider>
  );
}
