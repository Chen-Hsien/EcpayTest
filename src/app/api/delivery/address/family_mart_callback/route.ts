import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();

  console.log(body, "<< body 🐧🐧🐧");

  // redirect to the frontend main page with relative path
  return redirect("https://ecpay-test-qkdvm305i-chen-hsien.vercel.app");
}
