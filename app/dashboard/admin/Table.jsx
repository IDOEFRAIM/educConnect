import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { useState,useEffect } from 'react';
import {Trash,Search} from 'lucide-react'
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from "@/components/ui/dialog"
import { DialogTrigger } from '@radix-ui/react-dialog';
import GlobalApi from '@/app/_services/GlobalApi';

const pagination = true;
const paginationPageSize = 500;
const paginationPageSizeSelector = [4,8,16,20];

const Table = ({rowFields}) => {
    const [open, setopen] = useState(false)
        // Row Data: The data to be displayed.
        const [rowData, setRowData] = useState(rowFields)
        // Column Definitions: Defines the columns to be displayed.,,,,,
        const [colDefs, setColDefs] = useState([
          { field: "identifiant" ,filter:true},
          { field: "plateform",filter:true },
          { field: "titre" ,filter:true},
          { field: "jours",filter:true},
          { field: "heure" ,filter:true},
          { field: "description" ,filter:true},
          { field: "action" ,cellRenderer:CustomButton},

        ]);
        const [search, setsearch] = useState()
        useEffect(()=>{
            rowFields && setRowData(rowFields)
        },[rowFields])
        function CustomButton(props){
            return(
                <Dialog >
                    <DialogTrigger>
                    <Button
                    
                     variant='danger'> <Trash color='white'/> </Button>
                    </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Supprimer</DialogTitle>
                        <DialogDescription>
                            Es tu vraiment sur de vouloir supprimer cette conference

                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant={'danger'} onClick={()=>{
                             GlobalApi.deleteConf(props.data.id).then(error=>console.log(error))
                            setopen(false)
                            }
                             }>Supprimer</Button>
                             <Button variant={'danger'} onClick={()=>setopen(false)
                             }>Annuler</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            ) 
        }
        return (
            // wrapping container with theme & size
            <div
             className="ag-theme-quartz mt-7 mb-12" // applying the grid theme
             style={{ height: 500 }} // the grid will fill the size of the parent container
            >
                <div className="py-2 rounded-lg border shadow-sm flex gap-2 mb-4 max-w-sm">
                    <Search/>
                    <input
                    onChange={(e)=>setsearch(e.target.value)}
                    className='outline-none w-full'
                     type='text' placeholder='Cherche n importe quoi..'/>
                </div>
              <AgGridReact
                  rowData={rowData}
                  columnDefs={colDefs}
                  quickFilterText={search}
                  pagination={pagination}
                  paginationPageSize={paginationPageSize}
                  paginationPageSizeSelector={paginationPageSizeSelector}
              />
            </div>
           )
}

export default Table
