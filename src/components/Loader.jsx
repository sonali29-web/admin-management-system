import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <div className='w-15 h-15 border-3 border-gray-300 border-t-pink-500  rounded-full animate-spin'></div>
    </div>
  )
}

export default Loader