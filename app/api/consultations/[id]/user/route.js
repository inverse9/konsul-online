import { NextResponse } from "next/server";
import { supabase } from "@/utils/supabase/server";

export async function GET(req, { params }) {
  const { id } = params;

  const { data, error } = await supabase
    .from("consultations")
    .select(
      "id,description,status,day_id, schedule_day(*),schedule_time(*),   patient:user!consultations_patient_id_fkey(id, name), counselor:user!consultations_counselor_id_fkey(id, name)"
    )
    .eq("patient_id", id);

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ data }, { status: 200 });
}
