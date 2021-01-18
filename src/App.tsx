import React from 'react';
import styles from './App.module.css';
import { Row, Col } from 'antd';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Carousel from './components/carousel/Carousel';
import SideMenu from './components/sideMenu/SideMenu';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      {/* 页面内容 content */}
      <div className={styles['page-content']}>
        <Row style={{ marginTop: '20px' }}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default App;
