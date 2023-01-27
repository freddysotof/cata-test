import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Col, Dropdown, Row, Space, Typography } from 'antd';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../hooks';
const { Title, Text } = Typography;
export const UserInfo = () => {
    const { displayName, username, startLogout } = useAuthStore();
    // const { logout } = useContext(AuthContext);

    const onLogout = () => {
        startLogout()
    }
    const items = [
        {
            key: '1',
            label: (
                <NavLink to={"profile"}>
                    <Space
                    >
                        <UserOutlined />
                        <Text >Mi Perfil</Text>
                    </Space>
                </NavLink>
            ),
        },
        {
            key: '2',
            label: (
                <Space

                    onClick={onLogout}
                >
                    <LogoutOutlined />
                    <Text >Cerrar sesion</Text>
                </Space>
            ),
        },


    ];


    return (

        <Row
            justify={{ xs: 'center', lg: 'center' }}
            align={{ xs: 'middle', lg: 'middle' }}
        >
       
            <Col
                xs={{ span: 12 }}
                lg={{offset:10,span:11}}
                style={{
                    marginTop: '.8em',
                    textAlign:'end'
                }}
            >
                <Title

                    style={{ color: 'white' }}
                    // className='align-center text-center'
                    level={5}>{displayName ?? username}</Title>
            </Col>
            <Col
                xs={{ span: 12 }}
                lg={{ offset:1,span: 2 }}
            >
                <Dropdown

                    menu={{ items }}
                    placement="bottom"
                >
                    <a
                        className='text-decoration-none'
                        onClick={(e) => e.preventDefault()}>
                        <Avatar
                            size={{
                                xs: 35
                            }}
                            icon={<UserOutlined
                                style={{ fontSize: '22.5px' }}
                            />}
                        />
                    </a>
                </Dropdown>
            </Col>
        </Row>

    )
}
