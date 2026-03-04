import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET() {
    const types = await prisma.typeOption.findMany();
    return NextResponse.json(types);
}
