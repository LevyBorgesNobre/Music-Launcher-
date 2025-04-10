import { useEffect, useState } from 'react';
import { SpeakerHigh } from 'phosphor-react';
import { Div } from './Volume';
import { VolumeSound } from './Volume';
import Amplitude from 'amplitudejs';

export function SoundControll() {
  const [volume, setVolume] = useState(100); 

  useEffect(() => {
    Amplitude.setVolume(volume);
  }, [volume]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
  };
  
  return (
    <Div>
      <label>
        <SpeakerHigh size={30} color="#000000" weight="fill" />
      </label>
      <VolumeSound
        value={volume}
        onChange={handleChange}
      />
    </Div>
  );
}
