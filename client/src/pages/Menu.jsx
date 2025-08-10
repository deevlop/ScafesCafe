import { useEffect, useState } from "react";
import menuData from "../../../menu.json";
import Button from "../components/Buttons";
import MenuItem from '../components/MenuItem';

export default function Menu() {
  const [currentCategory, setCurrentCategory] = useState("Cold Drinks");

  const sectionClassName = "w-full text-center font-bold text-[22px]";

  const menu = menuData;
  const [filteredMenu, setFilteredMenu] = useState(menu);

  const resetMenu = () => {
    const filtered = menu.filter((item) => {
      if (currentCategory === "Cold Drinks") {
        return Number(item.id) < 11 && Number(item.id) % 2 === 0;
      } else if (currentCategory === "Hot Drinks") {
        return Number(item.id) < 11 && Number(item.id) % 2 !== 0;
      } else if (currentCategory === "Waffles") {
        return item.category === "food";
      }
      return false;
    });
    setFilteredMenu(filtered);
  };

  useEffect(() => {
    resetMenu();
  }, [currentCategory]);

  return (
    <div className="w-screen h-screen flex-col items-center justify-start overflow-y-hidden overflow-x-hidden pt-20 px-2">
      <div className="w-full flex flex-row justify-around overflow-x-auto mb-0 h-[4.5rem] p-2 px-4">
        <div className="flex flex-col items-center justify-center w-full h-full mx-2">
          <Button onClick={() => setCurrentCategory("Cold Drinks")}>Cold Drinks</Button>
          {currentCategory === "Cold Drinks" && (
            <div className="w-[16px] h-[6px] bg-coffee-light border-coffee-medium border-[0.1rem] rounded-full mt-[0.15rem]"></div>
          )}
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full mx-2">
          <Button onClick={() => setCurrentCategory("Hot Drinks")}>Hot Drinks</Button>
          {currentCategory === "Hot Drinks" && (
            <div className="w-[16px] h-[6px] bg-coffee-light border-coffee-medium border-[0.1rem] rounded-full mt-[0.15rem]"></div>
          )}
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full mx-2">
          <Button onClick={() => setCurrentCategory("Waffles")}>Waffles</Button>
          {currentCategory === "Waffles" && (
            <div className="w-[16px] h-[6px] bg-coffee-light border-coffee-medium border-[0.1rem] rounded-full mt-[0.15rem]"></div>
          )}
        </div>
      </div>

      <div className="w-full h-full flex flex-col items-center overflow-y-auto justify-start md:grid md:grid-cols-3 md:grid-flow-row md:auto-rows-max md:gap-4 pb-24 px-2 p-2 md:pr-4 border-shadow">
        {filteredMenu && filteredMenu.length > 0 ? (
          filteredMenu.map((item) => (
            <MenuItem
              key={item.id}
              name={item.name}
              price={item.price}
              ingredients={item.ingredients}
              description={item.description}
              videoSrc="/making-latte-sample.mp4"
            />
          ))
        ) : (
          <div className="w-full h-full p-4 flex flex-col items-center justify-center">
            <div className="w-full h-full border rounded-md border-black m-2 text-center">No items found</div>
          </div>
        )}
      </div>
    </div>
  );
}
