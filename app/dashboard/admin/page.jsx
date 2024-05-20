'use client'
import Table from './Table'
import Conference from './Conference'
import { useQuery } from '@tanstack/react-query'
import GlobalApi from '@/app/_services/GlobalApi'
import Articles from './Articles'
export default function Page() {
  const { data, isLoading, isError } = useQuery({
    queryFn: ()=> GlobalApi.getAllConf(),
    queryKey: ["conf"],
  });
  if (isLoading) return <p>Loading...</p>
  if (isError) {
    return <p>Une erreur arrive.Verifie ta connection</p>
  }
  const {meeting} = data
 if(data){
  return (
    <div>

      <h2 className="text-md text-gray-500">Bienvnue sur la page Admin.Faites attention a ne pas supprimer des informations importantes</h2>
      <div>
        <div>      
          <h2 className="text-md text-sky-600 mb-4">Conference</h2>
          <div className="addConference flex ">
             <Conference />
             <Articles/>
          </div>
          <div className="conferencess flex flex-col w-full">
            {
                        <Table rowFields={meeting} />

            }
          </div>

        </div>

      </div>
    </div>
  )
 }
}