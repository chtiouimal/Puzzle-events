import { Drawer } from "antd";
import { useContext, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { PuzzleContext } from "../../context/PuzzleContext";
import PuzzleUser from "./PuzzleUser";

function PuzzleDrawer({ children }) {
  const { puzzleData } = useContext(PuzzleContext);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      {puzzleData.loggedIn ? (
        <span className="puzzle-drawer-action" onClick={showDrawer}>
          {open ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
        </span>
      ) : (
        <h6 className="puzzle-drawer-action" onClick={showDrawer}>
          Auth
        </h6>
      )}
      <Drawer
        closable={false}
        width={"100vw"}
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="puzzle-drawer-header">
          <PuzzleUser />
          <span className="puzzle-drawer-close" onClick={onClose}>
            <CloseOutlined />
          </span>
        </div>
        {children}
      </Drawer>
    </>
  );
}

export default PuzzleDrawer;
