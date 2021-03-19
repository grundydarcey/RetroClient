import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <section className='headercontainer'>
        <section className='headerparts'>
          <Link to='/' className='link'>
            Home
          </Link>
          <Link to='/today' className='link'>
            Today
          </Link>
          <Link to='/checkdates' className='link'>
            Check Future Dates
          </Link>
          <Link to='/planetguide' className='link'>
            Planet Guide
          </Link>
        </section>
      </section>
    )
  }
}