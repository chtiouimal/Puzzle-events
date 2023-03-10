import { Header } from "antd/es/layout/layout";
import LOGO from "../../assets/imgs/puzzle_events.png";
import { PuzzleDrawer } from "../../components";

function PuzzleHeader({ siderBreakPoint, setPuzzleData, content }) {
  return (
    <Header className="puzzle-header">
      <div className="puzzle-header-left">
        <div
          className="puzzle-logo"
          onClick={() => setPuzzleData((prev) => ({ ...prev, about: false }))}
        >
          <img src={LOGO} alt="puzzle_events_logo" />
        </div>
      </div>
      <div className="puzzle-header-right">
        {localStorage.getItem("admin") &&
          localStorage.getItem("admin") !== 0 && (
            <h6
              className="puzzle-nav"
              onClick={() =>
                setPuzzleData((prev) => ({ ...prev, about: true }))
              }
            >
              About
            </h6>
          )}
        {siderBreakPoint === 0 && (
          <PuzzleDrawer>
            {localStorage.getItem("admin") === "0" ? (
              <h3 style={{ padding: 16 }}>Admin Panel</h3>
            ) : (
              content
            )}
          </PuzzleDrawer>
        )}
      </div>
    </Header>
  );
}

export default PuzzleHeader;
