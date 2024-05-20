import React from "react"
import Nav from './DashboardNav'
interface Props {
    children:React.ReactNode
}

const layout = (
    {children}:Props
) => {
  return (
    <div className="flex flex-col md:flex-row">
        <Nav/>
        <div className="md:min-w-[80vw]">
          {children}  
        </div>
      
    </div>
  )
}

export default layout
