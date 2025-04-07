import { useEffect, useRef, useState } from "react";
import Amplitude from "amplitudejs";
import { ProgressContainer, Progress, Time } from "./MusicProgress";
interface ProgressBarProps {
  index: number;
}

export function ProgressBar({ index }: ProgressBarProps) {
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function updateProgress() {
      const activeIndex = Amplitude.getActiveIndex();
      if (activeIndex !== index) return;

      const songPlayedSeconds = Amplitude.getSongPlayedSeconds();
      const songDuration = Amplitude.getSongDuration();

      setCurrentTime(songPlayedSeconds || 0);
      setDuration(songDuration || 0);
      setProgress((songPlayedSeconds / songDuration) * 100 || 0);
    }

    intervalRef.current = setInterval(updateProgress, 500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [index]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const activeIndex = Amplitude.getActiveIndex();
  
    if (activeIndex === index && !isNaN(value)) {
      Amplitude.setSongPlayedPercentage(value);
    }
  };
  
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <ProgressContainer>
      <Time>{formatTime(currentTime)}</Time>
      <Progress
        type="range"
        min={0}
        max={100}
        value={progress}
        onChange={handleSeek}
        style={{
            background: `linear-gradient(to right, gray ${progress}%, black ${progress}%)`,
          }}
      />
      <Time>{formatTime(duration)}</Time>
    </ProgressContainer>
  );
}
