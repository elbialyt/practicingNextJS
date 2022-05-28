import Head from "next/head";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>This is the best header ever</h1>
      <p className={headerStyles.title}>theres so much to learn in next.js</p>
    </div>
  );
};

export default Header;
