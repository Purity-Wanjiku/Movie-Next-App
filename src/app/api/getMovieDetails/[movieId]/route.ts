

import { BASE_URL, ACCESS_TOKEN } from "@/app/config/config";

export async function GET(request: Request, { params }: { params: { movieId: number } }) {

    const movie_id = params.movieId
    if (!ACCESS_TOKEN) {
        return new Response('No movie access token found.', {
            status: 404,
            statusText: 'failed'
        })
    }

    if (!BASE_URL) {
        return new Response('No movie base url found', {
            status: 404,
            statusText: 'failed'
        })
    }

    try {
        const response = await fetch(`${BASE_URL}/3/movie/${movie_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ACCESS_TOKEN}`
            },
        });
        console.log({ response });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const result = await response.json();
        return new Response(JSON.stringify(result), {
            status: 200,
            statusText: 'success',
        });

    }
    catch (error: any) {
        return new Response(error, {
            status: 500,
            statusText: 'error'

        });
    }
}