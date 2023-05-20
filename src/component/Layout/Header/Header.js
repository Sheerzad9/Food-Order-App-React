import styles from "./Header.module.css";
import headerImg from "../../../assets/meals.jpg";
import HeaderCartButton from "./Buttons/HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals :-)</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img alt="Meals on tray" src={headerImg} />
      </div>
    </>
  );
};

export default Header;
