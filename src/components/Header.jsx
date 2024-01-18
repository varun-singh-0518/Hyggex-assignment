import React, {useState} from "react";
import logo from "../assets/logo.png";

const navItems = ["Home", "Flashcard", "Contact", "FAQ"];

const Header = () => {
  const [login, setLogin] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    navItems.indexOf("Flashcard")
  );

  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
      <div className=" flex flex-row justify-between items-center h-20">
        <div className="flex lg:ml-24 h-10 cursor-pointer md:ml-4 ">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex lg:mr-20 lg:pr-10 md:mr-2 md:pr-2">
          <div className="flex lg:gap-4 md:gap-1">
            {navItems.map((item, index) => {
              const isSelected = selectedItem === index;
              const listItemClasses = `flex lg:text-xl m-2 p-2 list-none cursor-pointer md:text-m ${
                isSelected ? " text-xl font-extrabold text-gradient" : ""
              }`;

              return (
                <div
                  className={listItemClasses}
                  key={index}
                  onClick={() => {
                    setSelectedItem(index);
                  }}
                >
                  <li>{item}</li>
                </div>
              );
            })}
          </div>
          <div
            className={`flex cursor-pointer ml-6 lg:pl-8 lg:w-28 bg-gradient-to-r from-[#164EC0] to-[#06286E] rounded-3xl text-white md:text-m md:w-20 md:pl-5 ${
              login ? "md:pl-3" : ""
            } `}
            onClick={() => setLogin(!login)}
          >
            <button>{login ? "Logout" : "Login"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
