import { mealsApiHandler } from "@/libs/apiHandler/apiHandler";
import { env } from "@/libs/env/requireEnv";
import { NextRequest } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } },
) {
    const { id } = params;
    const searchParams = request.nextUrl.searchParams.toString();
    const url = `${env.API_URL}/recipes/${id}/similar/?apiKey=${env.API_KEY}&${searchParams}`;

    return mealsApiHandler(url);
}
