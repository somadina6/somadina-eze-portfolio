import { client } from "./client";
import * as queries from "../queries/queries";
import { GetHeroQueryResult, GetResumeUrlQueryResult } from "@/sanity.types";

export async function getHeroData() {
  try {
    const result = await client.fetch<GetHeroQueryResult>(
      queries.getHeroQuery,
      {},
      { cache: "default" }
    );
    if (!result) throw new Error("Failed to get Hero section");
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getResumeData() {
  try {
    const result = await client.fetch<GetResumeUrlQueryResult>(
      queries.getResumeUrlQuery,
      {},
      { cache: "default" }
    );
    if (!result) throw new Error("Failed to get Resume URL");
    return result;
  } catch (error) {
    console.log(error);
  }
}
