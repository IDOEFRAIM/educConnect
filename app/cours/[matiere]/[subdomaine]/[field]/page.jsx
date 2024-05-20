'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

const page = () => {
  
    const routes = useParams()
    const {matiere,subdomaine,field} = routes
  return (
    <div>
      <h3 className='text-gray-600 Rootsuperbase@2006'>{matiere} / {subdomaine} </h3>
      <h1 className='text-2xl text-sky-600'> Chapitre:{field} </h1>
      <Latex>Product $ $ \frac{'a'}{'b'}$  $ inside text</Latex>
    </div>
  )
}

export default page
