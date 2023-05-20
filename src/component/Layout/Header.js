import styles from "./Header.module.css";
import headerImg from "../../assets/meals.jpg";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals :-)</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img alt="Meals on tray" src={headerImg} />
      </div>
    </>
  );
};

export default Header;
