import { Button, Form, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { REGIONS } from "../../../constants/initial.constants";
import { signup } from "../services/auth.services";
import { LoginOutlined } from "@ant-design/icons";

function SignUp({ setPuzzleData }) {
  const Navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const { data } = await signup(values);
      localStorage.setItem("authToken", data.accessToken);
      localStorage.setItem("user", data._id);
      localStorage.setItem("admin", data.isAdmin);
      setPuzzleData((prev) => ({
        ...prev,
        loggedIn: true,
        user: data,
        about: false,
      }));
      Navigate("/");
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="puzzle-auth">
      <h4>Welcome.</h4>
      <div className="puzzle-auth-form">
        <Form
          name="login"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item className="puzzle-group-items">
            <Form.Item
              name="firstname"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
              name="lastname"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Email" autoComplete="newpassword" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password placeholder="Password" autoComplete="newpassword" />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password
              placeholder="Confirm Password"
              autoComplete="newpassword"
            />
          </Form.Item>
          <Form.Item
            name="region"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              className="puzzle-select"
              style={{
                width: "100%",
              }}
              placeholder="Region"
              defaultValue="23"
              options={REGIONS}
            />
          </Form.Item>
          <Form.Item className="puzzle-group-items">
            <Form.Item
              name="phoneNumber"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Phone Number" />
            </Form.Item>
            <Form.Item
              name="cin"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="CIN" />
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button className="puzzle-btn" htmlType="submit">
              <LoginOutlined />
              Sign up
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
