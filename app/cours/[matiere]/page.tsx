import Link from "next/link"

const page = () => {
    const matiere = [
        {
            subdomain: 'arithmetiques',
            fields: ['euclide', 'modulo', 'bezout']
        },
        {
            subdomain: 'geometrie',
            fields: ['droite d euler', 'les barycentre', 'les similitudes']
        },
        {
            subdomain: 'analyse',
            fields: ['la derivation', 'les limites', 'les integrales']
        },
        {
            subdomain: 'denombrement',
            fields: ['outils basiques', 'theoreme des tiroirs', 'les invariants']
        }
    ]
    console.log('matiere')
    return (
        <>
            <div>
                <h3 className="text-sky-600 text-xl mx-auto mb-4 w-full">Cours /domaine: Mathematiques</h3>
                <h4 className="text-gray-600 text-sm">Un petit feedback: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente ex neque rerum mollitia numquam aut quos velit, assumenda quis impedit placeat cum, iste nesciunt error odit dolores id accusantium quas. </h4>
                <div className="w-full flex flex-col">
                    {
                        matiere.map(x => {
                            const { subdomain, fields } = x
                            return (
                                <>
                                    <div className="max-w-[1020px] mx-auto">
                                        <h3 className="text-sky-600 text-xl mx-auto mt-6 bg-gray-300"> {subdomain} </h3>
                                        <div className="grid grid-cols-2 base:grid-cols-1">
                                            {/*theorie*/}
                                            <div className="flex flex-col w-[320px] bg-gray-200 " >
                                            <h1 className="mx-auto mb-4 text-xl text-black">Theorie</h1>
                                                {fields.map(y => {
                                                    return (
                                                        <ul className="list-disc ml-8" >
                                                            <li className="hover:text-sky-600"><Link href={`/cours/Mathematiques/${subdomain}/${y}`}>{y}</Link>  </li>
                                                        </ul>

                                                    )
                                                })}
                                            </div>
                                            <div className=" flex flex-col w-[320px] bg-gray-100/80 ">
                                            <h1 className="mx-auto mb-4 text-xl">Exercice</h1>
                                            <div className="grid-cols-6">
                                                {/*exercice*/}
                                                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(y => {
                                                    return (
                                                            <span className="mx-2 hover:text-sky-600">{y} </span>
                                                        )
                                                })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                )
                        })
                    }
               </div>

            </div>
        </ >
    )
}

export default page
