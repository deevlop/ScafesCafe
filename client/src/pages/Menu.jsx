import { useEffect, useState } from "react";
import menuData from "../../../menu.json";

export default function Menu() {
  const [currentCategory, setCurrentCategory] = useState("Cold Drinks");

  const sectionClassName = "w-full text-center font-bold text-[22px]";

  const menu = menuData
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
        console.log("Reset Menu: ", menu);
        console.log("Filtered Menu: ", filtered);

        setFilteredMenu(filtered);
    }


  useEffect(() => {
    setFilteredMenu(null);
    resetMenu()
  }, [currentCategory]);

  return (

    <div className="w-screen h-screen flex-col items-center justify-start overflow-y-hidden overflow-x-hidden pt-20">
        <div className="w-full flex justify-around mb-4 h-[64px]">

            <div className="flex flex-col items-center justify-center w-full h-full">
                <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={() => setCurrentCategory("Cold Drinks")}
                >
                Cold Drinks
                </button>

                {
                    currentCategory === "Cold Drinks" && (
                        <div className="w-[12px] h-[12px] bg-blue-500 rounded-full mt-2"></div>
                    )
                }

            </div>


            <div className="flex flex-col items-center justify-center w-full h-full ">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    onClick={() => setCurrentCategory("Hot Drinks")}
                >
                    Hot Drinks
                </button>
                {
                    currentCategory === "Hot Drinks" && (
                        <div className="w-[12px] h-[12px] bg-blue-500 rounded-full mt-2"></div>
                    )
                }

            </div>

            <div className="flex flex-col items-center justify-center w-full h-full ">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    onClick={() => setCurrentCategory("Waffles")}
                >
                    Waffles
                </button>
                {
                    currentCategory === "Waffles" && (
                        <div className="w-[12px] h-[12px] bg-blue-500 rounded-full mt-2"></div>
                    )
                }

            </div>


        </div>


        <div className="w-full h-full flex flex-col items-center justify-start overflow-y-auto overflow-x-hidden md:grid md:grid-cols-3 md:grid-flow-row md:auto-rows-max md:gap-4 overflow-y-auto pb-20">
            {
                filteredMenu && filteredMenu.length > 0 ? 
                filteredMenu.map((item) => (
                    <div key={item.id} className="w-full h-full p-4 flex flex-col items-center justify-center">
                        <div className="w-full h-full border rounded-md border-black m-2 text-center">
                            {item.name}
                        </div>
                    </div>
                )) : (
                    <div className="w-full h-full p-4 flex flex-col items-center justify-center">
                        <div className="w-full h-full border rounded-md border-black m-2 text-center">
                            No items found
                        </div>
                    </div>
                )
            }
        </div>

    </div>

  );
}
