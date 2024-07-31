import { GetResumeUrlQueryResult } from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";
import * as queries from "@/sanity/queries/queries";

export async function GET(req: Request) {
  try {
    const result = await client.fetch<GetResumeUrlQueryResult>(
      queries.getResumeUrlQuery,
      {},
      { cache: "no-cache" }
    );
    if (result && result.resumeUrl) {
      return NextResponse.json(result, { status: 200, statusText: "success" });
    }
  } catch (error) {
    console.log("Getting Review Failed:", error);
    return new NextResponse("Unable to Fetch", { status: 400 });
  }
}
