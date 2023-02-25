import { Content } from "antd/es/layout/layout";
import { useState } from "react";
import { PuzzleVOD } from "../../components";

function PuzzleAbout() {
  const [play, setPlay] = useState(false);

  return (
    <Content className="puzzle-about">
      <div className="puzzle-hero">
        <div className="puzzle-hero-video">
          {/* <img src={VOD} alt="video" /> */}
          <PuzzleVOD playing={play} setPlaying={setPlay} />
        </div>
        <div className="puzzle-hero-content">
          <button onClick={() => setPlay(!play)}>
            {!play ? "Play" : "Pause"}
          </button>
        </div>
      </div>
    </Content>
  );
}

export default PuzzleAbout;
