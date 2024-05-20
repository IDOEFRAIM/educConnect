'use client'
import Link from "next/link"
const DashboardNav = () => {
    const items = [
        {
            name:'profile',
            link:'/dashboard/profile'
        },
        {
            name:'admin',
            link:'/dashboard/admin'
        },
        {
            name:'utilisateur',
            link:'/dashboard/users'
        },
        {
            name:'statistique',
            link:'/dashboard/stats'
        }
      ]
  return (
    <div className=" flex md:flex-col md:w-[200px] w-full border-r-4 border-r-gray-600 mr-[1px] ">
      {
        items.map((item,i)=>{
            const {link,name}=item
            return(
                <span key={`dashboardnavbar-${i}`} className=" hover:border-sky-600 text-3xl border-b-[1px] border-b-gray-400 hover:text-sky-600 text-align mt-4"> <Link href={link} >{name} </Link> </span>
            )
        })
      }
    </div>
  )
}

export default DashboardNav
