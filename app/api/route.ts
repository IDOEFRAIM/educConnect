
import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
// To handle a GET request to /api
export async function GET(req:any) {
    const supabase = createClient()
    try {
        let { data: profs, error } = await supabase
        .from('profs')
        .select('name,matiere')
        
          if (profs) {
            console.log('profs',profs)
          }
        } catch (error) {
            console.log('error',error)
        }
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}