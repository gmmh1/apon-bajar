import React from 'react';
import './homepage.styles.scss';

const HomePage =() => (
  <div className='homepage'>
    <div className= 'directory-menu'>
      <div className= 'menu-item'>
        <div className='content'>
          <h1 className='title'>DAILY</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className= 'menu-item'>
      <div className='content'>
        <h1 className='title'>VEG</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
      </div>
      <div className= 'menu-item'>
      <div className='content'>
        <h1 className='title'>CUPBOARD</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
      </div>
      <div className= 'menu-item'>
      <div className='content'>
        <h1 className='title'>COOKING</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
      </div>
      <div className= 'menu-item'>
      <div className='content'>
        <h1 className='title'>CLEANING</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
      </div>
    </div>
  </div>
);

export default HomePage;