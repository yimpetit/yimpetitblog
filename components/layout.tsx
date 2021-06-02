import React from 'react';
import styles from './layout.module.css';

const Layout: React.FC = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Layout;

// export default function Layout({ children }) {
//   return <div>{children}</div>
// }