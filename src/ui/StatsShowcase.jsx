import { Eye, Clock, CalendarPlus2, Pin } from 'lucide-react'

const StatsShowcase = () => {
  let isPinned = true

  return (<div className="flex justify-between gap-5 items-center text-sm">
    <div className='flex gap-5'>
      <div className="flex items-center gap-1">

        <Eye className={`w-4 stroke-gray-700 dark:stroke-gray-300`} />
        <p className={`text-gray-700 dark:text-gray-300 text-xs`}>6</p>
      </div>

      <div className="flex items-center gap-1">
        <Clock className={`w-4 stroke-gray-700 dark:stroke-gray-300`} />
        <p className={`text-gray-700 dark:text-gray-300 text-xs`}>18 Apr</p>
      </div>

      <div className="flex items-center gap-1">
        <CalendarPlus2 className={`w-4 stroke-gray-700 dark:stroke-gray-300`} />
        <p className={`text-gray-700 dark:text-gray-300 text-xs`}>22 Feb</p>
      </div>
    </div>

    {isPinned && (
      <Pin size={17} className={`w-4 stroke-gray-700 dark:stroke-gray-300`}/>
    )}
  </div>)


}

export default StatsShowcase;