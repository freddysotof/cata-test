import { DownOutlined, LogoutOutlined, PlusOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Alert, Space, Avatar, Dropdown, Typography, Skeleton, Row, Col, Table, Card } from 'antd';
import { formatStrategyValues } from 'rc-tree-select/lib/utils/strategyUtil';

const { Title, Text } = Typography;
const style = {
  background: '#0092ff',
  padding: '8px 0',
};
const { Grid } = Card;
export const HomePage = () => {
  const items = [
    {
      key: '1',
      label: (
        <Space wrap>
          <LogoutOutlined />
          <Text >Cerrar sesion</Text>
        </Space>
      ),
    },

  ];
  const gridStyle = {
    width: '100%',
    opacity: 1
    // textAlign: 'center',
  };
  return (<></>);
  return (
    <Row
      gutter={[0,{xs: 24}]}
    // gutter={{xs:[0,30],sm:[0,30]}}
    // gutter={{
    //   xs:10
    // }}
    >
      {/* <Space direction='vertical' size='large'> */}
      <Row
        gutter={{
          xs: 16,
        }}
        align={{
          xs: 'middle'
        }}
        justify={{
          sm: 'space-evenly'
        }}
      >
        <Col className="gutter-row"
          xs={{
            span: 6,
            offset: 1
          }}
        >
          <Avatar size={60} icon={<UserOutlined />} />
        </Col>
        <Col className="gutter-row"
          xs={{
            span: 17,
          }}
        >
          <Typography>
            <Title
              level={5}
              style={{ margin: 0 }}
            > Rachel C. Carpenter</Title>
            <Text type='secondary'>UI/UX Designer</Text>
          </Typography>

        </Col>
      </Row>

      <Card
        size='default'
        className='site-card-border-less-wrapper'
        title="Card title"
        bordered={true}
      >
        <Space size={'large'} direction='vertical'
          style={{
            width: '400px',
          }}
        >
          <Row>
            <Col
              xs={{
                span: 10
              }}
            >
              <Title level={4} >General</Title>
            </Col>
            <Col
              xs={{
                span: 14
              }}
            >
              <Space direction='vertical'>
                <Text>Monthly Salary</Text>
                <Text>Monthly Salary</Text>
                <Text>Monthly Salary</Text>
                <Text>Employee Since</Text>
              </Space>

            </Col>
          </Row>

          <Row>
            <Col
              xs={{
                span: 10
              }}
            >
              <Title level={4} >General</Title>
            </Col>
            <Col
              xs={{
                span: 14
              }}
            >
              <Space direction='vertical'>
                <Text>Monthly Salary</Text>
                <Text>Monthly Salary</Text>
                <Text>Monthly Salary</Text>
                <Text>Employee Since</Text>
              </Space>

            </Col>
          </Row>
        </Space>



      </Card>



      {/* <h3>Home Page</h3> */}
      {/* <Skeleton active avatar
       size='small'
       block={true}
       paragraph={{rows:1}}
       />
       <LoadingPage rows={12} /> */}



      {/* </Space> */}
    </Row>
  )
}
