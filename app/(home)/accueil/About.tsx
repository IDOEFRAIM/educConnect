import Image from "next/image"
import {Button} from '@/components/ui/button'
const About = () => {
  return (
    <>
      <h1 className="text-4xl text-sky-600 my-10 mx-auto">A propos de nous</h1>
      <div className="flex flex-col md:flex-row items-center justify-between ">
        <div className="md:w-[50vw] w-full flex items-center justify-center" >
            <Image
            width='300'
            height='300'
            alt='team img'
            src='/radu-marcusu-mbKApJz6RSU-unsplash.jpg'
            className="rounded"
            />
        </div>
        <div className="md:w-[50vw] w-full">
            <h1 className="text-sky-600 text-4xl">LIBER</h1>
            <h1 className="text-lead my-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis facere magnam suscipit, enim necessitatibus reprehenderit soluta nam? Quod quasi est consequuntur, sit expedita, quis enim quidem ex quo dolore recusandae!
            </h1>
            <Button variant='primary'>Nous contacter</Button>
        </div>
      </div>
      
    </>
  )
}

export default About
