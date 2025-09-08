//! route.ts for schoools

import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

//import { PrismaClient } from "@prisma/client";
// import { PrismaClient } from "../../generated/prisma"

// const prisma = new PrismaClient()

export async function GET() {
    try {
        const schools = await prisma.school.findMany({
            where: {
                status : {
                    in : ["1"]
                }
            },
            // include: {
            //         schoolmis: true,
            //         onetp6s: true,
            //         onetm3s: true,
            //         nts: true,
            // }
        })
        return NextResponse.json(schools)
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        return NextResponse.json(
            { error: "Failed to fetch schools", detail: message },
            { status: 500 }
        );
    }
}