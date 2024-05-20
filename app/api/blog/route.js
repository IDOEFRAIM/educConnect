import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

//define schema for users

const userSchema = z
    .object({
        username: z.string().min(1, 'Le nom d utilisateur est important').max(100),
        email: z.string().min(1, 'L email n est pas present').email('email invalid'),
        password: z.string().min(1, 'Le mot de passe est important').min(8, 'Le mot de passe doit avoir plus de 8 lettres ou caractere')


    })
    export async function GET() {

        try {
            const Articles = await db.articles.findMany({
                include:{
                    category:true
                }
            })
            const categories = await db.categoryArticle
                .findMany()
            return NextResponse.json({ articles: Articles,categories:categories }, { status: 201 })
    
        } catch (error) {
            console.log(error.message)
            return NextResponse.json({ message: 'Une erreur est arrive de notre cote.Veuillez nous contacter au numero 01479800' }, { status: 500 })
        }
    }
export async function POST(req, res) {
   const { slug, title, body, headerImg, writer, category } =await req.json()
   /** 
   const slug ='quantique,informatique,vitesse,einstein'
const title = 'qbit et informatique'
const body = 'ca rend nos ordi plus rapide,vraiment dingue,ub'
const headerImg = 'qbitpic'
const writer = 'anatole ouedraogo'
const category = 'physic'*/
    try {
        const donne = {
            slug: slug,
            title: title,
            body: body,
            headerImg: headerImg,
            writer: writer
        }
        //check wheter a category exist or not
        const didCartegoryExist = await db.categoryArticle
            .findUnique({
                where: {
                    name: category
                }
            })
        
        if (!didCartegoryExist) {
             await db.articles.create({
                data: {
                    ...donne,
                    category: {
                        create:{
                            name: category
                        }
                    }
                }
            })
            return NextResponse.json({ message:'l article a ete creee avec succes' }, { status: 201 })

        } else {
            await db.articles.create({
                data: {
                    ...donne,
                    category: {
                        connectOrCreate: {
                            where: {
                                id: didCartegoryExist.id
                            },
                            create: {
                                name: category
                            },
                        },
                    }
                }
            })
            return NextResponse.json({ message:'l article a ete creee avec succes' }, { status: 201 })

        }
        //in: users.map(user => user.user_id)


    } catch (error) {
        console.log(error.message)
        return NextResponse.json({ message: 'Une erreur est arrive de notre cote.Veuillez nous contacter au numero 01479800' }, { status: 500 })
    }
}
