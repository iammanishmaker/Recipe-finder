import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, avgRating, costForTwo } =
    resData?.info;
  return (
    <div className="res-card m-4 p-4 w-64 h-[380px] overflow-hidden shadow-xl flex flex-col transition ease-in-out delay-75 hover: -translate-y-1 hover:scale-105 duration-300  rounded-lg hover:bg-gray-200">
      <img
        className="res-logo h-48 w-full rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="font-semibold">⭐{avgRating} Stars</h4>
      <h4 className="font-medium ">{cuisines.join(", ")}</h4>
      {/* <h4 className="font-medium text-sm">
        {resData.info.sla.deliveryTime} Minutes
      </h4> */}
      <h4 className="font-medium text-sm">{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
