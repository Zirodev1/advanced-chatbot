import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Icon from '../icon/icon'

import { chats } from "../../constants/navigation";
// import ToggleTheme from "./ToggleTheme/toggletheme.component";

const SidebarNav = ({ onClick, visible }) => {
  const [activeId, setActiveId] = useState("0");
  const pathname = useLocation();
  const router = useNavigate();

  const handleClick = (id) => {
    router("/new-chat");
    setActiveId(id);
  };

  return (
    <div
      className={`fixed top-0 left-0 bottom-0 flex flex-col pt-30 pb-20 overflow-hidden 2xl:z-20 2xl:transition-all md:top-16 md:pt-10 md:bg-n-1 
          dark:md:bg-n-6 dark:md:shadow-[inset_-0.062rem_0_0_0_#393e44] ${
            visible
              ? "w-64 2xl:shadow-2 2xl:bg-n-1 md:w-[19rem] md:translate-x-0 dark:2xl:bg-n-7"
              : "w-20 md:w-[19rem] md:-translate-x-full"
          }`}
    >
      <button
        className={`absolute top-8 left-4 flex flex-col justify-center items-center w-11 h-11 rounded-full shadow-md before:w-4 before:h-0.5 before:bg-n-5
          before:my-0.5 before:rounded-sm before:transition-all after:w-4 after:h-0.5 after:bg-n-5 after:my-0.5 after:rounded-sm after:transition-all
          hover:before:!bg-sky-400 hover:after:!bg-sky-400 dark:bg-n-6 dark:before:bg-n-3 dark:after:bg-n-3 md:hidden ${
            visible
              ? "before:rotate-45 before:translate-y-[0.187rem] after:-rotate-45 after:-translate-y-[0.187rem]"
              : ""
          }`}
        onClick={onClick}
      ></button>
      <div className="grow px-4 overflow-y-auto scroll-smooth scrollbar-none">
        <div>
          {chats.map((chat) => (
            <button
              className={`flex items-center w-full mb-2 p-1 border-2 border-transparent rounded-full transition-colors hover:border-sky-400 ${
                activeId === chat.id && pathname !== "/custom-chatbot"
                  ? "!border-sky-400"
                  : ""
              }`}
              key={chat.id}
              onClick={() => handleClick(chat.id)}
            >
              <div
                className="flex justify-center items-center w-9 h-9 rounded-full shrink-0"
                style={{ backgroundColor: chat.color }}
              >
                <img className="w-5" src={chat.image} />
              </div>
              <div
                className={`ml-4 text-base-2 font-semibold whitespace-nowrap truncate transition-opacity 2xl:transition-none ${
                  visible ? "opacity-100" : "opacity-0 md:opacity-100"
                }`}
              >
                {chat.title}
              </div>
            </button>
          ))}
        </div>
        <Link
          className={`flex items-center mb-auto p-2.5 border-2 border-transparent rounded-full text-base-2 font-semibold transition-colors hover:border-sky-400 ${
            pathname === "/chatbot/create" ? "!border-sky-400" : ""
          }`}
        >
          <Icon 
            className="shrink-0 w-6 h-6 dark:fill-n-2"
            name="add-circle"
          />
          <div
            className={`ml-5.5 whitespace-nowrap transition-opacity 2xl:transition-none ${
              visible ? "opacity-100" : "opacity-0 md:opacity-100"
            }`}
          >
            Create chat bot
          </div>
        </Link>
      </div>
      {/* <ToggleTheme  /> */}
    </div>
  );
};

export default SidebarNav;
