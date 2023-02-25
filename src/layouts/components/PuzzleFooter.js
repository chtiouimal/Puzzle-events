import { Footer } from "antd/es/layout/layout";

function PuzzleFooter({ siderBreakPoint }) {
  return (
    <Footer className="puzzle-footer">
      <ul
        style={{
          justifyContent:
            siderBreakPoint === 0 ? "space-between" : "flex-start",
        }}
      >
        <li>
          <a href="instagram.com">instagram</a>
        </li>
        <li>
          <a href="facebook.com">facebook</a>
        </li>
        <li>
          <a href="youtube.com">youtube</a>
        </li>
      </ul>
    </Footer>
  );
}

export default PuzzleFooter;
