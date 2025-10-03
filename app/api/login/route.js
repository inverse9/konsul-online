import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { supabase } from "@/utils/supabase/server";

export async function POST(req) {
  const { email, password } = await req.json();
  const { data: users, error } = await supabase
    .from("user")
    .select("*")
    .eq("email", email)
    .limit(1);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const user = users[0];

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  return NextResponse.json(
    { message: "Login successful, please wait...", user },
    { status: 200 }
  );
}
