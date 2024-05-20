import React from "react"

interface Props {
    children:React.ReactNode
}


const layout = (
    {children}:Props
    ) => {
  return (
    <div>
        <h2>cours</h2>
        <div>{children} </div>
      
    </div>
  )
}

export default layout
