import { NextResponse } from "next/server";
import { supabase } from "@/utils/supabase/server";

export async function GET(request, { params }) {
  const { id } = params;
  const { data, error } = await supabase
    .from("schedule_day")
    .select("id,counselor_id,user(*),day,schedule_time(*)")
    .eq("counselor_id", id);

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(data, { status: 200 });
}
