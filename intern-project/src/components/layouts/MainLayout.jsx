import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Layout, Menu, Button, Tag, Badge, Avatar } from 'antd';

import {
  LayoutDashboard,
  Building2,
  FileText,
  LogOut,
  Bell,
  TrendingUp,
  Banknote,
  Users,
} from 'lucide-react';

import {
  DollarCircleFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

const { Sider, Content, Header } = Layout;

const MainLayout = ({ Outlet }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // get user
  const user = JSON.parse(localStorage.getItem("user"));

  // ✅ CLEAN LOGOUT FUNCTION (MERGED)
  const handleLogout = async () => {
    try {
      // optional backend call
      await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
      });

      // clear storage
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // redirect
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  // Page Title
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/dashboard': return 'DASHBOARD';
      case '/leads': return 'LEADS & DAILY WORK';
      case '/servicecharge': return 'SERVICE CHARGES';
      case '/exclusiveinsights': return 'EXCLUSIVE INSIGHTS';
      case '/incentivepayouts': return 'INCENTIVE PAYOUT';
      default: return 'LEADS & DAILY WORK';
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>

      {/* SIDEBAR */}
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={260}
        className="bg-[#0d1425] border-r border-slate-800"
      >
        <div className={`p-6 flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
          <div className="bg-[#1a5fff] p-2 rounded-lg text-white">
            <LayoutDashboard size={20} />
          </div>
          {!collapsed && (
            <span className="font-bold text-xl italic text-white uppercase">
              ATG Group
            </span>
          )}
        </div>

        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          className="bg-transparent border-none px-2 mt-4"
          items={[
            {
              key: '/dashboard',
              icon: <LayoutDashboard size={18} />,
              label: <Link to="/dashboard">Dashboard</Link>,
            },
            {
              key: '/branches',
              icon: <Building2 size={18} />,
              label: <Link to="/branches">Branches</Link>,
            },
            {
              key: '/leads',
              icon: <FileText size={18} />,
              label: <Link to="/leads">Leads & Daily Work</Link>,
            },
            {
              key: '/team',
              icon: <Users size={18} />,
              label: <Link to="/team">Team</Link>,
            },
            {
              key: '/incentivepayouts',
              icon: <Banknote size={18} />,
              label: <Link to="/incentivepayouts">Incentive Payout</Link>,
            },
            {
              key: '/servicecharge',
              icon: <DollarCircleFilled />,
              label: <Link to="/servicecharge">Service Charges</Link>,
            },
            {
              key: '/exclusiveinsights',
              icon: <TrendingUp size={18} />,
              label: <Link to="/exclusiveinsights">Exclusive Insights</Link>,
            },
          ]}
        />

        {/* LOGOUT BUTTON */}
        <div className="absolute bottom-0 w-full p-6 border-t border-slate-800">
          <button
            onClick={handleLogout}
            className={`flex items-center gap-3 text-slate-400 hover:text-white text-xs font-bold uppercase ${collapsed ? 'justify-center' : ''}`}
          >
            <LogOut size={18} />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </Sider>

      {/* MAIN */}
      <Layout>

        {/* HEADER */}
        <Header
          style={{
            padding: 0,
            background: '#fff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #f0f0f0',
          }}
        >
          {/* LEFT */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{ width: 64, height: 64 }}
            />

            <h1 style={{ fontWeight: '900', marginRight: 10 }}>
              {getPageTitle()}
            </h1>

            <Tag color="blue">SALESMAN</Tag>
          </div>

          {/* RIGHT */}
          <div style={{ display: 'flex', alignItems: 'center', paddingRight: 20 }}>
            <Badge dot>
              <Bell size={20} />
            </Badge>

            <div style={{ marginLeft: 20 }}>
              <Avatar>{user?.name?.[0] || "U"}</Avatar>
            </div>
          </div>
        </Header>

        {/* CONTENT */}
        <Content style={{ padding: 32 }}>
          {Outlet}
        </Content>

      </Layout>
    </Layout>
  );
};

export default MainLayout;