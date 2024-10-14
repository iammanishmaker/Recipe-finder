import logoImage from "../../images/logo.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PiUserBold } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";
import { GiShoppingCart } from "react-icons/gi";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-orange-500 text-white shadow-lg">
      <div className="logo-container">
        <img
          alt="logo"
          className="h-24 w-26 ml-5 rounded-full"
          src={logoImage}
        ></img>
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="mx-4 font-bold text-xl hover:text-gray-900">
            <Link to="/">
              <span className="flex items-center justify-center gap-2">
                <AiOutlineHome className="w-5 h-5 " />
                <h2>Home</h2>
              </span>
            </Link>
          </li>
          <li className="mx-4 font-bold text-xl  hover:text-gray-900">
            <Link to="/about">
              <span className="flex items-center justify-center gap-2">
                <PiUserBold className="w-5 h-5 " />
                <h2>About</h2>
              </span>
            </Link>
          </li>

          <li className="mx-4 font-bold text-xl  hover:text-gray-900">
            <Link to="/contact">
              <span className="flex items-center justify-center gap-2">
                <FaEnvelope className="w-5 h-5" />
                <h2>Contact</h2>
              </span>
            </Link>
          </li>
          <li className="mx-4 font-bold text-xl hover:text-gray-900">
            <Link to="/grocery">
              <span className="flex items-center justify-center gap-2">
                <GiFruitBowl className="w-5 h-5" />
                <h2>Grocery</h2>
              </span>
            </Link>
          </li>
          <li className="mx-4 font-bold text-xl hover:text-gray-900">
            <Link to="/cart">
              <span className="flex items-center justify-center gap-2">
                <GiShoppingCart className="w-5 h-5" />
                <p className="">{cartItems.length}</p>
                <h2>Cart</h2>
              </span>
            </Link>
          </li>
          <button
            className="login mx-5 font-bold text-xl hover:text-gray-900"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            <span className="flex items-center justify-center gap-2">
              <PiUserBold className="w-5 h-5" />
              <h2> {btnName}</h2>
            </span>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
