import { useDispatch } from "react-redux";
import { cartActions } from "../store";

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <div style={{ borderBottom: "solid", padding: "0 30px", display: "flex" }}>
      <h1>ReduxCart</h1>
      <button
        style={{ maxHeight: "32px", margin: "auto", marginRight: "0" }}
        onClick={() => {
          dispatch(cartActions.toggleCartVisible());
        }}
      >
        My Cart
      </button>
    </div>
  );
}
