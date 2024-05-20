'use client'
import { Button } from '@/components/ui/button'
import { useState,useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useToast } from "@/components/ui/use-toast"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import GlobalApi from '@/app/_services/GlobalApi'
import { toast } from 'sonner'
import { useQuery } from "@tanstack/react-query";

const addNewConference = () => {
    const [open, setopen] = useState(false)
    
      
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm()
  
    const onSubmit =async(article)=>{
        console.log(article)
            const response = await GlobalApi.addArticle(article)
            if(!response.ok){
                console.log('erreur',response.data.message)
            }else{
                console.log('article creee avec succes')
            }
            setopen(false)
            toast({
                title: "Creation reussi",
                description: "La creation a ete creee",
              })
        
    }
    const { toast } = useToast()
   
            return (
                <div>
                    <Button
                        onClick={() => setopen(true)}
                        variant={'primary'}>* Ajouter un nouvel article</Button>
                        <div>
                            
                        </div>
                    <Dialog open={open} >
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Article</DialogTitle>
                                <DialogDescription>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className='py-1'>
                                        <label className='text-sky-600' > titre de la conference</label>
                                        <Input             {...register('title', { required: true })}
                                            placeholder='Entre le titre de l article' />
                                    </div>
                                    <div className='py-1'>
                                        <label className='text-sky-600' > Tag d article</label>
                                        <Input
                                            {...register('slug', { required: true })}
                                            placeholder="Entre des tags pour l article" />
                                    </div>
                                    <div className='py-1'>
                                        <label className='text-sky-600' >body</label>
                                        <Input
                                            {...register('body', { required: true })}
                                            placeholder="Entre le contenu de l article" />
                                    </div>
                                    <div className='py-1'>
                                        <label className='text-sky-600' >L image d en tete</label>
                                        <Input
                                            {...register('headerImg', { required: true })}
                                            placeholder="Entre le nom de l image d en tete" />
                                    </div>
                                    
                                    <div className='py-1'>
                                        <label className='text-sky-600' > Auteur</label>
                                        <Input             {...register('writer', { required: true })}
                                            type='text' />
                                    </div>
                                    <div className='py-1'>
                                        <label className='text-sky-600' >Entre la category.Il existe une seule pour chaque article</label>
                                        <Input             {...register('category', { required: true })}
                                            type='text' />
                                    </div>
                                    <div className="flex justify-evenly">
                                    <Button
                                        onClick={() => setopen(false)}
                                        variant={'primary'}>Annuler</Button>
                                    <Button
                                    type='submit' variant={'default'}> Creer la conference</Button>
                                </div>
                                    </form>
        
                                </DialogDescription>
                            </DialogHeader>
                            
                        </DialogContent>
                    </Dialog>
                </div>
            )        
    

}

export default addNewConference
