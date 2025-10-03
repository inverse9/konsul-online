import { NextResponse } from "next/server";
import { supabase } from "@/utils/supabase/server";

export async function PUT(req, { params }) {
  const body = await req.json();
  const { id } = params;
  const { status } = body;

  const { data, error } = await supabase
    .from("consultations")
    .update({ status })
    .eq("id", id)
    .select();

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ data }, { status: 200 });
}
