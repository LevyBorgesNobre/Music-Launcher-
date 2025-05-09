import { useEffect, useState } from 'react';
import { SpeakerHigh } from 'phosphor-react';
import { Div } from './Volume';
import { VolumeSound } from './Volume';
import Amplitude from 'amplitudejs';
import { VolumeControllButton } from './styles';
import { SpeakerSlash } from 'phosphor-react';

export function SoundControll() {
  const [volume, setVolume] = useState(20); 
  const [isMuted, setIsMuted] = useState(true); 

  useEffect(() => {
    Amplitude.setVolume(volume);
  }, [volume]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
  };
  
  return (
    <Div>
        {isMuted ?
        <VolumeControllButton
        onClick={()=>{
          setIsMuted(!isMuted);
          Amplitude.setVolume(0);
        }}
        >
        <SpeakerHigh 
        size={30} color="#0d0d0d" weight="fill" 
        style={{
          transition: 'transform 0.1s ease, color 0.1s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        />
        </VolumeControllButton>
        : 
        <VolumeControllButton
        onClick={()=>{
          setIsMuted(true);
          Amplitude.setVolume(volume);
        }}
        >
        <SpeakerSlash 
        size={30} color="#0d0d0d" weight="fill"
        style={{
          transition: 'transform 0.1s ease, color 0.1s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
        </VolumeControllButton>
        }
        
      <VolumeSound
        value={volume && isMuted ? volume : 0}
        onChange={handleChange}
        style={{
          background: `linear-gradient(to right, gray , black)`,
        }}
      />
    </Div>
  );
}
