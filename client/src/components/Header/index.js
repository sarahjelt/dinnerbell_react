import React from 'react';

export const Header = (props) => (
  <header>
    <nav className='transparent nav-wrapper'>
      <a href='/' className='brand-logo center'>Dinner Bell</a>
      <a href='#' data-activates='mobile' className='button-collapse'><i className='material-icons black-text'>menu</i></a>
      <ul id='nav-mobile' className='hide-on-med-and-down'>
        <li className='active'>
          <a href='/' title='Home'>Home</a>
        </li>
        <li>
          <a href='/calendar'>Calendar</a>
        </li>
        <li>
          <a href='/saved' title='Saved'>Saved</a>
        </li>
        <li>
          <a href='/login#signup'>Sign Up</a>
        </li>
        <li>
          <a href='/login#signin'>Sign In</a>
        </li>
      </ul>
      <ul className='side-nav' id='mobile'>
        <li className='active'><a href='/'>Home</a></li>
        <li><a href='/calendar'>Calendar</a></li>
        <li><a href='/saved'>Saved</a></li>
        <li><a href='/login#signup'>Sign Up</a></li>
        <li><a href='/login#signin'>Sign In</a></li>
      </ul>
      <ul className='right'><i className='black-text material-icons'>notifications</i></ul>
    </nav>
  </header>
);