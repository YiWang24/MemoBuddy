import React, { useState } from 'react';
import Button from '../navigation/Button';

function DiaryText({ handleSave }) {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="p-4 w-full h-full relative flex flex-col gap-2">
            <textarea
                id="message"
                name="message"
                value={value}
                onChange={handleChange}
                rows="4"
                className="mt-2 p-3 block w-full h-[82%] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Type your message here..."
            />
            <div className='flex justify-end'>
                <Button className="text-right" onClick={handleSave}>Save</Button>
            </div>
        </div>
    );
}

export default DiaryText;
