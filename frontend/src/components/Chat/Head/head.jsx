import { useContext } from "react";
import MenuChat from "../MenuChat/menuchat.component";
import Dropdown from '../Dropdown/dropdown'
import Icon from "../../icon/icon";

import { ShareChatContext } from "../../Chat";

const Head = () => {

  // TODO: implment actual logic for theses
    const options = [
        {
            title: "Edit",
            icon: "edit",
            onClick: () => console.log("Edit"),
        },
        {
            title: "Copy link",
            icon: "link",
            onClick: () => console.log("Copy link"),
        },
        {
            title: "Duplicate",
            icon: "duplicate",
            onClick: () => console.log("Duplicate"),
        },
        {
            title: "Export as doc",
            icon: "export",
            onClick: () => console.log("Export as doc"),
        },
        {
            title: "Delete",
            icon: "trash",
            onClick: () => console.log("Delete"),
            color: "#FF6C3E",
        },
    ];

    const { handleClick } = useContext(ShareChatContext);

    return (
        <div className="relative z-5 flex items-center h-[4.625rem] pl-7 pr-8 md:px-5">
            <div className="w-[calc(100%-11.75rem)] lg:w-[calc(100%-11rem)] md:w-[calc(100%-7.7rem)]">
                <MenuChat />
            </div>
            <Dropdown className="mr-8 lg:mr-5 md:mr-2" items={options} />
            <button className="btn-dark btn-medium h-9" onClick={handleClick}>
                <span>Share</span>
                <Icon className="md:hidden" name="send" />
            </button>
        </div>
    );
};

export default Head;