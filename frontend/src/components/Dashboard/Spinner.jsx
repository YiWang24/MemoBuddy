import React from 'react'
import './Spinner.css'

const Spinner = () => {
    return (
        <div>
            {/* spinner to show while fetching weather data */}
            <img src='/loading.gif' alt="loader" height="70px" width="70px"></img>
        </div>
    )
}

export default Spinner
