import React from 'react'

const lockPassword = ({password,handleLockSubmit}) => {
    return (
        
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              {/* Popup UI */}
              <div className="bg-white p-6 rounded-lg shadow-lg w-[300px]">
                <form>
                  <label htmlFor="inputText" className="block text-gray-700 mb-2">
                    Enter Password
                  </label>
                  <input
                    type="text"
                    id="inputText"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
    
                  {/* Close Button */}
                  <button
                    type="submit"
                    onClick={handleLockSubmit}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 w-full"
                  >
                    Lock
                  </button>
                  <button
                    type="button"
                    onClick={handleLockShow}
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 w-full"
                  >
                    Close
                  </button>
                </form>
              </div>
            </div>
          )
    
}

export default lockPassword
