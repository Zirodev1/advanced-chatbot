import { Link } from "react-router-dom";
import Image from "../../../components/Image";
import Users from "../../../components/Users/users";
import Sorting from "./Sorting/sorting";


// TODO: creact actual func to fetch chats to fill table
const Table = ({ items }) => {
  return (
    <div className="border border-n-3 rounded-xl dark:border-n-5">
      {/* Header */}
      <div className="grid grid-cols-[3fr_1fr_1fr_1fr] gap-4 px-8 py-5 border-b border-n-3 xl:px-4 xl:py-3 dark:border-n-5">
        <div>
          <Sorting title="Title" />
        </div>
        <div className="text-right">
          <Sorting title="Last modified" />
        </div>
        <div className="text-right">
          <Sorting title="Created" />
        </div>
        <div className="text-right">
          <Sorting title="Members" />
        </div>
      </div>
      {/* Rows */}
      <div className="p-4 xl:px-2">
        {items.map((item) => (
          <Link
            className="grid grid-cols-[3fr_1fr_1fr_1fr] gap-4 items-center px-4 py-5 rounded-xl transition-colors hover:bg-n-2 xl:px-2 xl:py-3 dark:hover:bg-n-7"
            key={item.id}
            to={item.url}
          >
            {/* Title Column */}
            <div className="flex items-center font-semibold text-base-1">
              <div
                className="flex justify-center items-center shrink-0 w-10 h-10 mr-5 rounded-xl md:hidden"
                style={{ backgroundColor: item.color }}
              >
                <Image
                  className="w-6"
                  src={item.image}
                  width={24}
                  height={24}
                  alt=""
                />
              </div>
              <div className="truncate">
                {item.title}
              </div>
            </div>

            {/* Last Modified Column */}
            <div className="text-right text-base-2 font-semibold text-n-4 md:hidden">
              {item.lastModified}
            </div>

            {/* Created Column */}
            <div className="text-right text-base-2 font-semibold text-n-4 lg:hidden">
              {item.created}
            </div>

            {/* Members Column */}
            <div className="justify-self-end">
              <Users classUsersItem="-ml-3" items={item.members} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Table;
