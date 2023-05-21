import Header from "./component/Layout/Header/Header";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";
import { useState } from "react";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart hideCartHandler={hideCartHandler} />}
      <Header showCartHandler={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
