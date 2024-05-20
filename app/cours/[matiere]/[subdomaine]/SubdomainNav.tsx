import Link from "next/link"

const SubdomainNav = () => {
  return (
    <div>
        <div className="theorie grid grid-cols-1 bg-gray-200 ">
            {
                ['modulo','bezout','euclide'].map(x=>{
                    return <span className='w-[100px] h-[50px]  py-auto hover:border-l-2 hover:border-l-sky-600'>
                        <Link href={`/cours/Mathematiques/arithmetiques/${x}`}>{x}</Link>
                          </span>
                })
            }
        </div>
        <div className="exercice grid grid-cols-1 bg-gray-300">
            {
                ['Exercice1','Exercice2','Exercice3'].map(x=>{
                    return <span className='w-[100px] h-[50px] py-auto hover:border-l-2 hover:border-l-sky-600'> 
                                            <Link href={`/cours/Mathematiques/arithmetiques/exercice/${x}`}>{x}</Link>
 </span>
                })
            }
        </div>
    </div>
  )
}

export default SubdomainNav
