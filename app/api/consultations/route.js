import { NextResponse } from "next/server";
import { supabase } from "@/utils/supabase/server";

export async function POST(req) {
  const { counselor_id, patient_id, description, day_id, time_id } =
    await req.json();
  const { data, error } = await supabase
    .from("consultations")
    .insert([{ counselor_id, patient_id, description, day_id, time_id }])
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 201 });
}
