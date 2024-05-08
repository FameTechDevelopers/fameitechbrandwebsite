import React from 'react'

function Wrapper({children , className}) {
  return (
    <div className={`size-full max-w-[1140px] flex justify-center items-center ${className}`}>
        {children}
    </div>
  )
}

export default Wrapper