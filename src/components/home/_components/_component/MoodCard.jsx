import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { moodInfo } from "../../../../constant/data";

export const MoodCard = ({ cardInfo }) => {
  return (
    <>
      <div
        className={`flex flex-col gap-[2rem] px-[2rem] pt-[1.5rem] pb-[0.7rem] font-montserrat rounded-[1.2rem] ${
          cardInfo.color === "blue"
            ? "bg-[#80a5d1]"
            : cardInfo.color === "pink"
            ? "bg-[#f1c3c3]"
            : cardInfo.color === "green"
            ? "bg-[#a3e3ad]"
            : "bg-[#f3d36c]"
        }`}
      >
        <div>
          <span className="text-[1.2rem] font-normal text-[#fff]">
            {cardInfo.greeting}
          </span>
          <h3 className="text-[1.2rem] font-bold text-[#fff]">
            {cardInfo.feeling}
          </h3>
        </div>
        <div className="flex justify-center items-center">
          <FontAwesomeIcon
            icon={cardInfo.img}
            size="8x"
            className="text-[#fff]"
          />
        </div>
        <span
          className={`self-center text-[1.1rem] ${
            cardInfo.color === "blue"
              ? "text-[#3057bb]"
              : cardInfo.color === "pink"
              ? "text-[#e56c6c]"
              : cardInfo.color === "green"
              ? "text-[#3d8c93]"
              : "text-[#76be63]"
          }`}
        >
          {cardInfo.expression}
        </span>
        <button
          className={`bg-[#fff] px-[1.6rem] py-[0.5rem] rounded-[2rem] cursor-pointer font-semibold ${
            cardInfo.color === "blue"
              ? "text-[#88c7f1]"
              : cardInfo.color === "pink"
              ? "text-[#f1c3c3]"
              : cardInfo.color === "green"
              ? "text-[#a2e3b4]"
              : "text-[#f7da72]"
          }`}
          role="button"
        >
          Get Support
        </button>
        <div className="w-[60%] bg-[#fff] h-[0.2rem] self-center rounded-[50%]"></div>
      </div>
    </>
  );
};
