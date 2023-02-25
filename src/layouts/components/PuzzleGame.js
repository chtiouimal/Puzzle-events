import { Content } from "antd/es/layout/layout";
import { PuzzleBoard } from "../../components";

function PuzzleGame({ boardSize }) {
  return (
    <Content style={{ padding: 16 }}>
      <PuzzleBoard boardSize={boardSize} />
    </Content>
  );
}

export default PuzzleGame;
