import React from "react";
import { useForm } from "antd/es/form/Form";
import { Form, Input, Checkbox, Button, Select } from "antd";
const { Option } = Select;
const FormComponent = () => {
  //----hook to reset the form------------
  const [form] = Form.useForm();
  //----------storing to local storage, consoling the form data------------
  const onFinish = (values) => {
    console.log("Success:", values);
    localStorage.setItem("values", JSON.stringify(values));
    form.resetFields();
  };
  //------------------------------------
  const onFinishFailed = (errorInfo) => {
    console.log("Failed !", errorInfo);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 100,
        }}
      >
        <Option value="91">+91</Option>
        <Option value="0">0</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "DarkSeaGreen",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "block",
          width: 900,
          height: "60vh",
          padding: 50,
          backgroundColor: "#FFFF",
          borderRadius: "20px",
        }}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              style={{
                width: "100%",
              }}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default FormComponent;
