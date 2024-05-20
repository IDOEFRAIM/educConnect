import React from 'react'
import Nav from './SubdomainNav'
interface Props {
    children:React.ReactNode
}

const layout = (
    {children}:Props
) => {
    console.log('theorie is loading')
  return (
    <>
              <h2 className='text-2xl text-sky-600'>Arithmetiques</h2>

    <div className=' grid grid-cols-1 md:grid-cols-12'>
      <Nav/>
      <div className='md:col-span-10 '>{children} </div>
    </div>
    </>
  )
}

export default layout
