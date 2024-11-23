import React from 'react'

export default function Loading() {
  return (
  
<div className="w-full mt-96 text-center gap-x-2 flex justify-center items-center">
  <div
    className="w-5 bg-[#cc3568] animate-pulse h-5 rounded-full "
  ></div>
  <div
    className="w-5 animate-pulse h-5 bg-black-100 rounded-full "
  ></div>
  <div
    className="w-5 h-5 animate-pulse bg-red-600 rounded-full "
  ></div>
</div>

  )
}
