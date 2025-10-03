import { NextResponse } from "next/server";
import { supabase } from "@/utils/supabase/server";

export async function POST(req) {
  const { day_id, start, end } = await req.json();
  const { data, error } = await supabase
    .from("schedule_time")
    .insert([{ day_id, start, end }])
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 201 });
}
