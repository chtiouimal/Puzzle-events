import { Layout } from "antd";
import { useContext, useEffect, useState } from "react";
import { PuzzleContext } from "../context/PuzzleContext";
import useWindowSize from "../hooks/useWindowSize";
import { getBoardSize, getSiderWidth } from "../utils/layout.helpers";
import PuzzleAbout from "./components/PuzzleAbout";
import PuzzleFooter from "./components/PuzzleFooter";
import PuzzleGame from "./components/PuzzleGame";
import PuzzleHeader from "./components/PuzzleHeader";

function MainLayout({ siderBreakPoint, content }) {
  const { height, width, layoutWidth, layoutHeight } = useWindowSize();
  const { puzzleData, setPuzzleData } = useContext(PuzzleContext);

  const [boardSize, setBoardSize] = useState(0);
  const [siderWidth, setSiderWidth] = useState(0);

  useEffect(() => {
    setBoardSize(getBoardSize(layoutWidth, layoutHeight, width));
    setSiderWidth(getSiderWidth(layoutWidth, layoutHeight, width));
  }, [layoutWidth, height, width, layoutHeight]);
  return (
    <Layout className="puzzle-sub-layout">
      <PuzzleHeader
        siderBreakPoint={siderBreakPoint}
        setPuzzleData={setPuzzleData}
        content={content}
      />
      {puzzleData.loggedIn && localStorage.getItem("admin") === "0" ? (
        content
      ) : !puzzleData.about && puzzleData.loggedIn ? (
        <PuzzleGame boardSize={boardSize - 32} siderWidth={siderWidth} />
      ) : (
        <PuzzleAbout />
      )}
      <PuzzleFooter siderBreakPoint={siderBreakPoint} />
    </Layout>
  );
}

export default MainLayout;
