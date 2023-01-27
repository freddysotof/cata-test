import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Checkbox, Form, Input, Layout } from "antd"
import { Content, Footer } from "antd/es/layout/layout"
import { Link } from "react-router-dom"
import { AppFooter } from "../../ui"

export const AuthLayout = ({ classname, children }) => {
  return (
    <>
      <Layout
        className="page-layout"
        style={{ height: '100vh' }}

      >
        <Content
          className="layout-children">
          <div className="container">
            <div className="login-form-wrap">
              <div className="login-form-title">
                <img
                  style={{
                    marginRight: 'auto',
                    width: '150px',
                    marginBottom:'1em'
                  }}
                  height={70}  alt='Logo' src='' />
    
              </div>
              <h1 className="login-form-title">
                LOGIN
              </h1>
              {children}


            </div>
          </div>
        </Content>

      </Layout>

    </>
  )
}

{/* <Form
name="login_form"
className="login-form"
initialValues={{ remember: true }}
// onFinish={onFinish}
>
<Form.Item
  name="username"
  rules={[{ required: true, message: 'Please input your username!' }]}
>
  <Input
    prefix={<UserOutlined className="site-form-item-icon" />}
    placeholder="Username"
  />
</Form.Item>

<Form.Item
  name="password"
  rules={[{ required: true, message: 'Please input your Password!' }]}
>
  <Input
    prefix={<LockOutlined className="site-form-item-icon" />}
    type="password"
    placeholder="Password"
  />
</Form.Item>
<Form.Item>
  <Form.Item name="remember" valuePropName="checked" noStyle>
    <Checkbox>Remember me</Checkbox>
  </Form.Item>

  <Link className="login-form-forgot" to="/forgotpassword">
    Forgot password
  </Link>
</Form.Item>
<Form.Item>
  <Button
    type="primary"
    htmlType="submit"
    className="login-form-button"
  >
    Log in
  </Button>
  <div className="login-form-register-link-wrapper">
    Or{' '}
    {/* <Link 
    to={PATH.REGISTER} className="login-form-register-link">
      Register now!
    </Link> */}
//   </div>
// </Form.Item>
// </Form> */}