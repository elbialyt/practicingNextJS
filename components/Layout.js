import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          This shows on every page
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
