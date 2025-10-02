import { NextResponse } from "next/server";
import { supabase } from "@/utils/supabase/server";
import bcrypt from "bcrypt";

export async function POST(req) {
  const body = await req.json();
  const { name, email, password, level } = body;
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const { data, error } = await supabase
    .from("user")
    .insert([{ name, email, level, password: hashedPassword }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(
    { message: "User registered!", data },
    { status: 201 }
  );
}

// export async function GET(request) {
//   const { searchParams } = new URL(request.url); // Extract query params
//   const type = searchParams.get("type"); // Get 'type' query param
//   const { data, error } = await supabase
//     .from("berita")
//     .select("*")
//     .eq("type", type);

//   if (error)
//     return NextResponse.json({ error: error.message }, { status: 500 });

//   return NextResponse.json(data, { status: 200 });
// }

// // 🚀 PUT: Update a product by ID
// export async function PUT(req) {
//   const body = await req.json();
//   const { id, name, price } = body;

//   const { data, error } = await supabase
//     .from("berita")
//     .update({ name, price })
//     .eq("id", id);

//   if (error)
//     return NextResponse.json({ error: error.message }, { status: 500 });

//   return NextResponse.json(
//     { message: "Product updated", product: data },
//     { status: 200 }
//   );
// }

// // 🚀 DELETE: Remove a product by ID
// export async function DELETE(req) {
//   const { id } = await req.json();

//   const { error } = await supabase.from("berita").delete().eq("id", id);

//   if (error)
//     return NextResponse.json({ error: error.message }, { status: 500 });

//   return NextResponse.json({ message: "Product deleted" }, { status: 200 });
// }
