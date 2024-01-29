import { NextResponse } from 'next/server';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export async function GET(req: any) { 
  try {
    const {searchParams} = new URL(req.url);
    const id = searchParams.get("id");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST}/?apikey=${apiKey}&i=${id}`
    );

    if (!response.ok) {
      console.error('OMDB API request failed:', response.status, response.statusText);
      throw new Error('Failed to fetch movies');
    }

    const data = await response.json();

    return NextResponse.json({ results: data || [], error: null }, {
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching movies:', error);
    return NextResponse.json(
      { results: [], error: 'Internal Server Error' },
      {
        status: 500,
      }
    );
  }
}

export async function POST() {
  return NextResponse.json(
    { results: [], error: 'Method not allowed' },
    {
      status: 405,
    }
  );
}