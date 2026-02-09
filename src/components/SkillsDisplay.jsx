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

  const moveNext = () => setIndex((i) => (i + 1) % total);
  const movePrev = () => setIndex((i) => (i - 1 + total) % total);

  return (
    <section className="flex flex-col items-center justify-center px-6 py-10">
      
      <div className="flex items-center justify-center gap-6 md:gap-10 h-56 md:h-64">
        {visible.map((item, i) => {
          const Icon = item.icon;
          const isCenter = i === 1;

          return (
            <div
              key={i}
              className={`
                flex flex-col items-center transition-all duration-500
                ${isCenter ? "opacity-100 scale-110" : "opacity-40 scale-90"}
                ${!isCenter ? "hidden md:flex" : "flex"}
              `}
            >
              <Icon
                size={isCenter ? 110 : 80}
                color={item.color}
              />
              <p
                className={`mt-2 font-bold ${
                  isCenter ? "text-lg md:text-xl" : "text-sm"
                }`}
              >
                {item.name}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex gap-10 mt-4">
        <button
          onClick={movePrev}
          className="p-2 rounded-2xl transition hover:bg-slate-900 cursor-pointer"
        >
          <IoIosArrowBack size={28} />
        </button>

        <button
          onClick={moveNext}
          className="p-2 rounded-2xl transition hover:bg-slate-900 cursor-pointer"
        >
          <IoIosArrowForward size={28} />
        </button>
      </div>
    </section>
  );
};

export default SkillsDisplay;
