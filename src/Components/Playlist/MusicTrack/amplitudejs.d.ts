declare module 'amplitudejs' {
    const amplitude: {
        init: (config: object) => void;
        play: () => void;
        pause: () => void;
        stop: () => void;
    };
    export default Amplitude;
  }
  