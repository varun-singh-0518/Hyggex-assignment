import React, {useState} from "react";
import {AiOutlineBulb} from "react-icons/ai";
import {BsFillLightbulbFill} from "react-icons/bs";
import {HiSpeakerWave} from "react-icons/hi2";
import {MdOutlineRefresh, MdFullscreen} from "react-icons/md";
import {GrFormPrevious, GrFormNext} from "react-icons/gr";
import {RxSpeakerOff} from "react-icons/rx";
import {FaPlus} from "react-icons/fa";
import footerLogo from "../assets/footerLogo.png";
import {problems} from "../constants";

const Studypage = () => {
  const listItems = ["Study", "Quiz", "Test", "Game", "Others"];
  const [selectedItem, setSelectedItem] = useState(listItems.indexOf("Study"));
  const [speaker, setSpeaker] = useState(false);
  const [hint, setHint] = useState(false);
  const [flip, setFlip] = useState(false);
  const [pageCount, setPageCount] = useState(1);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const handleNext = () => {
    if (pageCount < 10) {
      setPageCount(pageCount + 1);
      if (currentProblemIndex < problems.length - 1) {
        setCurrentProblemIndex((prevIndex) => prevIndex + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (pageCount > 1) {
      setPageCount(pageCount - 1);
      if (currentProblemIndex > 0) {
        setCurrentProblemIndex((prevIndex) => prevIndex - 1);
      }
    }
  };

  const handleRefresh = () => {
    setPageCount(1);
    setCurrentProblemIndex(0);
  };

  return (
    <div className="flex flex-col lg:ml-24 lg:mt-10 md:ml-4 md:mt-8 ">
      <div className="flex lg:text-3xl font-bold text-gradient md:text-2xl ">
        Relations and Functions ( Mathematics )
      </div>
      <div className="flex flex-col justify-center items-center lg:ml-[-70px] md:ml-0 ">
        <div className="flex mt-6 m-2 p-2 gap-14 justify-center ">
          {listItems.map((item, index) => {
            const isSelected = selectedItem === index;
            const listItemStyles = `list-none text-[18px] cursor-pointer ${
              isSelected
                ? "text-[#0c327f] underline font-bold"
                : "text-gray-600 "
            }`;

            return (
              <li
                key={index}
                className={listItemStyles}
                onClick={() => handleItemClick(index)}
              >
                {item}
              </li>
            );
          })}
        </div>
        <div
          className={`flex flex-col  items-center screen-gradient rounded-3xl w-[580px] h-[340px] cursor-pointer ${
            flip ? "flip-gradient" : ""
          }`}
        >
          <div className="flex items-start justify-between w-full p-6 m-2 ">
            {hint ? (
              <BsFillLightbulbFill
                color="yellow"
                size={28}
                cursor="pointer"
                onClick={() => setHint(!hint)}
              />
            ) : (
              <AiOutlineBulb
                color="white"
                size={28}
                cursor="pointer"
                onClick={() => setHint(!hint)}
              />
            )}
            {speaker ? (
              <HiSpeakerWave
                color="white"
                size={28}
                cursor="pointer"
                onClick={() => setSpeaker(!speaker)}
              />
            ) : (
              <RxSpeakerOff
                color="white"
                size={28}
                cursor="pointer"
                onClick={() => setSpeaker(!speaker)}
              />
            )}
          </div>
          <div
            className="flex-grow w-full flex items-center justify-center"
            onClick={() => setFlip(!flip)}
          >
            <span className=" text-white font-medium text-3xl mt-[-80px]">
              {problems[currentProblemIndex]}
            </span>
          </div>
        </div>
        <div className="flex mt-6 w-[500px] justify-between">
          <MdOutlineRefresh
            color="#002d88e1"
            size={40}
            cursor="pointer"
            onClick={handleRefresh}
          />
          <div className="flex w-52 justify-between">
            <div
              className=" rounded-3xl bg-gradient-to-r from-[#164EC0] to-[#06286E]"
              onClick={handlePrevious}
            >
              <GrFormPrevious color="white" size={40} cursor="pointer" />
            </div>
            <div className=" text-xl font-bold mt-1">{`${pageCount}/10`}</div>
            <div
              className="rounded-3xl bg-gradient-to-r from-[#164EC0] to-[#06286E]"
              onClick={handleNext}
            >
              <GrFormNext color="white" size={40} cursor="pointer" />
            </div>
          </div>
          <MdFullscreen color="#002d88e1" size={40} cursor="pointer" />
        </div>
      </div>

      <div className="flex flex-row mt-4 w-11/12">
        <div className="lg:w-48 md:w-36">
          <img src={footerLogo} alt="logo" />
        </div>
        <div className="flex mt-[-20px] md:mt-0 items-center ml-auto md:mr-[-40px]">
          <div className="w-11 h-11 p-2 rounded-3xl bg-gradient-to-r from-[#164EC0] to-[#06286E]">
            <FaPlus color="white" size={30} cursor="pointer" />
          </div>
          <div className="ml-2 font-medium lg:text-3xl md:text-2xl text-gradient cursor-pointer">
            Create Flashcard
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studypage;
