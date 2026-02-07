import { Eye, Clock, CalendarPlus2 } from 'lucide-react'

const StatsShowcase = () => {
  return (<div className="flex gap-5 items-center text-sm">
    <div className="flex items-center gap-1">

      <Eye className={`w-4 stroke-gray-700 dark:stroke-gray-300`}/>
      <p className={`text-gray-700 dark:text-gray-300`}>6</p>
    </div>

    <div className="flex items-center gap-1">
      <Clock className={`w-4 stroke-gray-700 dark:stroke-gray-300`} />
      <p className={`text-gray-700 dark:text-gray-300`}>18 Apr</p>
    </div>

    <div className="flex items-center gap-1">
      <CalendarPlus2 className={`w-4 stroke-gray-700 dark:stroke-gray-300`} />
      <p className={`text-gray-700 dark:text-gray-300`}>22 Feb</p>
    </div>



  </div>);
}

export default StatsShowcase;