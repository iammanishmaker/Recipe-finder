import { useSelector } from "react-redux";
import ItemList from "./ItemList";

import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import Emptycart from "./Emptycart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4 min-h-[88vh]">
      <div className="w-6/12 mx-auto">
        <button
          className="px-8 py-2 mx-4 bg-orange-500 text-white  rounded-lg hover:text-black font-bold"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <Emptycart />}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
