import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, company, companySize, location, message, currentSetup } = body;

        const lead = await prisma.lead.create({
            data: {
                name,
                email,
                phone,
                company,
                companySize,
                location,
                message,
                currentSetup,
            },
        });

        return NextResponse.json({ success: true, lead }, { status: 200 });
    } catch (error) {
        console.error('Error creating lead:', error);
        return NextResponse.json({ error: 'Error submitting form' }, { status: 500 });
    }
}
