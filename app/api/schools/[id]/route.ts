//! route.ts schools for [id]

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // แปลงเป็น number เพราะ id เป็น Int
    const numericId = Number(params.id);

    if (!Number.isInteger(numericId)) {
      return NextResponse.json(
        { error: "Invalid ID format" },
        { status: 400 }
      );
    }

    const school = await prisma.schoolmis.findUnique({
      where: { id: numericId }
    });

    return NextResponse.json(school);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: "Failed to fetch school id", detail: message },
      { status: 500 }
    );
  }
}
