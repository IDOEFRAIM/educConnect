import Link from 'next/link'

const headerAuth = () => {
  return (
    <div className='flex flex-row max-w-[200px] justify-between  text-2xl'>
      <Link href={'/api/auth/signin'} className='hover:text-sky-600'>Se connecter</Link>
      <Link href={'/auth/register'} className='hover:text-sky-600'>S'inscrire</Link>

    </div>
  )
}

export default headerAuth
