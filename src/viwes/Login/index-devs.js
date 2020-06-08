import React, { Component } from "react";
import { Form, Input, Button, Checkbox, Card, Modal } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.less";
const FormItem = Form.Item;
class Login extends Component {
  formRef = React.createRef();
  // submitSkip = ()=>{
  //     this.props.history.push('/admin/dashboard')
  //   }
  state = {
    visible: false,
  };

  setVisible = (visible) => {
    this.setState({
      visible: visible,
    });
  };

  handleSubmit = (values) => {
    let userInfo = this.formRef.current.getFieldsValue();
    console.log(userInfo);
  };

  handleShowModal = () => {
    this.setVisible(true);
  };

  render() {
    const onFinish = (values) => {
        //提交表单且数据验证成功后回调事件
        console.log("用户名和密码 ", values);
      };
    return (
      console.log(this.props),
      (
        <div>
          <Button onClick={this.handleShowModal}>show modal</Button>
          <Card title="登录水平表单" style={{ marginTop: 10 }}></Card>
          <Form
            className="login-form"
            onFinish={onFinish}
            initialValues={{ username: "" }}
            {...layout}
          >
            <Form.Item
              name="username"
              {...tailLayout}
              rules={[
                // 声明式验证: 直接使用别人定义好的验证规则进行验证
                { required: true, whitespace: true, message: "用户名必须输入" },
                { min: 4, message: "用户名至少4位" },
                { max: 12, message: "用户名最多12位" },
                {
                  pattern: /^[a-zA-Z0-9_]+$/,
                  message: "用户名必须是英文、数字或下划线组成",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="账号"
                style={{ width: "270px" }}
              />
            </Form.Item>
            <Form.Item
              name="password"
              {...tailLayout}
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
                style={{ width: "270px" }}
              />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住我</Checkbox>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button
                type="primary"
                htmlType="submit"
                className="form-button"
                onClick={this.handleShowModal}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      )
    );
  }
}
const handleSubmit = (values) => {
  let userInfo = this.formRef.current.getFieldsValue();
  console.log(userInfo);
};
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 8 },
};
const NormalLoginForm = (values) => {
  const onFinish = (values) => {
    //提交表单且数据验证成功后回调事件
    console.log("用户名和密码 ", values);
  };

  return (
    <Card title="后台管理" className="login-item">
      <Form
        className="login-form"
        onFinish={onFinish}
        initialValues={{ username: "" }}
        {...layout}
      >
        <Form.Item
          name="username"
          {...tailLayout}
          rules={[
            // 声明式验证: 直接使用别人定义好的验证规则进行验证
            { required: true, whitespace: true, message: "用户名必须输入" },
            { min: 4, message: "用户名至少4位" },
            { max: 12, message: "用户名最多12位" },
            {
              pattern: /^[a-zA-Z0-9_]+$/,
              message: "用户名必须是英文、数字或下划线组成",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="账号"
            style={{ width: "270px" }}
          />
        </Form.Item>
        <Form.Item
          name="password"
          {...tailLayout}
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码"
            style={{ width: "270px" }}
          />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住我</Checkbox>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            className="form-button"
            onClick={this.handleShowModal}
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
export default Login;
