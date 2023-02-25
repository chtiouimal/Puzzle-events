import { useState } from "react";
import { GRID_SIZE, TILE_COUNT } from "../../constants/initial.constants";
import PuzzleTile from "./PuzzleTile";

function PuzzleBoard({ boardSize }) {
  const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);

  const pieceWidth = Math.round(boardSize / GRID_SIZE);
  const pieceHeight = Math.round(boardSize / GRID_SIZE);
  const style = {
    width: boardSize,
    height: boardSize,
  };

  const imgUrl =
    "https://firebasestorage.googleapis.com/v0/b/music-gallery-da2d1.appspot.com/o/songs%2FEddie%20-%20Still%20Healing%2FEddie%20-%20Still%20Healing.png?alt=media&token=1308d76a-8668-487f-8e49-e7fa52e06271";

  const imgUrl2 =
    "https://firebasestorage.googleapis.com/v0/b/music-gallery-da2d1.appspot.com/o/songs%2FTwisted%20Psykie%20-%20Make%20me%20feel%2FTwisted_Psykie-Make_me_feel.png?alt=media&token=2f3bbcfc-a009-4d09-889e-29eaabb870ca";

  return (
    <ul style={style} className="puzzle-board">
      {tiles.map((tile, index) => (
        <PuzzleTile
          key={tile}
          index={index}
          imgUrl={imgUrl}
          imgUrl2={imgUrl2}
          tile={tile}
          width={pieceWidth}
          height={pieceHeight}
          size={boardSize}
        />
      ))}
    </ul>
  );
}

export default PuzzleBoard;
