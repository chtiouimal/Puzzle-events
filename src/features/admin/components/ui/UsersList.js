import { Table } from "antd";
import { useEffect, useState } from "react";
import { getUsers } from "../../services/users.services";

function UsersList({ users }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(users);
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <h4>{record.firstname + " " + record.lastname}</h4>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (email) => <h6>{email}</h6>,
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      render: (phoneNumber) => <h6>{phoneNumber}</h6>,
    },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <a>Invite {record.name}</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
  ];

  return (
    <div className="users-list">
      <div className="puzzle-table-wrapper">
        <div className="puzzle-table-header">
          <h6>Header</h6>
        </div>
        <Table
          className="puzzle-table"
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 4 }}
        />
      </div>
    </div>
  );
}

export default UsersList;
