import { useState, useRef, useEffect } from "react";
import { OptionData } from "./OptionsData";
import { useClickOutside } from "../../helpers/useClickOutside";
import {EllipsisVertical} from 'lucide-react'

const Options = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);
  useClickOutside(menuRef, () => setIsOpen(false))

  return (<div
    ref={menuRef}
    className="relative">
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="bg-white hover:bg-gray-200 dark:bg-light-green dark:border-dark-border dark:hover:bg-dark-border border border-gray-400 p-1 rounded-lg animate group">
      <EllipsisVertical className="w-5 stroke-gray-900 dark:stroke-white" />
    </button>

    {
      isOpen && (
        <div className="absolute flex flex-col gap-1 right-0 top-10 bg-white dark:bg-light-green border-gray-300 dark:border-dark-border border w-50 shadow-md rounded-lg p-2 animate-in">
          {
            OptionData.map(option => (
              <button className="w-full flex items-center gap-3 py-2 px-2 pointer hover:bg-gray-200 dark:hover:bg-dark-border rounded-lg animate">
                {option.icon}
                <p className="text-sm text-black dark:text-white">{option.title}</p>
              </button>
            ))
          }
        </div>
      )
    }
  </div>);
}

export default Options;