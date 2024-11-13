import { useColorMode } from "@chakra-ui/react";
import Icon from "../../icon/icon";

const ToggleTheme = ({ visible }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const items = [
    {
      title: "Light theme",
      icon: "sun",
      active: colorMode === "light",
      onclick: () => {
        if (colorMode !== "light") toggleColorMode();
      },
    },
    {
      title: "Dark theme",
      icon: "moon",
      active: colorMode === "dark",
      onclick: () => {
        if (colorMode !== "dark") toggleColorMode();
      },
    },
  ];

  return (
    <div className={`absolute left-4 bottom-4.5 ${visible ? 'block' : 'hidden'}`}>
      {items.map((item) => (
        <button
          key={item.title}
          onClick={item.onclick}
          className={`flex items-center space-x-2 p-2 ${
            item.active ? "text-blue-500" : "text-gray-500"
          }`}
        >
          <Icon name={item.icon} />
          <span>{item.title}</span>
        </button>
      ))}
    </div>
  );
};

export default ToggleTheme;
