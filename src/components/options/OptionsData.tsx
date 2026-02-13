import { SquareArrowOutUpRight, Copy, PinOff, Pencil, Archive } from 'lucide-react'

export const OptionData = [
  {
    title: 'Visit',
    icon: <SquareArrowOutUpRight size={17} className='stroke-gray-700 dark:stroke-gray-300' /> ,
    action: ''
  },
  {
    title: 'Copy URL',
    icon: <Copy size={17} className='stroke-gray-700 dark:stroke-gray-300' /> ,
    action: ''
  },
  {
    title: 'Unpin',
    icon: <PinOff size={17} className='stroke-gray-700 dark:stroke-gray-300' />,
    action: ''
  },
  {
    title: 'Edit',
    icon: <Pencil size={17} className='stroke-gray-700 dark:stroke-gray-300' />,
    action: ''
  },
  {
    title: 'Archive',
    icon: <Archive size={17} className='stroke-gray-700 dark:stroke-gray-300' />,
    action: ''
  },

]