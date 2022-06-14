import React, { FC } from 'react';
import './Main.scss';
import Header from '../Header/Header.lazy';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

interface MainProps {}

const Main: FC<MainProps> = () => (
  <div className="Main" data-testid="Main">
    <Header></Header>
    <Outlet/>
    <Footer></Footer>
  </div>
);

export default Main;
