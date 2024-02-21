import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

// accept cors request


export async function POST(req: NextRequest, res: NextResponse) {

  console.log(req, "<< body 🐧🐧🐧");

  // redirect to the frontend main page with relative path
  return redirect("https://ecpay-test-15jdyi0gb-chen-hsien.vercel.app/");
}

export async function GET(req: NextRequest, res: NextResponse) {
  console.log("GET request");

  console.log(req, "<< body 🐧🐧🐧");

  // redirect to the frontend main page with relative path
  return redirect("https://ecpay-test-15jdyi0gb-chen-hsien.vercel.app/");
}
