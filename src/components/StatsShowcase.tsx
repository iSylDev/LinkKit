import { formatDateShort } from '@/helpers/formartDateShort';
import type { StatsShowcaseProp } from '@/types';
import { Eye, Clock, CalendarPlus2, Pin } from 'lucide-react'

const StatsShowcase = ({ view_count, last_visited_at, created_at, is_pinned }: StatsShowcaseProp) => {
  return (<div className='w-full flex justify-between items-center my-2'>
    <div className='flex gap-7 items-center'>
      <div className='flex items-center gap-1'>
        <Eye className='w-4 stroke-icons' />
        <p className='text-xs'>{view_count}</p>
      </div>
      <div className='flex items-center gap-1'>
        <Clock className='w-4 stroke-icons' />
        <p className='text-xs'>{formatDateShort(last_visited_at)}</p>
      </div>
      <div className='flex items-center gap-1'>
        <CalendarPlus2 className='w-4 stroke-icons' />
        <p className='text-xs'>{formatDateShort(created_at)}</p>
      </div>
    </div>
    { is_pinned && <Pin className='w-4' /> }
  </div>);
}

export default StatsShowcase;