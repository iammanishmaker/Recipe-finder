import emptyCart from "../../images/emptycart.png";

const Emptycart = () => {
  return (
    <div className=" ">
      <img
        src={emptyCart}
        className="w-[400px] h-[350px] rounded-lg shadow-xl mx-auto my-10"
      ></img>
      <h1 className="text-2xl font-bold m-4">Cart is empty!</h1>
    </div>
  );
};

export default Emptycart;
