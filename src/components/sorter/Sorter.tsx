import { ArrowDownUp, Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { sorterInfor } from './sorterInfo.js';
import { useClickOutside } from '../../helpers/useClickOutside.jsx';

const Sorter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null)


  function toggleAvatar() {
    setIsOpen(!isOpen)
  }

  useClickOutside(menuRef, () => setIsOpen(false))

  return (<div
    ref={menuRef}
    className='relative'>
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`flex items-center gap-1 bg-white dark:bg-dark-green hover:bg-gray-200 dark:hover:bg-light-green p-2 rounded-lg border border-gray-300 dark:border-dark-border animate ${!isOpen && 'pointer'
        }`}>
      <ArrowDownUp className={`w-7 stroke-gray-700 dark:stroke-gray-300`} />
      <p className='text-black dark:text-white'>Sort by</p>
    </button>

    {isOpen && (
      <div className='bg-white dark:bg-light-green border-gray-300 dark:border-dark-border border rounded-lg shadow-md flex flex-col gap-1 absolute right-0 top-13 w-50 p-2 animate-in'>

        {sorterInfor.map((info) => (
          <button className='flex items-center justify-between text-black dark:text-gray-300 text-sm p-2 pointer hover:bg-gray-200 dark:hover:bg-dark-border rounded-lg '>
            {info.title}
            <Check size={16} />
          </button>
        ))}

      </div>
    )}
  </div>);
}

export default Sorter;