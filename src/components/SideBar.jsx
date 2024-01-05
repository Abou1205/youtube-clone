import { useContext } from "react";
import { categories } from "../constants";
import { YoutubeContext } from "../context/YoutubeContext";

const SideBar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(YoutubeContext);

  return (
    <div className="flex flex-col p-1 md:p-4">
      {categories.map((category, i) => (
        <div key={i}>
          <div
            onClick={() => setSelectedCategory(category)}
            className={`${category.name === selectedCategory.name && 'bg-[#2d2d2d]'} flex items-center gap-2 py-4 px-2 md:px-3 text-md md:text-lg cursor-pointer rounded-md transition duration-300 hover:bg-[#2d2d2d] `}
          >
            <span className="max-sm:text-2xl">{category.icon} </span>
            <span className="max-sm:hidden">{category.name}</span>
          </div>
          {category.divider && <hr />}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
