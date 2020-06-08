import React, { Component } from "react";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Breadcrumb, Icon, Dropdown, Avatar, Badge } from "antd";
import { withRouter } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { adminRouter } from "../../routes/index.js";
import {DashboardOutlined } from '@ant-design/icons';
import logo from "./logo.png";
import "./frame.css";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class Frame extends Component {
    onMenuClick=({ key })=>{
        this.props.history.push(key)
      }
      onDropDown =({key})=>{
        this.props.history.push(key)
        console.log(key)
        }
    rederDroupdown =()=> (
        <Menu onClick={this.onDropDown}>
          <Menu.Item key="/admin/notification">
          <Badge dot={Boolean(this.props.notificationgCount)}>
           通知中心
          </Badge>
          </Menu.Item>
          <Menu.Item key="/admin/settings">
              个人设置
          </Menu.Item>
          <Menu.Item key="/admin/login">
              退出登录
          </Menu.Item>
        </Menu>
      );
  render() {
    const setKeyArr =this.props.location.pathname.split('/')
    setKeyArr.length=3

    console.log(this.props)
    return (

      <Layout style={{height:"100%"}}>
        <Header className="header">
          <div className="qf-logo" />
          <img className="ings" src={logo}></img>
          <div className='flat-left'>
          <Dropdown overlay={this.rederDroupdown} trigger={['click']}>
            <div  className="ant-dropdown-link" style={{color:'#FFF'}} onClick={e => e.preventDefault()}>
               <Avatar className="avater" src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=157110003,2932529084&fm=26&gp=0.jpg" /> 欢迎你！小明<Badge count={this.props.notificationgCount} offset={[0,-20]}></Badge> <DownOutlined />
            </div>
        </Dropdown>
        </div>
        </Header>
        <Layout style={{height:"100%"}}>
          <Sider width={200} className="site-layout-background" style={{height:"850px"}}>
            <Menu
              mode="inline"
              selectedKeys={[setKeyArr.join('/')]}
              style={{ height: "100%", borderRight: 0 }}
              onClick={this.onMenuClick}
            >
            {
                this.props.menus.map(item=>{
                  return (
                    <Menu.Item key={item.pathname}>
                    <DashboardOutlined />
                    {item.title}</Menu.Item>
                  )
                })
               }

            </Menu>
          </Sider>
          <Layout style={{ padding: "0 " }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                backgroundColor:'#fff'
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(Frame) ;
