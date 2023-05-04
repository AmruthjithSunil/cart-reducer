import { useSelector } from "react-redux";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

export default function App() {
  const cartVisible = useSelector((store) => store.cart.cartVisible);

  return (
    <>
      <Navbar />
      {cartVisible && <Cart />}
      <Products />
    </>
  );
}
