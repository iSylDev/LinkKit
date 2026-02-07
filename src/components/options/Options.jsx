import { useState, useRef, useEffect } from "react";
import { OptionData } from "./OptionsData";

const Options = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null)


  function toggleAvatar() {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (<div
    ref={menuRef}
    className="relative">
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="bg-white hover:bg-gray-200 dark:bg-dark-green dark:border-dark-border dark:hover:bg-light-green border border-gray-400 p-1 rounded-lg animate group">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 stroke-gray-900 dark:stroke-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
      </svg>
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