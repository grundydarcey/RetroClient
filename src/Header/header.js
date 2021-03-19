import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <section className='headercontainer'>
        <section className='headerparts'>
          <Link to='/checkdates' className='link'>
            Check Dates
          </Link>
          <p className='link'>
            Planet Guide
          </p>
          <p className='link'>
            Home
          </p>
        </section>
      </section>
    )
  }
}