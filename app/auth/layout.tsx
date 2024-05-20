import React from 'react'
import Header from './headerAuth';

type Props = {
    children:React.ReactNode
}

const layout = (
    {children}:Props
) => {
  return (
    <div className='flex flex-col max-w-lg mx-auto'>
        <Header/>
      {children}
    </div>
  )
}

export default layout
