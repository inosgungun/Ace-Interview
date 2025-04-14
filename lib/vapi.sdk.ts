import Vapi from '@vapi-ai/web';

// Use the public key for client-side initialization
export const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY!);