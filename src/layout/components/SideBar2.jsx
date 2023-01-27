import { Layout } from 'antd'
// import './SideBar.css'
export const SideBar2 = ({menu}) => {
  return (
    <Layout.Sider
        className='sidebar'
        breakpoint='lg'
        theme='dark'
        collapsedWidth={0}
        trigger={null}>
            {menu}
        </Layout.Sider>
  )
}
