import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import ActiveLink from './ActiveLink';

interface Props {}

interface menuItem {
  text: string;
  href: string;
}

const menuItems: menuItem[] = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
  {
    text: 'Pricing',
    href: '/pricing',
  },
];

const Navbar: React.FC<Props> = () => {
  // const [select, setSelect] = useState<string>('Home');

  // const handleClick = (e: any) => {
  //   setSelect(e.target.innerHTML);
  // };

  return (
    <nav className={styles.navbar}>
      {menuItems.map((el: menuItem, index: number) => (
        <ActiveLink name={el.text} href={el.href} key={index} />
      ))}
      {/* <ActiveLink
        name='Home'
        href='/'
        // handleClick={handleClick}
        // isActive={select === 'Home'}
      />
      <ActiveLink
        name='About'
        href='/about'
        // handleClick={handleClick}
        // isActive={select === 'About'}
      />
      <ActiveLink
        name='Contact'
        href='/contact'
        // handleClick={handleClick}
        // isActive={select === 'Contact'}
      /> */}
    </nav>
  );
};

export default Navbar;
