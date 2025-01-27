import Image from "next/image";
import Link from 'next/link';
import styles from './Header.module.css'

export default function Header() {
  return (
    <nav className={`${styles.navbar}`}>
      <Image src='/images/Logo.svg' alt="Vanessa Huang Logo" width={60} height={60}/>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}