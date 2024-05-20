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
  
    const onSubmit =(confInfo)=>{
        const {heure,description,plateform,titre,jours,identifiant}=confInfo
        const canSend = heure && description && plateform && titre && jours && identifiant
        if(canSend){
            GlobalApi.addConf(confInfo)
            setopen(false)
            toast({
                title: "Creation reussi",
                description: "La creation a ete creee",
              })
        }
    }
    const { toast } = useToast()
   
            return (
                <div>
                    <Button
                        onClick={() => setopen(true)}
                        variant={'primary'}>* Ajouter une nouvelle conference</Button>
                        <div>
                            
                        </div>
                    <Dialog open={open} >
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Conference</DialogTitle>
                                <DialogDescription>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className='py-1'>
                                        <label className='text-sky-600' > titre de la conference</label>
                                        <Input             {...register('titre', { required: true })}
                                            placeholder='Entre le titre de la conference' />
                                    </div>
                                    <div className='py-1'>
                                        <label className='text-sky-600' > Identifiant de la conference</label>
                                        <Input
                                            {...register('identifiant', { required: true })}
                                            placeholder="Entre l'identifiant de la conference" />
                                    </div>
                                    <div className='py-1'>
                                        <label className='text-sky-600' > Plateforme de la conference</label>
                                        <Input
                                            {...register('plateform', { required: true })}
                                            placeholder="Ou se passe la conference" />
                                    </div>
                                    <div className='py-1'>
                                        <label className='text-sky-600' > Description de la conference</label>
                                        <Input
                                            {...register('description', { required: true })}
                                            placeholder="description de la conference" />
                                    </div>
                                    
                                    <div className='py-1'>
                                        <label className='text-sky-600' > Date de la conference</label>
                                        <Input             {...register('jours', { required: true })}
                                            type='date' />
                                    </div>
                                    <div className='py-1'>
                                        <label className='text-sky-600' > Horaire de la conference</label>
                                        <Input             {...register('heure', { required: true })}
                                            type='time' />
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
