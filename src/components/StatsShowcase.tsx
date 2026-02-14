import { Eye, Clock, CalendarPlus2, Pin } from 'lucide-react'

const StatsShowcase = () => {
  return (<div className='w-full flex justify-between items-center my-2'>
    <div className='flex gap-7 items-center'>
      <div className='flex items-center gap-1'>
        <Eye className='w-4 stroke-icons' />
        <p className='text-xs'>153</p>
      </div>
      <div className='flex items-center gap-1'>
        <Clock className='w-4 stroke-icons' />
        <p className='text-xs'>14 Feb</p>
      </div>
      <div className='flex items-center gap-1'>
        <CalendarPlus2 className='w-4 stroke-icons' />
        <p className='text-xs'>15 Jan</p>
      </div>
    </div>
    <Pin className='w-4' />
  </div>);
}

export default StatsShowcase;