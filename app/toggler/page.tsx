import { Gem } from "lucide-react"
import Image from "next/image"

const page = () => {
    return (
        <div className="w-full h-full flex flex-col "
        >
            <div className="w-[600px] h-[600px] grid grid-cols-2 grid-rows-2 relative lg:-top-[100px] lg:-left-[200px]
            -top-[200px] -right-[15%]
             splitting">
                <div className="absolute top-[275px] left-[275px] w-[50px] h-[50px] rounded-full bg-sky-600"></div>
                <div className="flex justify-center items-center    rotate-180">
                    <Part text='Des autheurs aussi fantastiques que leur oeuvres'  imageUrl='/aaron-burden-QJDzYT_K8Xg-unsplash.jpg'/>
                </div>
                <div className="flex justify-center items-center   ">
                <Part text='Une equipe dynamique et competente'  imageUrl='/aaron-burden-QJDzYT_K8Xg-unsplash.jpg'/>
                </div>
                <div className="flex justify-center items-center  rotate-90">
                <Part text='Des oeuvres diverses et extraordinaires'  imageUrl='/aaron-burden-QJDzYT_K8Xg-unsplash.jpg'/>
                </div>


                <div className="flex justify-center items-center   ">
                <Part text='Une bibliotheque qui vous accompagne'  imageUrl='/aaron-burden-QJDzYT_K8Xg-unsplash.jpg'/>
                </div>

            </div>
            <div className="lg:absolute lg:right-0 lg:top-0 flex justify-center items-center
             lg:translate-y-0 -translate-y-[175px]">
                <iframe src="https://giphy.com/embed/WoWm8YzFQJg5i" className="lg:w-[550px] lg:h-[500px] 
                w-[100vw] h-[400px]" frameBorder="0"  allowFullScreen></iframe>

            </div>
            <div className="w-full h-0 pb-[73%] relative">
                 <Image
                width={550}
                height={500}
                alt="img"
                src={'/reading.jpg'}
                />
                 </div>
        </div>
    )
}

export const Part = ({text,imageUrl}:any) => {
    return (
      <div

       className='w-full h-full rounded-full flex flex-col justify-center items-center'>
      <span className='text-3xl text-sky-60 px-10 text-center'>{text} </span>  
      <Gem />
      </div>
    )
  }
  
export default page
