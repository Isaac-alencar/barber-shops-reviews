import { ReactElement } from 'react';

import styles from '@/styles/pages/Home.module.css';

type LayoutProps = {
  children: ReactElement;
};

export default function Layout({ children }: LayoutProps) {
  return <main className={styles.container}>{children}</main>;
}
