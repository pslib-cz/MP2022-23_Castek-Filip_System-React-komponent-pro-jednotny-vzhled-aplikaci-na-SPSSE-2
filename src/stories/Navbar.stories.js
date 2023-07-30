// Navbar.stories.js
import React from 'react';
import Navbar from './Navbar';
import NavItem from './NavItem';

export default {
  title: 'Structures/Navbar',
  component: Navbar,
};

export const HorizontalNavbar = () => (
  <Navbar orientation="horizontal">
    <NavItem text="Home" link="/" />
    <NavItem text="pslib" link="https://pslib.cz/" />
    <NavItem text="Services" link="/services" />
    <NavItem text="Services2130918230" link="/services" />
    <NavItem text="Contact" link="/contact" />
  </Navbar>
);

export const VerticalNavbar = () => (
  <Navbar orientation="vertical">
    <NavItem text="Home" link="/" />
    <NavItem text="About" link="/about" />
    <NavItem text="Services" link="/services" />
    <NavItem text="Services2" link="/services" />
    <NavItem text="pslibos" link="https://pslib.cz/" />
    <NavItem text="Services4" link="/services" />
    <NavItem text="Services5" link="/services" />
    <NavItem text="Contact" link="/contact" />
  </Navbar>
);
