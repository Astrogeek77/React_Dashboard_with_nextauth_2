import React from 'react'

function Activity() {
  return (
    <div className="w-full mt-8">
      <h3 className="w-full text-xl text-center font-bold mt-8">
        Dashboard Activity
      </h3>
      <ul className="flex flex-col gap-2 justify-center items-center p-2">
        <li className="w-full text-center bg-teal-100 text-black px-8 py-4 border-bottom-red-500">
          Adam Joined
        </li>
        <li className="w-full text-center bg-red-100 text-black px-8 py-4 border-bottom-red-500">
          Emil left
        </li>
        <li className="w-full text-center bg-teal-100 text-black px-8 py-4 border-bottom-red-500">
          Marie Joined
        </li>
        <li className="w-full text-center bg-yellow-100 text-black px-8 py-4 border-bottom-red-500">
          Charts updated
        </li>
      </ul>
    </div>
  )
}

export default Activity
