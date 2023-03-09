import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartOverlay, setCartOverlay] = useState(false);

  const openCartOverlayHandler = () => {
    setCartOverlay(true);
  };

  const closeCartOverLayHandler = () => {
    setCartOverlay(false);
  };

  return (
    <CartProvider>
      {cartOverlay && <Cart  onCloseCartOverlay ={closeCartOverLayHandler}/>}
      <Header onOpenCartOverlay = {openCartOverlayHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
