

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"


const page =  () => {
    return (
        <>
        <div className="lg:max-w-[950px]  md:max-w-[650px] sm:max-w-[525px] w-full max-w-[300px] mx-auto">

            <Carousel
                className="h-[100vh]"

            >
                <CarouselContent>
                    <CarouselItem>
                        <BookHeader imageUrl='/susan-q-yin-2JIvboGLeho-unsplash.jpg' text='Des histoires heterogenes' />

                    </CarouselItem>
                    <CarouselItem>
                        <BookHeader imageUrl='/radu-marcusu-mbKApJz6RSU-unsplash.jpg' text='Des autheurs aussi geniaux que leur oeuvres' />

                    </CarouselItem>
                    <CarouselItem>
                        <BookHeader imageUrl='/aaron-burden-QJDzYT_K8Xg-unsplash.jpg' text='Des oeuvres aussi fascinantes que geniale' />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <LastRead/>
            <BookPresentation part='Nos meilleurs oeuvres' children='novel title' />
        </div>
        </>
  )
}

export const BookHeader = ({ text, imageUrl }: any) => {
    return (
        <div className="h-[90vh] flex justify-center items-center" 
        style={{ backgroundImage: `url(${imageUrl})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <p className="text-sky-600 text-5xl mx-2 text-center">{text} </p>

        </div>
    )
}
export const LastRead= ()=>{
    return(
        <>
        <h1 className="text-sky-600 text-3xl">Tes derniers lectures</h1>
        <h1 className="text-gray-600 text-md">Relis ou tu t es arrete</h1>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col justify-center">
                <Image
                width='400'
                height='400'
                alt='last read'
                src='/susan-q-yin-2JIvboGLeho-unsplash.jpg'
                />
                <h1>Percent:80%</h1>
                <h1 className="text-lead">Il y a  <span className="text-sm text-gray-600">2 jr</span> </h1>
            </div>
            <div className="flex flex-col justify-center">
                <Image
                width='400'
                height='400'
                alt='last read'
                src='/susan-q-yin-2JIvboGLeho-unsplash.jpg'
                />
                <h1>Percent:80%</h1>
                <h1 className="text-lead">Il y a  <span className="text-sm text-gray-600">2 jr</span> </h1>
            </div>
            <div className="flex flex-col justify-center">
                <Image
                width='400'
                height='400'
                alt='last read'
                src='/susan-q-yin-2JIvboGLeho-unsplash.jpg'
                />
                <h1>Percent:80%</h1>
                <h1 className="text-lead">Il y a  <span className="text-sm text-gray-600">2 jr</span> </h1>
            </div>
            <div className="flex flex-col justify-center">
                <Image
                width='400'
                height='400'
                alt='last read'
                src='/susan-q-yin-2JIvboGLeho-unsplash.jpg'
                />
                <h1>Percent:80%</h1>
                <h1 className="text-lead">Il y a  <span className="text-sm text-gray-600">2 jr</span> </h1>
            </div>
        </div>
        </>
    )
}

export const BookPresentation =({part,children}:any)=>{
    return(
        <>
        <h1 className="text-lg text-sky-600 my-3"> {part}</h1>
        <div>
            <Carousel>
                <CarouselContent>
                    <CarouselItem className="basis-1/3">
                        <Image
                        width='300'
                        height='300'
                        alt='best of picture'
                        src='/aaron-burden-QJDzYT_K8Xg-unsplash.jpg'
                        />
                        <h1 className="text-lg text-sky-600">{children}</h1>
                    </CarouselItem>
                    <CarouselItem>
                        <Image
                        width='300'
                        height='300'
                        alt='best of picture'
                        src='/aaron-burden-QJDzYT_K8Xg-unsplash.jpg'
                        />
                        <h1 className="text-lg text-sky-600">{children}</h1>
                    </CarouselItem>
                    <CarouselItem>
                        <Image
                        width='300'
                        height='300'
                        alt='best of picture'
                        src='/aaron-burden-QJDzYT_K8Xg-unsplash.jpg'
                        />
                        <h1 className="text-lg text-sky-600">{children}</h1>
                    </CarouselItem>
                    <CarouselItem>
                        <Image
                        width='300'
                        height='300'
                        alt='best of picture'
                        src='/aaron-burden-QJDzYT_K8Xg-unsplash.jpg'
                        />
                        <h1 className="text-lg text-sky-600">{children}</h1>
                    </CarouselItem>
                    <CarouselItem>
                        <Image
                        width='300'
                        height='300'
                        alt='best of picture'
                        src='/aaron-burden-QJDzYT_K8Xg-unsplash.jpg'
                        />
                        <h1 className="text-lg text-sky-600">{children}</h1>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
        </>
    )
}
export default page
