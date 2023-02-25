import { useContext, useEffect, useState } from "react";
import { GRID_SIZE } from "../../constants/initial.constants";
import { PuzzleContext } from "../../context/PuzzleContext";
import { updateData } from "../../services/data.services";
import {
  getMatrixPosition,
  getVisualPosition,
} from "../../utils/puzzle.helpers";

function PuzzleTile({ tile, imgUrl, imgUrl2, index, width, height, size }) {
  const { row, col } = getMatrixPosition(index);
  const visualPos = getVisualPosition(row, col, width, height);

  const { puzzleData } = useContext(PuzzleContext);

  const staticData = {
    piecesId: [
      {
        id: 1,
        name: "Puzzle game 01",
      },
    ],
    userId: puzzleData.user._id,
  };

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (puzzleData.user.piecesId.length > 0) {
      setClicked(true);
    }
  }, [puzzleData.user]);

  const tileStyle = {
    width: `calc(100% / ${GRID_SIZE})`,
    height: `calc(100% / ${GRID_SIZE})`,
    translateX: visualPos.x,
    translateY: visualPos.y,
  };

  const handleClick = () => {
    updateData(puzzleData.user._id, staticData)
      .then((data) => {
        data.data.piecesId.length > 0
          ? setClicked(!clicked)
          : setClicked(clicked);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <li
      style={{
        ...tileStyle,
        transform: `translate3d(${visualPos.x}px, ${visualPos.y}px, 0)`,
      }}
      className="puzzle-tile"
    >
      <div
        className={`puzzle-tile-content ${
          clicked && "puzzle-tile-content-fliped"
        }`}
      >
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="puzzle-tile-front"
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundColor: "transparent",
            backgroundSize: `${size}px`,
            backgroundPosition: `${
              (100 / (GRID_SIZE - 1)) * (tile % GRID_SIZE)
            }% ${(100 / (GRID_SIZE - 1)) * Math.floor(tile / GRID_SIZE)}%`,
          }}
          onClick={handleClick}
        ></a>
        <div
          className="puzzle-tile-back"
          style={{
            backgroundImage: `url(${imgUrl2})`,
            backgroundSize: `${size}px`,
            backgroundPosition: `${
              (100 / (GRID_SIZE - 1)) * (tile % GRID_SIZE)
            }% ${(100 / (GRID_SIZE - 1)) * Math.floor(tile / GRID_SIZE)}%`,
          }}
        ></div>
      </div>
    </li>
  );
}

export default PuzzleTile;
