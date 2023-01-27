
import { UploadOutlined, UserOutlined, VideoCameraOutlined, AntDesignOutlined, LeftOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Layout, Row, Space, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks';
import { NavBar, SideBar } from './components';
 
const { Content, Footer, Header } = Layout;
const { Title, Text } = Typography;

const style = {
    background: '#0092ff',
    padding: '8px 0',
};
export const AppLayout = ({ children, appName }) => {
    const navigate = useNavigate();
    const {
        colorBgContainer, colorPrimaryBg, colorPrimary, colorInfo
    } = useTheme();

    const onNavigateBack = () => {
        navigate(-1);
    }

    return (
        <>

            <Layout
                hasSider
            > 
                <SideBar />
                <Content
                    className='content'
                    style={{ height: '100vh' }}
                >
                    <NavBar />
                    <Row
                        
                        gutter={[{ xs: 0 }, { xs: 30, lg: 0 }]}
                        justify={{ xs: 'center' }}
                        align={{ xs: 'middle' }}
                    >

                        <Col
                            xs={{ span: 24 }}
                            lg={{ span: 24 }}
                            style={{ margin: 0, paddingLeft: '0.5em', paddingRight: '0.5em', width: '100%' }}
                        >

                            {children}
                        </Col>
                    </Row>
                </Content>

            </Layout>

        </>
    )
}
