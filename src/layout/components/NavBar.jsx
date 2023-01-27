import { LeftOutlined } from '@ant-design/icons';
import { Button, Col, Layout, Menu, Row, Space, theme, Typography } from 'antd';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks';
import { UserInfo } from './UserInfo';

//create a fixed header?

const { Header } = Layout;
const { Title } = Typography;
export const NavBar = () => {

    const {
        colorPrimary,
        colorInfoBg,
        colorInfo

    } = useTheme();
    const style = {
        background: '#0092ff',
        padding: '8px 0',
    };

    const navigate = useNavigate()
    const onLogout = () => {
        // logout();
        navigate('/login', {
            replace: true
        });

    }

    return (
        <Header
            style={{
                padding: 0,
                background: colorInfo,
                marginBottom: '5px',
                width: '100%',
                backgroundColor: colorInfoBg,
                color: 'white'
            }}

        >
            <Row
                style={{ width: '100%' }}
                justify={{ xs:'center', lg: 'center' }}
                align={{ xs:'middle',lg: 'middle' }}
            >
                <Col
                    xs={{ offset: 2, span: 22 }}
                    lg={{ offset: 0, span: 2 }}
                >
                    <Space direction='horizontal'>
                        <img
                            style={{ marginRight: 'auto' }}
                            height={50} width={100} alt='Logo' 
                            src='' />
                    </Space>

                </Col>
                <Col

                    xs={{ span: 0 }}
                    lg={{ offset:5,span: 6, }}
                // flex={2}
                >
                    <Title
                        level={4} 
                        style={{ 
                            color: 'white', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            margin: 0,
                            //  marginTop: '0.5em'
                             }}
                        >App Title</Title>
                </Col>
                <Col
                    xs={{ offset: 0, span: 7 }}
                    lg={{ offset: 0, span: 9 }}
                >
                    <UserInfo />
                </Col>
            </Row>


           
        </Header >
    )
}
