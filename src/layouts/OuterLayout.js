import { Layout } from "antd";
import { useEffect, useState } from "react";
import { PuzzleUser } from "../components";
import useWindowSize from "../hooks/useWindowSize";
import { getRightSiderWidth } from "../utils/layout.helpers";
import PuzzleSider from "./components/PuzzleSider";
import MainLayout from "./MainLayout";

function OuterLayout({ children }) {
  const { width, layoutHeight } = useWindowSize();
  const [siderWidth, setSiderWidth] = useState(0);

  useEffect(() => {
    setSiderWidth(getRightSiderWidth(width, layoutHeight));
  }, [width, layoutHeight]);

  return (
    <Layout className="puzzle-main-layout">
      <MainLayout siderBreakPoint={siderWidth} content={children} />
      <PuzzleSider className="puzzle-right-sider" width={siderWidth}>
        <PuzzleUser />
        {localStorage.getItem("admin") === "0" ? (
          <h3 style={{ padding: 16 }}>Admin Panel</h3>
        ) : (
          children
        )}
      </PuzzleSider>
    </Layout>
  );
}

export default OuterLayout;
