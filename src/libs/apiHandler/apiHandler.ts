import { NextResponse } from "next/server";

export const mealsApiHandler = async (url: string) => {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            const errorData = await res.json().catch(() => ({}));
            return NextResponse.json(
                {
                    error: errorData.message || "Failed to fetch data",
                    code: "UPSTREAM_ERROR",
                },
                { status: res.status },
            );
        }

        const data = await res.json();

        return NextResponse.json(data);
    } catch (error) {
        if (error instanceof TypeError) {
            console.error("Type error:", {
                error: `${error.name}: ${error.message}`,
            });
            return NextResponse.json(
                {
                    error: `Failed to fetch data: NETWORK_ERROR`,
                },
                { status: 502 },
            );
        }
        if (error instanceof SyntaxError) {
            console.error("SyntaxError parsing external API response:", error);
            return NextResponse.json(
                {
                    error: "Invalid response from external API",
                    code: "PARSE_ERROR",
                },
                { status: 502 },
            );
        }
        console.error("Fetch error:", error);
        return NextResponse.json(
            { error: "Failed to fetch data" },
            { status: 500 },
        );
    }
};
