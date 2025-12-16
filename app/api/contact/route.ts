import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import { LRUCache } from 'lru-cache';

const prisma = new PrismaClient();

const rateLimit = new LRUCache<string, number>({
    max: 500,
    ttl: 60 * 60 * 1000,
});

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional().or(z.literal('')),
    company: z.string().min(1, 'Company name is required'),
    companySize: z.string().min(1, 'Company size is required'),
    location: z.string().min(1, 'Location is required'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
    currentSetup: z.string().optional().or(z.literal('')),
});

export async function POST(request: Request) {
    try {
        // Rate Limiting
        const forwardedFor = request.headers.get('x-forwarded-for');
        const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown';

        const limit = 5;
        const currentUsage = rateLimit.get(ip) || 0;

        if (currentUsage >= limit) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }
        rateLimit.set(ip, currentUsage + 1);

        const body = await request.json();

        // Validation
        const result = contactSchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json(
                { error: 'Validation failed', details: result.error.flatten() },
                { status: 400 }
            );
        }

        const { name, email, phone, company, companySize, location, message, currentSetup } = result.data;

        const lead = await prisma.lead.create({
            data: {
                name,
                email,
                phone: phone || null,
                company,
                companySize,
                location,
                message,
                currentSetup: currentSetup || null,
            },
        });

        return NextResponse.json({ success: true, lead }, { status: 200 });
    } catch (error) {
        console.error('Error creating lead:', error);
        return NextResponse.json({ error: 'Error submitting form' }, { status: 500 });
    }
}
