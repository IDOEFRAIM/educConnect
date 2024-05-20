'use client'
import Image from "next/image"
import { Calendar } from "lucide-react"
import { Accordion,AccordionItem,AccordionTrigger,AccordionContent } from "@/components/ui/accordion"
import Content from './content.mdx'
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditor from 'react-froala-wysiwyg';

const page = () => {

    return (
        <div>
            <div className="article__header flex flex-col m-3">
                <img
                    className="w-full h-[50vh]"
                    src='/aaron-burden-QJDzYT_K8Xg-unsplash.jpg'
                    width='500'
                    height='500'
                    alt='pic'
                />
                <h3 className="text-2xl text-sky-600">HERON ET LES RACINES</h3>
                <p className="text-sky ">
                    <span className="flex flex-row items-center text-sm  text-gray-600"><Calendar />Publie le 11 avril 2024</span>
                    <span className="text-sky-600"> Par Albert O</span>
                </p>
            </div>
            <div className="plan my-2 mx-auto bg-white w-[120px] sticky top-0">
            <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Table de matiere</AccordionTrigger>

    <AccordionContent>
        
        <p className="text-gray-600 text-lg"><a href="#">Decouverte de la suite</a></p>
        <p className="text-sky-600 text-lg"><a href="#">Convergence de la suite</a></p>
        <p className="text-gray-600 text-lg"> <a href="#">Approximation</a></p>

    </AccordionContent>
  </AccordionItem>
</Accordion>


            </div>
            <div className="article__maincontent my-8">
                <div className="introduction">
                    Introduction: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, sunt?
                </div>
                {/* developpement*/}
                <div className="prose dark:prose-inverse">
        <Content/>
    </div>
            </div>
            <div className="article__similaire">
                <h2 className="text-3xl text-sky-600">Articles similaires</h2>
                <div className="grid gap-x-10 gap-y-8  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 center">
                    {
                      [1,2,5,6].map(x=>{
                        return(
                            <div className="w-[400px]">
                                <Image
                                src={'/aaron-burden-QJDzYT_K8Xg-unsplash.jpg'}
                                width={'300'}
                                height={'300'}
                                alt="pic"/>
                                <h3 className="text-2xl text-sky-600">title</h3>
                            </div>
                        )
                      })  
                    }
                    
                </div>
            </div>
            <div className="commentaires mt-5">
            <FroalaEditor 
            config={{
                placeholderText: 'Entre ton commentaire',
                charCounterCount: false
              }}/>
              <div className="comments">
              <h1 className="text-gray-600 text-4xl"> Commentaires </h1>

                {
                    ['John kabore','Alphonse O.','Philippe Sawadogo','Mattew perry'].map(comment=>{
                        return(
                            <div className="w-full min-h-50 my-3">
                                <h1 className="text-sky-600 text-2xl"> {comment} </h1>
                                <h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, et quia exercitationem beatae recusandae repudiandae incidunt dolore quis voluptate quod. </h2>
                            </div>
                        )
                    })
                }
              </div>
            </div>
        </div>
    )
}

export default page

