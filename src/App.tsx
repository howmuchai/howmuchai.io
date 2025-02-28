import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// src
import logo from './logo.svg';

// css
import './App.css';

// components
import { 
  HomeOutlined, 
  TeamOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

// pages
import Home from './pages/Home';
import JoinUs from './pages/JoinUs';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: '主页',
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: '加入我们',
    key: 'join-us',
    icon: <TeamOutlined />
  },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState('home');
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    navigate(`/${e.key}`);
  };

  return (
    <div style={{ 
      position: 'relative',
    }}>
      <Menu 
        onClick={onClick} 
        selectedKeys={[current]} 
        mode="horizontal" 
        items={items} 
        theme="dark"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/join-us" element={<JoinUs />} />
        {/* 其他路由 */}
      </Routes>
    </div>
  );
};

export default App;
