
import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET() {
    const supabase = createClient()
        
let { data: meeting, error } = await supabase
.from('meeting')
.select('*')
  
  return NextResponse.json({meeting }, { status: 200 });

} export async function POST(req,res){
  const supabase = createClient()

    const payload =await req.json()
const { data, error } = await supabase
.from('meeting')
.insert([payload])
.select()

    return NextResponse.json({message:'posted' }, { status: 200 });

}

export async function DELETE(req,res){
  const supabase = createClient()
const id =await req.json()
console.log(id)
const { error } = await supabase
.from('meeting')
.delete()
.eq('id',id)
return NextResponse.json({error }, { status: 200 });


}