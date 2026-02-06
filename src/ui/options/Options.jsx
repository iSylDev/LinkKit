import { useState } from "react";

const Options = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (<div>
    <button className="bg-white hover:bg-gray-200 dark:bg-dark-green dark:border-dark-border dark:hover:bg-light-green border border-gray-400 p-1 rounded-lg animate group">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 stroke-gray-900 dark:stroke-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
      </svg>
    </button>

    <div>
      
    </div>
  </div>);
}

export default Options;