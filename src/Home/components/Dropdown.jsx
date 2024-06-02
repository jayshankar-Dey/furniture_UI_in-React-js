/* eslint-disable react/prop-types */
import { useState } from "react";

const Dropdown = ({ name, list }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative">
        {name && (
          <button
            onClick={() => setOpen(!open)}
            className="flex justify-center items-center gap-x-1"
          >
            {name}{" "}
            <span
              className={`flex items-center duration-300  justify-center ${
                open && "rotate-180"
              }`}
            >
              <ion-icon name="chevron-down-outline"></ion-icon>
            </span>
          </button>
        )}
        {list && open ? (
          <ul className="absolute w-fit duration-300 bg-white text-black z-20  p-1 flex flex-col gap-y-3 mt-4 rounded-md shadow-lg -left-5">
            <div className=" relative flex justify-center">
              <span className="h-4 w-4 bg-white absolute -top-3 rotate-45"></span>
            </div>

            {list.map((list, i) => (
              <li className=" w-32 cursor-pointer p-1 duration-300 hover:bg-gray-300" key={i}>{list}</li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Dropdown;
