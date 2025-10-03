import { NextResponse } from "next/server";
import { supabase } from "@/utils/supabase/server";

export async function POST(req) {
  const { counselor_id, day } = await req.json();
  const { data, error } = await supabase
    .from("schedule_day")
    .insert([{ counselor_id, day }])
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 201 });
}
