'use client'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {signIn} from 'next-auth/react'
import { Input } from '@/components/ui/input'
import GlobalApi from '@/app/_services/GlobalApi'
import { toast } from 'sonner'
import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from '@radix-ui/react-toast'
import { useRouter } from 'next/navigation'

const Login = () => {
    const router = useRouter()
    const {toast} = useToast()
    const [error, seterror] = useState()
    const [loading, setloading] = useState(false)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm()
    const onSubmit = async (info) => {
        setloading(true)
        const signinData = await signIn('credentials',{
            email:info.email,
            password:info.password,
            redirect:false
        })
        if(signinData?.error){
            console.log(signinData.error)
            toast({
                title: "Erreur",
                description: "Verifez que l email et le mot de passse correspondent et que vous etes connecte a internet.Veuillez nous contacter si l erreur persiste",
                variant:'destructive',
                action: <ToastAction altText="Creer un compte" 
                onClick={()=>router.push('/auth/register')}
                >Creer un compte</ToastAction>,

              })
      
        }else{            
            router.push('/dashboard')
            toast({
                title: "Succes",
                description:'Nous vous redirigons vers votre profil',
              })
        }
        setloading(false)
    }
    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='py-1'>
                    <label className='text-sky-600' >Entre ton email</label>
                    <Input
                        type='email'
                        {...register('email', {
                            required: true,
                            pattern: {
                                value: /^[^@]+@[^@]+\.[^@]+$/,
                                message: 'Verifie que tu as entre un email correct' // JS only: <p>error message</p> TS only support string
                            }
                        })}
                        placeholder="Entre ton email" />
                    {errors.email && <p className='text-red-600 text-sm'>* {errors.email.message} </p>}

                </div>
                <div className='py-1'>
                    <label className='text-sky-600' > Mot de passe</label>
                    <Input
                        {...register('password', { required: "Ton mot de passe doit faire au moins 8 caracteres" })}
                        placeholder="Entre ton Mot de passe" />
                    {errors.password && <p className='text-red-600 text-sm'>* {errors.password.message} </p>}

                </div>


                <Button disabled={loading}
                    type='submit' variant={loading ? 'default' : 'primary'}> Se connecter</Button>

                {error && <p className='text-red-600 text-sm'>* {error} </p>}

            </form>
    )


}

export default Login
