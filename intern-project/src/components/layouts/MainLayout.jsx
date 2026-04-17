import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Layout, Menu, Button, theme, Tag, Badge, Avatar } from 'antd';
import { Link, useLocation } from 'react-router-dom';
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
  ApartmentOutlined,
  DollarCircleFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

const { Sider, Content, Header } = Layout;

const MainLayout = ({ Outlet }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
const navigate = useNavigate();

// get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

// logout function
const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  navigate("/"); // go to login
};
  // Dynamic Heading Logic
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/dashboard': return 'DASHBOARD';
      case '/leads': return 'LEADS & DAILY WORK';
      case '/servicecharge': return 'SERVICE CHARGES';
      case '/exclusiveinsights' : return 'EXCLUSIVE INSIGHTS';
      case '/incentivepayouts' : return 'INCENTIVE PAYOUT';
      default: return 'LEADS & DAILY WORK';
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* --- SIDEBAR --- */}
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
            <span className="font-bold text-xl italic text-white uppercase tracking-tighter">
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
              label: <Link to="/dashboard" className="font-bold text-[11px] uppercase">Dashboard</Link>,
            },
            {
              key: '/branches',
              icon: <Building2 size={18} />,
              label: <Link to="/branches" className="font-bold text-[11px] uppercase">BRANCHES</Link>,
            },
            {
              key: '/leads',
              icon: <FileText size={18} />,
              label: <Link to="/leads" className="font-bold text-[11px] uppercase">Leads & Daily Work</Link>,
            },
            {
              key: '/leads',
              icon: <Users size={18} />,
              label: <Link to="/leads" className="font-bold text-[11px] uppercase">TEAM</Link>,
            },
            {
              key: '/incentivepayouts',
              icon: <Banknote size={18} />,
              label: <Link to="/incentivepayouts" className="font-bold text-[11px] uppercase">INCENTIVE PAYOUT</Link>,
            },
            {
              key: '/servicecharge',
              icon: <DollarCircleFilled size={18} />,
              label: <Link to="/servicecharge" className="font-bold text-[11px] uppercase">SERVICE CHARGES</Link>,
            },
            {
              key: '/exclusiveinsights',
              icon: <TrendingUp size={18} />,
              label: <Link to="/exclusiveinsights" className="font-bold text-[11px] uppercase">EXCLUSIVE INSIGHTS</Link>,
            },
          ]}
        />

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

      {/* --- MAIN SECTION --- */}
      <Layout>
        {/* --- TOP NAVBAR (HEADER) --- */}
        <Header 
          style={{ 
            padding: 0, 
            background: '#fff', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            borderBottom: '1px solid #f0f0f0',
            height: '64px'
          }}
        >
          {/* Left Side: Menu + Title + Tag */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{ fontSize: '18px', width: 64, height: 64 }}
            />
            <h1 style={{ 
              margin: '0 12px 0 0', 
              fontSize: '18px', 
              fontWeight: '900', 
              fontStyle: 'italic',
              color: '#1e293b',
              letterSpacing: '-0.5px'
            }}>
              {getPageTitle()}
            </h1>
            <Tag color="blue" style={{ 
              borderRadius: '4px', 
              fontWeight: 'bold', 
              backgroundColor: '#eff6ff', 
              borderColor: 'transparent',
              color: '#2563eb',
              fontSize: '10px',
              padding: '0 8px'
            }}>
              SALESMAN
            </Tag>
          </div>

          {/* Right Side: Notification + Profile */}
          <div style={{ display: 'flex', alignItems: 'center', paddingRight: '24px' }}>
            <Badge dot color="#ef4444" offset={[-2, 4]}>
               <Bell size={20} className="text-slate-400 cursor-pointer" />
            </Badge>

            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginLeft: '24px', 
              paddingLeft: '24px', 
              borderLeft: '1px solid #f1f5f9' 
            }}>
              <div style={{ textAlign: 'right', marginRight: '12px', lineHeight: '1.2' }}>
                <div style={{ fontWeight: '800', fontSize: '13px', color: '#1e293b' }}>
                  SALESMAN_US...
                </div>
                <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 'bold' }}>
                  BR MUROOR
                </div>
              </div>
              <Avatar 
                shape="square" 
                size={40}
                style={{ backgroundColor: '#0f172a', borderRadius: '12px', fontWeight: 'bold' }}
              >
                S
              </Avatar>
            </div>
          </div>
        </Header>

        <Content className="bg-[#f8fafc]" style={{ margin: 0, padding: '32px', minHeight: 280 }}>
          {Outlet}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;