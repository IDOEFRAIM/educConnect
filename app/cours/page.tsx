import Image from "next/image"
import Link from 'next/link'
const page = () => {
  return (
    <>
    <div className="grid justify-items-center lg:grid-cols-3 sm:grid-cols-2 base:grid-cols-1">
        {
            ['Mathematiques','Economie','Politique','Physiques','Informatiques'].map(x=>{
                return(
                    <div className=" flex flex-col">
                        <Image
                        src='/aaron-burden-QJDzYT_K8Xg-unsplash.jpg'
                        width='300'
                        height='300'
                        alt='pic'/>
                        <h2 className="text-sky-600 text-xl"> 
                         <Link href={`/cours/${x}`}> {x} </Link> </h2>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default page
