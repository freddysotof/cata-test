import { CalculatorOutlined, CalendarOutlined, CarryOutOutlined, DollarCircleOutlined, FileOutlined, FileProtectOutlined, FormOutlined, HomeOutlined, PayCircleOutlined, ProfileOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Menu, Layout } from "antd";
import React from 'react'
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { buildMenuItem, createNavMenuItem } from "../../helpers";
import { useTheme } from "../../hooks";

const { Sider } = Layout;




export const SideBar = () => {
    const { username } = useSelector(state => state.auth);
    const { 
        colorPrimary,
        colorPrimaryBg,
        colorInfo,
        colorInfoBg,
        colorPrimaryText,
        colorMenuBg
    } = useTheme();

    const menuItems = [
        createNavMenuItem(1, (<span style={{color:'white'}}>Home</span>), <HomeOutlined style={{color:'white'}} />, '/'),
        buildMenuItem(5,  (<span style={{color:'white'}}>Dropdown</span>), <FormOutlined style={{color:'white'}} />,null,[createNavMenuItem(6, (<span style={{color:'white'}}>Option 1</span>) , <DollarCircleOutlined style={{color:'white'}} />, 'application/credit')]),
        ]
    return (
        <Sider
            // theme="dark"
            // className="sidebar"
            breakpoint="lg"
            collapsedWidth="0"
            collapsible={true}
            zeroWidthTriggerStyle={{ 
                top: '15px',
                backgroundColor:colorMenuBg
             }}
            onBreakpoint={(broken) => {
                // console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                // console.log(collapsed, type);
            }} 
          
        >
            {/* <span className="logo" /> */}
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={menuItems}
                style={{ height: '100%', borderRight: 0,
          
                backgroundColor:colorInfoBg 
            }}
            />
        </Sider>
    )
}
