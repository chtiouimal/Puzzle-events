import { Tabs } from "antd";
import { useEffect, useState } from "react";
import { ClickedUsers, UsersList } from "../components";
import { getUsers } from "../services/users.services";

function DashboardPage() {
  const [users, setUsers] = useState([]);
  const [clickedUsers, setClickedUsers] = useState(0);

  const getUsersList = async () => {
    return await getUsers()
      .then((data) => {
        setUsers(data.data.users);
        setClickedUsers(data.data.clicked.length);
        console.log(data.data.clicked);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUsersList();
  }, []);

  const items = [
    {
      key: "1",
      label: `Dashboard`,
      children: <ClickedUsers clickedUsers={clickedUsers} />,
    },
    {
      key: "2",
      label: `Users`,
      children: <UsersList users={users} />,
    },
  ];
  return (
    <div className="puzzle-admin-page">
      <Tabs className="puzzle-tabs" defaultActiveKey="1" items={items} />
    </div>
  );
}

export default DashboardPage;
