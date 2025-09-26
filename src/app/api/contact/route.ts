import { NextResponse } from "next/server";
import { contactController } from "@/interface/api/contactController";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = await contactController(body);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Erro API:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
