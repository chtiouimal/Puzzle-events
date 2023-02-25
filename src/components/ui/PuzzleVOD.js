import { useEffect, useRef } from "react";
import VOD from "../../assets/imgs/vod.mp4";

function PuzzleVOD({ playing, setPlaying }) {
  const vod = useRef();

  const playVod = () => {
    if (!playing) {
      vod.current.pause();
      setPlaying(false);
    } else {
      vod.current.play();
    }
  };

  useEffect(() => {
    playVod();
  }, [playing]);

  return (
    <video
      ref={vod}
      controls={false}
      width="100%"
      preload="metadata"
      onEnded={() => setPlaying(false)}
    >
      <source src={VOD} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
}

export default PuzzleVOD;
