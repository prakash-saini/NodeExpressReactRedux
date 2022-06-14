import React, { FC } from 'react';
import './Home.scss';

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className="Home" data-testid="Home">
    Home Component
  </div>
);

export default Home;
