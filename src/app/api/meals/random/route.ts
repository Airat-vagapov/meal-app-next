import { mealsApiHandler } from "@/libs/apiHandler/apiHandler";
import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.API_KEY!;
const API_URL = process.env.API_URL!;

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams.toString();
    const url = `${API_URL}/recipes/random/?apiKey=${API_KEY}&${searchParams}`;

    return mealsApiHandler(url);
}
