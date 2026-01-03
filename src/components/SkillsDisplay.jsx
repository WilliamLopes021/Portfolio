import { useState } from "react";
import { skills } from "../storage/Skills";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SkillsDisplay = () => {
  const [index, setIndex] = useState(0);
  const total = skills.length;

  const prevIdx = (index - 1 + total) % total;
  const nextIdx = (index + 1) % total;

  const visible = [
    { ...skills[prevIdx], position: "side" },
    { ...skills[index], position: "center" },
    { ...skills[nextIdx], position: "side" },
  ];

  const moveNext = () => setIndex((index + 1) % total);
  const movePrev = () => setIndex((index - 1 + total) % total);

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="flex items-center gap-8 h-64">
        {visible.map((item, i) => {
          const Icon = item.icon;
          const isFocus = i === 1;
          const iconSize = isFocus ? 130 : 80;

          return (
            <div
              key={i}
              className={`flex flex-col items-center transition-all duration-500 ${
                isFocus ? "opacity-100 scale-110" : "opacity-40 scale-90"
              }`}
            >
              <Icon size={iconSize} color={item.color} />
              <p
                className={`mt-2 font-bold ${isFocus ? "text-xl" : "text-sm"}`}
              >
                {item.name}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex gap-10">
        <button
          onClick={() => movePrev()}
          className="cursor-pointer hover:bg-slate-900 rounded-2xl p-2 transition-all duration-300"
        >
          <IoIosArrowBack size={30} />
        </button>
        <button
          onClick={() => moveNext()}
          className="cursor-pointer hover:bg-slate-900 rounded-2xl p-2 transition-all duration-300"
        >
          <IoIosArrowForward size={30} />
        </button>
      </div>
    </div>
  );
};

export default SkillsDisplay;
