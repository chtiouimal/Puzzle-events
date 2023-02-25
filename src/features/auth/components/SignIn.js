import { Form, Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { signin } from "../services/auth.services";
import { LoginOutlined } from "@ant-design/icons";

function SignIn({ setPuzzleData }) {
  const Navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const { data } = await signin(values);
      console.log(data, values);
      localStorage.setItem("authToken", data.accessToken);
      localStorage.setItem("user", data._id);
      localStorage.setItem("admin", data.isAdmin);
      setPuzzleData((prev) => ({
        ...prev,
        loggedIn: true,
        user: data,
        about: false,
      }));
      Navigate(data.isAdmin === 0 ? "/admin" : "/");
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="puzzle-auth">
      <h4>Welcome Back.</h4>
      <div className="puzzle-auth-form">
        <Form
          name="login"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="phoneNumber"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input placeholder="PhoneNumber" autoComplete="newpassword" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="password" autoComplete="newpassword" />
          </Form.Item>
          <Form.Item>
            <Button className="puzzle-btn" htmlType="submit">
              <LoginOutlined />
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default SignIn;
