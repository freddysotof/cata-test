
import { Form, Input, Button, Checkbox, Space, Radio, message, Spin, Alert } from 'antd';
import { InfoCircleOutlined, InteractionOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { InfoButton, PrimaryButton } from '../../ui';
import { useEffect, useMemo, useState } from 'react';
import { AuthLayout } from '../';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { regexNumberValidation } from '../../helpers';
import { useAuthStore } from '../../hooks';


const loginTypeByUser = { placeHolder: 'Usuario', name: 'usuario', type: 'text' };
const loginTypeByCode = { placeHolder: 'Codigo de colaborador', name: 'codigo', type: 'number', typeMessage: 'Debe de digitar un numero' };
const initialForm = {
  user: '',
  password: '',
  authenticationType: null,
  remember: true
}
export const LoginPage = () => {

  const {
    employeeCode,
    status,
    errorMessage,
    authenticationType,
    startLogin,

  } = useAuthStore();
  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [loginType, setLoginType] = useState(loginTypeByUser);

  const [form] = Form.useForm();

  const isAuthenticating = useMemo(() => status === 'checking', [status]);


  // useEffect(() => {
  //   form.setFieldValue('authenticationType', authenticationType);
  //   if (authenticationType === 1)
  //     setLoginType(loginTypeByUser)
  //   else
  //     setLoginType(loginTypeByCode)
  // }, [authenticationType])

  // const {
  //   formState,
  //   user, password,
  //   onInputChange, onResetForm } = useForm(initialForm);

  const onFormValuesChange = (_, allFields) => {
    const { name, value } = _[0];
    // onInputChange({ target: { name: name[0], value } });
  }


  const onAuthenticationTypeChange = ({ target, ...rest }) => {
    const { name, value } = target;
    if (value === 1)
      setLoginType(loginTypeByUser);
    else
      setLoginType(loginTypeByCode);
    form.validateFields(['user']);
  }

  const onSubmit = ({ user, password, authenticationType }) => {
    setFormSubmitted(true);
    startLogin({ user, password });
    // const { data } = useGetEmployeeQuery(`0000${employeeCode}`);
    // console.log(data)
    // if (authenticationType === 1)
    //   dispatch(startLoginByUsername({ user, password }))
    // else
    //   dispatch(startLoginByEmployeeCode({ user, password }))
  }

  const tailLayout = {
    wrapperCol: { offset: 6, span: 18 },
  };


  return (
    // <Spin tip="Loading" size="small" spinning={isAuthenticating}>
    <AuthLayout title="LOGIN" classname="login">
      {/* <div
        className="d-flex align-items-center justify-content-center flex-column"
        style={{ maxWidth: '360px', margin: 'auto', height: '100vh' }}

      >
        <div className="text-center">
          <img
            alt="logo"
          // src={logo}
          />
          <h1
          
          className="m-b-30 m-t-15">Bona Self Services</h1>
        </div> */}

      <Form
        form={form}
        initialValues={initialForm}
        onFinish={onSubmit}
        autoComplete="off"
        className="login-form "
      // requiredMark={'optional'}
      // fields={Object.keys(formState)}
      // onFieldsChange={onFormValuesChange}
      >
        <Form.Item
          // dependencies={['authenticationType']}
          // value={user}
          name="user"
          preserve={true}
          rules={[
            {
              // type: loginType.type,
              pattern: loginType.type === 'number' ? regexNumberValidation : null,
              message: loginType.typeMessage,
            },
            {
              required: true,
              message: `Digite su ${loginType.name}!`,
            },
          ]}
        // hasFeedback
        // help="Pryeba"
        >
          <Input
            prefix={
              <UserOutlined
                className="site-form-item-icon"
                style={{ color: 'rgba(0,0,0,.25)' }} />
            }
            placeholder={loginType.placeHolder}
            allowClear
          />
        </Form.Item>
        <Form.Item

          name="password"

          rules={[
            { message: 'La contrasena debe tener al menos 6 caracteres', min: 6 },
            { required: true, message: 'Digite su contrasena!' },
          ]}
        >
          <Input.Password
            prefix={
              <LockOutlined
                className="site-form-item-icon"
                style={{ color: 'rgba(0,0,0,.25)' }} />
            }
            allowClear
            placeholder="Contrasena"
          />
        </Form.Item>
        {/* <Space direction="vertical" > */}
        {/* <Form.Item
          rules={[{ required: true, message: "Seleccione el tipo de autenticacion" }]}
          name="authenticationType"

        >
          <Radio.Group
            className="d-flex justify-content-between"
            name="authenticationType"
            onChange={onAuthenticationTypeChange}

          >
            <Space size={'large'}>
              <Radio value={1}>Administrativo</Radio>
              <Radio value={2}>Colaborador</Radio>
            </Space>
          </Radio.Group>
        </Form.Item> */}

        {/* <Form.Item className="d-flex justify-content-between">
            <Space size={'large'}>
              <Form.Item
                noStyle
                valuePropName='checked'
                name="remember"

              >
                <Checkbox>Recordarme</Checkbox>
              </Form.Item>
            </Space>
          </Form.Item> */}
        {/* <Grid
              container
              sx={{mt:1}}
              display={!!errorMessage ? '' : 'none'}>
              <Grid
                item
                xs={12}
                sm={6}

              > */}
        <Form.Item
          style={{
            display: !!errorMessage ? '' : 'none'
          }
          }
        >
          <Space
            direction="vertical"
            style={{
              width: '100%',
            }}
          >
            <Alert message={errorMessage} type="error" showIcon />
          </Space>
        </Form.Item>


        {/* </Grid>
            </Grid> */}
        <Form.Item >
          {/* <Space size="small"> */}
          <PrimaryButton
            className="login-form-button"
            disabled={isAuthenticating}
            title={"Iniciar Sesion"} />
          {/* <InfoButton
                title={"Limpiar Formulario"}
                onClick={onReset} /> */}
          {/* </Space> */}
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Recordarme</Checkbox>
          </Form.Item>
          <Link className="login-form-forgot" to="/forgotpassword">
            Olvide mi contrasena
          </Link>
        </Form.Item>
      </Form>
      {/* </div> */}
    </AuthLayout >
    // </Spin>
  )

}
