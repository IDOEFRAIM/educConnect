'use client'
import Categories from "./categories"
import { useQuery } from '@tanstack/react-query'
import { Button } from "@/components/ui/button"
import GlobalApi from '@/app/_services/GlobalApi'
import useArticlesStore from "@/store"

export default async function page() {
  const data = await GlobalApi.getArticles()
 
  const { articles,categories } = data


  //if (isLoading) return <p>Loading...</p>
  //if (isError) {
  //return <p>Une erreur arrive.Verifie ta connection</p>
  //}
  //console.log('donne', response) ${isFirstItem ?'flex-col justify-between bg-red-600' :' base:flex-row flex-col'}


  return (
    <div>
      blog
      {
        categories.map((category, i) => {
          const categoryArticles = articles.filter(article=>article.category.name==category.name)
          return (
            <div key={`blog-${category.name}`} >
              <h1 className="text-2xl text-sky-600">{category.name} </h1>
              <div className="grid grid-cols-1   md:grid-cols-2 justify-items-center gap-x-4 gap-y-5">
                {
                  categoryArticles.map((categoryArticles,i) => {
                    const isFirstItem = (i==0)
                    const { id, slug, title, body, headerImg, writer } = categoryArticles
                    return (
                      <div key={`blogpreview-${id}`} className={`flex flex-col`}>
                                       <img
                    className="w-full h-[50vh]"
                    src='/aaron-burden-QJDzYT_K8Xg-unsplash.jpg'
                    width='200'
                    height='200'
                    alt='pic'
                />
                        <div className="main">
                        <h2 className="text-lg text-sky-600 mb-2">#{slug} </h2>
                        <h2 className="text-2xl text-gray-500 my-2"> {title} </h2>
                        <h2 className="text-3xl ">Ecrit par <span className="text-2xl text-gray-500">{writer}</span> </h2>
                        <p className="mb-2 text-2xl text-skygray-400 w-[300px] h-[100px] text-ellipsis">{body}</p>
                        </div>
                        <div className="w-[100px] my-2">
                        <Button variant='primary'>Voir plus</Button>

                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }

    </div>
  )
}

