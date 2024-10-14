import groceryImage from "../../images/grocerystore.png";
const Grocery = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[88vh]   font-bold text-orange-500 text-2xl">
      <div>
        <img src={groceryImage} className="h-64  rounded-xl"></img>
      </div>
      <h1>This is basically added to test lazy loading of a component!</h1>
    </div>
  );
};

export default Grocery;
