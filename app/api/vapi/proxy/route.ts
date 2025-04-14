import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        // Ensure we have the required web token
        if (!process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN) {
            throw new Error('VAPI web token is not configured');
        }

        const response = await fetch('https://api.vapi.ai/call/web', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN}`,
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                ...body,
                webToken: process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Vapi API error:', errorData);
            return NextResponse.json({ error: errorData }, { status: response.status });
        }

        const data = await response.json();
        
        // Add CORS headers to the response
        const headers = new Headers();
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

        return NextResponse.json(data, { headers });
    } catch (error) {
        console.error('Proxy error:', error);
        return NextResponse.json({ 
            error: 'Internal Server Error',
            details: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 });
    }
}

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS() {
    const headers = new Headers();
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    return new NextResponse(null, { headers });
} 