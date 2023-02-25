import { useContext } from "react";
import { PuzzleContext } from "../../context/PuzzleContext";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import { INITIAL_PUZZLE_DATA } from "../../constants/initial.constants";

function PuzzleUser() {
  const { puzzleData, setPuzzleData } = useContext(PuzzleContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setPuzzleData(INITIAL_PUZZLE_DATA);
    navigate("/auth");
  };

  const items = [
    {
      label: (
        <span
          onClick={handleLogout}
          className="puzzle-nav"
          style={{ display: "flex", alignItems: "center", gap: 8 }}
        >
          <LogoutOutlined />
          Logout
        </span>
      ),
      key: "0",
    },
  ];

  return (
    <div className="puzzle-user">
      {puzzleData.loggedIn ? (
        <div className="puzzle-username">
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <span
              style={{ cursor: "pointer" }}
              onClick={(e) => e.preventDefault()}
            >
              <UserOutlined />
              <h6>{`${puzzleData?.user?.firstname} ${puzzleData?.user?.lastname}`}</h6>
            </span>
          </Dropdown>
        </div>
      ) : (
        <>
          <button
            className={!puzzleData.hasAccount ? "puzzle-btn-active" : ""}
            onClick={() =>
              setPuzzleData((prev) => ({ ...prev, hasAccount: false }))
            }
          >
            Sign Up
          </button>
          <button
            className={puzzleData.hasAccount ? "puzzle-btn-active" : ""}
            onClick={() =>
              setPuzzleData((prev) => ({ ...prev, hasAccount: true }))
            }
          >
            Sign In
          </button>
        </>
      )}
    </div>
  );
}

export default PuzzleUser;
