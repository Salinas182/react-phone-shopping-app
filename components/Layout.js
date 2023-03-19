import Link from 'next/link';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <>
          <Link href="/">
            Inicio
          </Link>
        </>
      </header>

      <main>
        <div className='mt-10 mb-10'>
          {children}
        </div>
      </main>

      <div className={styles.backToHome}>
        <Link href="/">← Volver a inicio</Link>
      </div>
    </div>
  );
};

export default Layout;
