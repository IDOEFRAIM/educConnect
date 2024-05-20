import {  QueryClientProvider,QueryClient } from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {useState,ReactNode} from 'react'

const Provider = ({children}:{children:ReactNode}) => {
    const [queryClient]= useState(()=> new QueryClient() )
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default Provider
