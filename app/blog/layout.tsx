import React from 'react'

interface Props {
    children:React.ReactNode
}

const layout = (
    {children}:Props
) => {
  return (
    <div className='max-w-[100vw]'>
      <h3>nav</h3>
      <div>
        {children}
      </div>
    </div>
  )
}

export default layout
