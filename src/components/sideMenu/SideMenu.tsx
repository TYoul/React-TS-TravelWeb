import React from 'react';
import styles from './SideMenu.module.css';
import { sideMenuList } from './mockup';
import { Menu } from 'antd';
import { GifOutlined } from '@ant-design/icons';

const SideMenu: React.FC = () => {
  return (
    <Menu mode="vertical" className={styles['side-menu']}>
      {sideMenuList.map((m, index) => {
        return (
          <Menu.SubMenu
            key={`side-menu-${index}`}
            icon={<GifOutlined />}
            title={m.title}
          >
            {m.subMenu.map((sm, smindex) => {
              return (
                <Menu.SubMenu
                  key={`sub-menu-${smindex}`}
                  icon={<GifOutlined />}
                  title={sm.title}
                >
                  {sm.subMenu.map((sms, smsindex) => {
                    return (
                      <Menu.Item
                        key={`sub-sub-menu-${smsindex}`}
                        icon={<GifOutlined />}
                      >
                        {sms}
                      </Menu.Item>
                    );
                  })}
                </Menu.SubMenu>
              );
            })}
          </Menu.SubMenu>
        );
      })}
    </Menu>
  );
};

export default SideMenu;
