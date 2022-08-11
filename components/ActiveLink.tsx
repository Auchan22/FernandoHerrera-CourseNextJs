import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '../styles/Navbar.module.css';

interface Props {
  //   handleClick(e: any): void;
  name: string;
  href: string;
  //   isActive: boolean;
}

const ActiveLink: React.FC<Props> = ({ name, href }) => {
  const { asPath } = useRouter();
  return (
    <Link href={href}>
      <a
        className={`${styles.navbarItem} ${
          asPath === href ? styles.active : styles.inactive
        }`}
        // onClick={handleClick}
      >
        {name}
      </a>
    </Link>
  );
};

export default ActiveLink;
