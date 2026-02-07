import { Check } from 'lucide-react'
import { useState } from 'react';

const TagSelector = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (<div
    onClick={() => setIsChecked(!isChecked)}
    className='flex justify-between items-center dark:bg-light-green dark:hover:bg-dark-border animate pointer min-w-50 py-2 px-3 rounded-lg'>
    <div className='flex gap-2 items-center'>
      <div className={`w-5 h-5 flex items-center justify-center rounded-lg border dark:border-[#00706E] ${
        isChecked && 'dark:bg-dark-border'
      }`}>
        {isChecked && <Check size={15} className='text-gray-600 dark:text-white' />}
      </div>
      <p className='text-gray-600 dark:text-white'>Ai</p>
    </div>

    <div className='w-6 h-6 flex items-center justify-center rounded-full border dark:border-[#015856]'>
        <p className='text-gray-600 dark:text-white text-sm'>1</p>
      </div>

  </div>);
}

export default TagSelector;