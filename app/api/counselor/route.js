import { NextResponse } from "next/server";
import { supabase } from "@/utils/supabase/server";

export async function GET(req, { params }) {
  const { data, error } = await supabase
    .from("user")
    .select("*")
    .eq("level", "konselor");

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ data }, { status: 200 });
}
