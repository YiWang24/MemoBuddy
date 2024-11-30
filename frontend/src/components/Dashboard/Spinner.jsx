import React from 'react'
import './Spinner.css'

const Spinner = () => {
    return (
        <div>
            {/* <div className='spinner'></div> */}
            {/* <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin border-t-indigo-600"></div> */}
            <img src='/loading.gif' alt="loader" height="70px" width="70px"></img>
        </div>
    )
}

export default Spinner
