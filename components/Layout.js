import BasicBreadcrumbs from './breadcrumbs';
import CartBadge from './cart-badge';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <>
          <BasicBreadcrumbs />
          <CartBadge />
        </>
      </header>

      <main>
        <div className='mt-10 mb-10'>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
