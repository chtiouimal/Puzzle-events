import Sider from "antd/es/layout/Sider";
import { useState } from "react";

function PuzzleSider({ children, ...props }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      {...props}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      collapsed={collapsed}
      collapsedWidth={0}
    >
      {children}
    </Sider>
  );
}

export default PuzzleSider;
