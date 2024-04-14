import styles from "./Nav.module.css";
import { TerrariumsList } from "../TerrariumsList/TerrariumsList";
import menu from "../../assets/svgs/menu.svg";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/entities";
export const Nav = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const navRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const handleNav = () => {
    setVisible((prev) => !prev);
    if (!visible && navRef.current) {
      theme === "anfibios"
        ? (navRef.current.className = `${styles.nav} ${styles.anfibios}`)
        : (navRef.current.className = `${styles.nav} ${styles.reptiles}`);
    } else {
      navRef.current!.className = styles.nav;
    }
  };
  return (
    <nav className={styles.nav} ref={navRef}>
      <div className={styles.containerNav}>
        <a onClick={handleNav}>
          <img src={menu} alt="menu-img" />
        </a>
      </div>
      {visible && <TerrariumsList />}
    </nav>
  );
};
