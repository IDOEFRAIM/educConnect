import React from 'react'

type Props = {
    children:React.ReactNode
}

export default (
    {children}:Props
)=>{
    return(
        <div>
            <h1>Nav</h1>
            {children}
        </div>
    )
}