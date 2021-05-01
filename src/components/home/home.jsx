import React from 'react';
import './home.scss';
const MenuIcon = () => {
  const iconHeight = 15;
  return (
    <span className="menu-icon">
      <svg viewBox="0 0 100 80" width="40" height="40">
        <rect fill="currentColor" width="100" height={iconHeight} rx="8"></rect>
        <rect
          fill="currentColor"
          y="30"
          width="100"
          height={iconHeight}
          rx="8"
        ></rect>
        <rect
          fill="currentColor"
          y="60"
          width="100"
          height={iconHeight}
          rx="8"
        ></rect>
      </svg>
    </span>
  );
};
const Home = () => {
  return (
    <div className="home">
      <nav className="nav">
        <MenuIcon />
      </nav>
      <div className="alpha-layer"></div>
      <section className="primary">
        <h1 className="primary-header">Andrew & Deborah's Wedding Website</h1>
        <h2 className="secondary-header">
          My beloved is mine and I am his <br /> Song of Songs 2:16a
        </h2>
      </section>
      <div className="beta-layer"></div>
    </div>
  );
};

export default Home;
