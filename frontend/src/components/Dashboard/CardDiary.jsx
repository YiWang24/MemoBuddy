import React from 'react'
import { TrashIcon, LockClosedIcon, LockOpenIcon } from '@heroicons/react/outline';

const CardDiary = ({ title }) => {
    return (
        <div className='grid grid-cols-[8fr_1fr] p-2 border-2 border-black rounded-md'>
            <div className='flex items-center justify-center'>{title}</div>
            <div className='flex flex-col gap-2'>
                <button className="text-red-500 hover:text-red-700 transition-colors">
                    <TrashIcon className="h-6 w-6" />
                </button>
                <button className="text-gray-500 hover:text-gray-700 transition-colors">
                    <LockClosedIcon className="h-6 w-6" />
                </button>
            </div>
        </div>
    )
}

export default CardDiary
